Rails.application.routes.draw do
  root to: 'top#index'
  resource :challenges do
    resource :canvas, only: %i[index new create show]
  end
  resource :profiles, only: %i[index edit update show]
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
