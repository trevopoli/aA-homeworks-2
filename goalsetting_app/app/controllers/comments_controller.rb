class CommentsController < ApplicationController


    def create
        comment = Comment.new(comment_params)
        comment.author_id = current_user.id

        if comment.save
            redirect_to params["redirect_path"]
        else
            flash[:errors] = comment.errors.full_messages
            redirect_to params["redirect_path"]
        end
    end

    def destroy
        comment = Comment.find_by[id: params[:id]]
        comment.destroy
        redirect_to params["redirect_path"]
    end

    private
    def comment_params
        params.require(:comment).permit(:text, :commentable_id, :commentable_type)
    end

end