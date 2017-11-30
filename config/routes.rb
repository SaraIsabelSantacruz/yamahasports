Rails.application.routes.draw do
  root to: 'static#home'
  get '/catalogo', to: 'static#catalogo'
  get '/detalle', to: 'static#detalle'
  get '/financiacion', to: 'static#financiacion'
  get '/citas', to: 'static#citas'
  get '/contacto', to: 'static#contacto'
  get '/send_finan', to: 'forms#finan'
  get '/catal1', to: 'static#catal1'
  get '/catal2', to: 'static#catal2'
end
