#encoding: utf-8
class SessionsController < ApplicationController
  include SimpleCaptcha::ControllerHelpers
  layout 'personal'
  skip_filter :authorize_login
  skip_filter :require_login
  def index
  end

  def new
  	@user = User.new
  end

  def create
    user = User.new(params[:user])
    unless simple_captcha_valid?
      return redirect_to new_sessions_path, :notice => "验证码错误！"
    end
  	@user = user.authorize_user
    if @user.present?
      @user.sign_in(request.remote_ip)
      session[:current_user_id] = @user.id
      if params[:user][:is_remember] == 'true'
        cookies[:access_token] = @user.remember_me
      else
        cookies[:access_token] = @user.canel_remember_me
      end
  		return redirect_to root_path
  	else
      @user = User.new
  		return redirect_to new_sessions_path, :notice => "用户名或密码错误！"
  	end
  end

  def destroy
    @current_user.remember_me
    session[:current_user_id] = nil
    return redirect_to root_path
  end
end
