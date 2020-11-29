class Comment < ApplicationRecord
    validates :body, :artwork_id, :user_id, presence: true

    belongs_to :author,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :artwork,
        foreign_key: :artwork_id

    has_many :likes,
        as: :likeable

end