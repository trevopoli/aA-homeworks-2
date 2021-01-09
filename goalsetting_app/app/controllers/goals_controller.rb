class GoalsController < ApplicationController
    before_action :require_user!, only: %i(new show create edit update destroy)

    #check log in before new/create and edit/destroy

    def new
        @goal = Goal.new
        render :new
    end

    def create
        goal = Goal.new(goal_params)
        goal.user_id = current_user.id

        if goal.save
            redirect_to user_url(goal.user_id)
        else
            flash.now[:errors] = goal.errors.full_messages
            render :new
        end
    end

    def show
        @goal = Goal.find_by(id: params[:id])

        #check if private or author to show
        if @goal.user_id == current_user.id || !@goal.private
            render :show
        else
            # redirect to home with error
            flash[:errors] = ["You do not have access to that goal."]
            redirect_to users_url
        end
    end

    # def edit

    # end

    # def update

    # end

    def destroy
        goal = Goal.find_by(id: params[:id])
        user_id = goal.user_id
        goal.destroy
        redirect_to user_url(user_id)
    end

    private
    def goal_params
        params.require(:goal).permit(:user_id, :title, :description, :completion_date, :private)
    end

end