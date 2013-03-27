class HomeController < Personal::ApplicationController
  # layout false
  skip_filter :authorize_login
  skip_filter :redirect_guest_view

  # caches_page :index
  def index
  	@active_nav = 'home'
  end
end
