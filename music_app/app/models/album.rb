class Album < ApplicationRecord
    validates :title, presence: true
    validates :year, presence: true

    belongs_to :band
    
    has_many :tracks,
        dependent: :destroy
end