class SubsController < ApplicationController
    before_action :require_user!, only: [:new, :create, :destroy, :edit, :update]

    def index
        render :index
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)

        @sub.moderator_id = current_user.id

        if @sub.save
            redirect_to sub_url(@sub.id)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    def edit
        @sub
    end

    def update

    end

    def destroy

    end

    private
    def sub_params
        params.require(:sub).permit([:title, :description])
    end

end