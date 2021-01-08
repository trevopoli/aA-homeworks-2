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
  before(:each) do
    visit new_user_url
    fill_in 'email', with: 'redman@gmail.com'
    fill_in 'password', with: 'good_password'
    click_on 'Create Account'
    click_on 'Log Out'
  end

  scenario 'shows username on the homepage after login' do
    visit new_session_url
    fill_in 'email', with: 'redman@gmail.com'
    fill_in 'password', with: 'good_password'
    click_button 'Log In'
    expect(page).to have_content 'redman@gmail.com'
  end
end

feature 'logging out' do
  before(:each) do
    visit new_user_url
    fill_in 'email', with: 'blueman@gmail.com'
    fill_in 'password', with: 'good_password'
    click_on 'Create Account'
  end

  scenario 'begins with a logged out state' do
    click_on 'Log Out'
    expect(page).to have_content 'Log In'
  end
end