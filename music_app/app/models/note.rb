class Note < ApplicationRecord
    validates :user_id, uniqueness: {scope: :track_id}
    validates :text, presence: true

    belongs_to :user

    belongs_to :track
end