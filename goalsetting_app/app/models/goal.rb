class Goal < ApplicationRecord
    validates :title, :description, :completion_date, :user_id, presence: true
    validates :completed, default: false
    validates :private, inclusion: { in: [ true, false ] }

    belongs_to :user

    has_many :comments, as: :commentable

end