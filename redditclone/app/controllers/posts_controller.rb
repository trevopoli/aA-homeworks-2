class PostsController < ApplicationController
    before_action :require_user!, only: [:new, :create, :destroy, :edit, :update]

    def new
        @post = Post.new
        render :new
    end
    
    def create
        @post = Post.new(post_params)

        @post.author_id = current_user.id

        if @post.save
            redirect_to post_url(@post.id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end
        
    def edit
        @post = Post.find_by(id: params[:id])

        redirect_to post_url(@post.id) unless Post.is_current_user_author?(@post)

        render :edit
    end
    
    def update
        
    end 
    
    def show
        @post = Post.find_by(id: params[:id])
        @all_comments = @post.comments_by_parent_id
        render :show
    end
    
    def destroy

    end

    private
    def post_params
        params.require(:post).permit([:title, :content, :url, sub_ids:[]])
    end

    def self.is_current_user_author?(post)
        post.author_id == current_user.id
    end
end