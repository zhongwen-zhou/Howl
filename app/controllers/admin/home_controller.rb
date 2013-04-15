class Admin::HomeController < Admin::ApplicationController
	http_basic_authenticate_with :name => 'admin', :password => 'tony'
  def index
  end

  def new
  end

end
