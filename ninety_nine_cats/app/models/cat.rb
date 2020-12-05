require 'action_view'

class Cat < ApplicationRecord
    ActionView::Helpers::DateHelper

    def age
        time_ago_in_words(Time.new - self.birth_date)
    end
end