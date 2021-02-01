class Post < ApplicationRecord
    validates :title, presence: true
    validates :subs, presence: { message: 'must have at least one sub' }

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User',
        inverse_of: :posts

    has_many :post_subs, inverse_of: :post, dependent: :destroy
    has_many :subs, through: :post_subs, source: :sub
    has_many :comments, inverse_of: :post
    has_many :votes, as: :votable

    def top_level_comments
        self.comments.where(parent_comment_id: nil)
    end

    def comments_by_parent_id
        comments = self.comments.includes(:author)
        all_comments = Hash.new {|key, value| key[value] = []}
        comments.each do |comment|
            all_comments[comment.parent_comment_id] << comment
        end
        all_comments
    end

    def vote_count
        self.votes.sum(:value)
    end

end