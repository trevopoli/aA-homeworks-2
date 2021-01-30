class Sub < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true

    belongs_to :moderator,
        foreign_key: :moderator_id,
        class_name: 'User'

    has_many :posts,
        foreign_key: :sub_id

end