require 'rails_helper'

RSpec.describe User, type: :model do
    subject(:user) { FactoryBot.build(:user,
      email: 'quickkid@gmail.com',
      password: 'football20') }

    describe 'validations' do
      it {should validate_presence_of(:email)}
      it {should validate_presence_of(:password_digest)}
      it {should validate_length_of(:password).is_at_least(6)}
    end

    describe 'instance methods' do
      describe '#is_password?' do
        it 'should return true if password matches user password_digest' do
          expect(user.is_password?('football20')).to be true
        end
        it 'should return false if password does not match' do
          expect(user.is_password?('baseball99')).to be false
        end
      end
      describe '#reset_session_token!' do
        it 'should create a new session token for user' do
          start_session_token = user.session_token
          user.reset_session_token!
          expect(start_session_token).not_to eq(user.session_token)
        end
      end
    end

    describe 'class methods' do
      describe '::find_by_credentials' do 
        before {user.save}

        it 'should return User based on email and password if exists' do
          expect(User.find_by_credentials('quickkid@gmail.com', 'football20'))
            .to eq(user)
        end
        it 'should return nil is user does not exist' do
          expect(User.find_by_credentials('slowkid@gmail.com', 'baseball11'))
            .to be nil
        end
      end
    end
end
