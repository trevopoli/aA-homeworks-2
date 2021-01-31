class Comment < ApplicationRecord
    validates :content, presence: true

    belongs_to :post, inverse_of: :comments
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User,
        inverse_of: :comments
    
    has_many :child_comments,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        primary_key: :id
        
    
end