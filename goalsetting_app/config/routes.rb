Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :new, :create, :show]

  resource :session, only: [:new, :create, :destroy]

  resources :goals, only: [:new, :create, :edit, :update, :destroy, :show]

  resources :comments, only: [:create, :destroy]
  
end
