class UsersController < ApplicationController
  def index
    if params[:query]
      users = User.where('username LIKE ?', "%#{params[:query]}%")
    else
      users = User.all
    end

    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: user.errors.full_messages, status: 422
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
