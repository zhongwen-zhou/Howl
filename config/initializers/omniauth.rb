Rails.application.config.middleware.use OmniAuth::Builder do 
  provider :qq_connect, '100414912', 'bdc90d7def92e9510236e4a7de27a847'
end
