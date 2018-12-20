Rails.application.routes.draw do
  namespace :api do
    resources :catagorys 
      resources :cards


  end

  get '*other', to: 'static#index'
end
