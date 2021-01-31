class CommentsController < ApplicationController
    before_action :require_user!, only: [:new, :create]

    def new
        @comment = Comment.new(post_id: params[:post_id])
        render :new
    end

    def create
        @comment = Comment.new(comment_params)

        @comment.author_id = current_user.id

        if @comment.save
            redirect_to post_url(@comment.post_id)
        else
            flash[:errors] = @comment.errors.full_messages
            redirect_to subs_url
        end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    private
    def comment_params
        params.require(:comment).permit(:post_id, :parent_comment_id, :content)
    end

end