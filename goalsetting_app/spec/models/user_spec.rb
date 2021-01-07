require 'rails_helper'

RSpec.describe User, type: :model do
    subject(:user) { FactoryBot.build(:user) }

    describe 'validations' do
      it {should validate_presence_of(:email)}
      it {should validate_presence_of(:password_digest)}
      it {should validate_length_of(:password).is_at_least(6)}
    end

    describe 'class methods' do
      describe '::find_by_credentials' do 
        it 'should return User based on email and password if exists' 
        it 'should return nil is user does not exist' 
      end
    end
end
