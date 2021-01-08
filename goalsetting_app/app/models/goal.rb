class Goal < ApplicationRecord
    validates :title, :description, :completion_date, :user_id, presence: true
    validates :completed, presence: true
    validates :private, presence: true


end