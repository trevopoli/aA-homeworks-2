class Comment < ApplicationRecord
    validates :text, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    belongs_to :commentable, polymorphic: true
end