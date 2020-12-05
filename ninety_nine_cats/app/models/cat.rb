require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    CAT_COLORS = ["black", "white", "orange", "brown"].freeze

    validates :color, inclusion: CAT_COLORS
    validates :sex, inclusion: ["M", "F"]
    validates :birth_date, :name, :color, :sex, presence: true

    def age
        time_ago_in_words(birth_date)
    end
end