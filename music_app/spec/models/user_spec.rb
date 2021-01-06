require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      email: "dogguy@gmail.com",
      password: "good_password")
  end

  describe 'validations' do
    it {should validate_presence_of(:email) }
    it {should validate_presence_of(:password_digest)}
    it {should validate_length_of(:password).is_at_least(6)}

    it "creates a password digest when a password is given" do
      expect(user.password_digest).to_not be_nil
    end
  end

  describe 'instance methods' do

    describe '#is_password?' do
      it 'should return true if password matches for user' do
        expect(user.is_password?('good_password')).to eq(true)
      end

      it 'should return false if password does not match for user' do
        expect(user.is_password?('football70')).to eq(false)
      end
    end

    describe '#reset_session_token!' do
      it 'should save a new session_token for user' do
        session_token_start = user.session_token
        user.reset_session_token!
        expect(user.session_token).not_to eq(session_token_start)
      end
    end
  end

  describe 'class methods' do

    describe '::find_by_credentials' do
      before { user.save! }

      it "returns user given good credentials" do
        expect(User.find_by_credentials("dogguy@gmail.com", "good_password")).to eq(user)
      end

      it "returns nil given bad credentials" do
        expect(User.find_by_credentials("catguy@gmail.com", "football70")).to eq(nil)
      end
    end
  end

end
