Rails.application.routes.draw do
  root to: 'top#index'
  resources :challenges do
    resources :canvas, only: %i[index new create show]
  end

  resources :profiles, only: %i[index edit update show]
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
