#encoding: utf-8
require 'open-uri'
require "net/http"
require "uri"
require "json"
class SessionsController < ApplicationController
  include SimpleCaptcha::ControllerHelpers
  layout 'personal'
  # http_basic_authenticate_with :name => 'admin', :password => 'tony'
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

  def auth
    if params.has_key?(:access_token)
      uri = "https://graph.qq.com/oauth2.0/me?access_token=#{params[:access_token]}"
      html_response = nil  
      open(uri) do |http|  
        html_response = http.read  
      end  
      open_id = html_response[45..76]
      qq_uri = "https://graph.qq.com/user/get_user_info?access_token=#{params[:access_token]}&oauth_consumer_key=100414912&openid=#{open_id}"
      qq_response = nil
      open(qq_uri) do |http|
        qq_response = http.read
      end
      qq_user = JSON.parse qq_response
      @user = User.create_auth('qq', qq_user)
      Rails.logger.info("===user:#{@user}")
      session[:current_user_id] = @user.id
    else
      # return redirect_to root_path
      return render :layout => false
    end
  end
end
