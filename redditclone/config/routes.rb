Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create]
  
  resource :session, only: [:new, :create, :destroy] #singular session

  resources :subs

  resources :posts, only: [:new, :create, :edit, :update, :show, :destroy] do
    resources :comments, only: [:new]
    member do
      get 'upvote'
      get 'downvote'
    end
  end

  resources :comments, only: [:create, :show]

end
