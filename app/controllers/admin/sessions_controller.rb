class Admin::SessionsController < Admin::ApplicationController
	skip_filter :authorize_login
  # layout "admin"
  def index
  end

  def new
  end
end
