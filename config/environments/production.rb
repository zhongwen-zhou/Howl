Howl::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # Code is not reloaded between requests
  config.cache_classes = true

  # Full error reports are disabled and caching is turned on
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true
  config.cache_store = :redis_store

  # Disable Rails's static asset server (Apache or nginx will already do this)
  config.serve_static_assets = false

  # Compress JavaScripts and CSS
  config.assets.compress = true

  # Don't fallback to assets pipeline if a precompiled asset is missed
  config.assets.compile = false

  # Generate digests for assets URLs
  config.assets.digest = true

  # Defaults to nil and saved in location specified by config.assets.prefix
  # config.assets.manifest = YOUR_PATH

  # Specifies the header that your server uses for sending files
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # See everything in the log (default is :info)
  # config.log_level = :debug

  # Prepend all log lines with the following tags
  # config.log_tags = [ :subdomain, :uuid ]

  # Use a different logger for distributed setups
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

  # Use a different cache store in production
  # config.cache_store = :mem_cache_store

  # Enable serving of images, stylesheets, and JavaScripts from an asset server
  # config.action_controller.asset_host = "http://assets.example.com"

  # Precompile additional assets (application.js, application.css, and all non-JS/CSS are already added)
  # config.assets.precompile += %w( search.js )

  # Disable delivery errors, bad email addresses will be ignored
  # config.action_mailer.raise_delivery_errors = false

  # Enable threaded mode
  # config.threadsafe!

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found)
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners
  config.active_support.deprecation = :notify

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  # config.active_record.auto_explain_threshold_in_seconds = 0.5

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
