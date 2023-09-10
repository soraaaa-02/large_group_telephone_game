Rails.application.routes.draw do
  get 'challenges/index'
  root to: 'top#index'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
end
