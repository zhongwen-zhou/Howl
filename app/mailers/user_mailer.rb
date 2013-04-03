class UserMailer < ActionMailer::Base
  default from: "info@nbd.com.cn"

  def welcome_email(email)
  	email ||= '348281683@qq.com'
    mail(:to => email,
         :subject => "Welcome to Wolf-Howl!")
  end  
end
