# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CatRentalRequest < ApplicationRecord

    STATUS_STATES = ['APPROVED', 'PENDING', 'DENIED'].freeze

    validates :cat_id, :end_date, :start_date, :status, presence: true
    validates :status, inclusion: STATUS_STATES

    belongs_to :cat

    after_initialize :assign_pending_status

    def approve!
        transaction do
            self.status = 'APPROVED'
            self.save!
            overlapping_pending_requests.each {|req| req.deny!}
        end
    end

    def deny!
        self.status = 'DENIED'
        self.save!
    end

    def approved?
        self.status == 'APPROVED'
    end

    def denied?
        self.status == 'DENIED'
    end

    private
    def assign_pending_status
        self.status ||= 'PENDING'
    end

    def overlapping_requests
        CatRentalRequest
            .where.not(id: self.id)
            .where(cat_id: self.cat_id)
            .where.not('start_date > :end_date OR end_date > :start_date',
                start_date: self.start_date,
                end_date: self.end_date)
    end

    def overlapping_pending_requests
        overlapping_requests.where('status = \'PENDING\'')
    end

end
