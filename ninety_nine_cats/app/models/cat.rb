# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    CAT_COLORS = ["black", "white", "orange", "brown"].freeze

    validates :color, inclusion: CAT_COLORS
    validates :sex, inclusion: ["M", "F"]
    validates :birth_date, :name, :color, :sex, presence: true

    has_many :rental_requests,
        foreign_key: :cat_id,
        class_name: 'CatRentalRequest',
        dependent: :destroy

    def age
        time_ago_in_words(birth_date)
    end
end
