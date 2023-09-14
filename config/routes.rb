Rails.application.routes.draw do
  resource :challenges do
    resource :canvas, only: %i[index new create show]
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
