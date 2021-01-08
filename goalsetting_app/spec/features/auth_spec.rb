require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content 'Create a new user'
  end

  feature 'signing up a user' do

    scenario 'shows username on the page after signup' do
        visit new_user_url
        fill_in 'email', with: 'redman@gmail.com'
        fill_in 'password', with: 'good_password'
        click_on 'Create Account'
        expect(page).to have_content 'redman@gmail.com'
    end

  end
end


feature 'logging in' do
  scenario 'shows username on the homepage after login'

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end