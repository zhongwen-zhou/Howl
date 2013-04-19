Rails.application.config.middleware.use OmniAuth::Builder do 
  provider :qq_connect, '100414912', 'bdc90d7def92e9510236e4a7de27a847'
  provider :weibo, '701417006', '45b4de7c610c5449257ebe514237ceed'
end
