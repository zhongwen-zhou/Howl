# Be sure to restart your server when you modify this file.

Howl::Application.config.session_store :redis_store, key: '_Howl_session', :expire_after => 60*20
# Howl::Application.config.session_store :redis_session_store,  :servers => 'redis://127.0.0.1:6379/15', :expire_after => 60*40

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
# Howl::Application.config.session_store :active_record_store
