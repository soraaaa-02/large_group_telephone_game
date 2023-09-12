Rails.application.routes.draw do
  namespace :challenges do
    get 'canvas/index'
    get 'canvas/new'
    get 'canvas/create'
    get 'canvas/show'
  end
  get 'profiles/show'
  get 'profiles/edit'
  get 'profiles/update'
  get 'challenges/index'
  root to: 'top#index'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
