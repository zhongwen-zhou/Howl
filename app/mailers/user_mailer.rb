class UserMailer < ActionMailer::Base
  default from: "info@nbd.com.cn"

  def welcome_email(user)
    mail(:to => '348281683@qq.com',
         :subject => "Welcome to Wolf-Howl!")
  end  
end
