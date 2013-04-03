#encoding: utf-8
Howl::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Log error messages when you accidentally call methods on nil.
  config.whiny_nils = true

  # Show full error reports and disable caching
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = true
  config.cache_store = :redis_store
  # Don't care if the mailer can't send
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin

  # Raise exception on mass assignment protection for Active Record models
  config.active_record.mass_assignment_sanitizer = :strict

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  config.active_record.auto_explain_threshold_in_seconds = 0.5

  # Do not compress assets
  config.assets.compress = true

  # Expands the lines which load the assets
  config.assets.debug = true


  config.middleware.delete 'Rack::Cache'   # 整页缓存，用不上
  config.middleware.delete 'Rack::Lock'    # 多线程加锁，多进程模式下无意义
  config.middleware.delete 'Rack::Runtime' # 记录X-Runtime（方便客户端查看执行时间）
  config.middleware.delete 'ActionDispatch::RequestId' # 记录X-Request-Id（方便查看请求在群集中的哪台执行）
  config.middleware.delete 'ActionDispatch::RemoteIp'  # IP SpoofAttack
  config.middleware.delete 'ActionDispatch::Callbacks' # 在请求前后设置callback
  config.middleware.delete 'ActionDispatch::Head'      # 如果是HEAD请求，按照GET请求执行，但是不返回body
  config.middleware.delete 'Rack::ConditionalGet'      # HTTP客户端缓存才会使用
  config.middleware.delete 'Rack::ETag'    # HTTP客户端缓存才会使用

config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  :address              => "smtp.qq.com",
  :port                 => 25,
  :user_name            => '348281683@qq.com',
  :password             => 'tonetony',
  :authentication       => 'plain',
  :enable_starttls_auto => true  } 
end
