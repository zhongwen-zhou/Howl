#encoding:utf-8
require 'spec_helper'
describe "the signup process", :type => :feature do
  it "signs me in" do
    visit '/sessions/new'
    page.should have_content '请输入你的邮箱地址和密码登录！'
  end

  it "sign_in" do
    visit '/sessions/new'
    within("#new_user") do
      fill_in 'user_email', :with => 'zhongwenzhou.wolf@gmail.com'
      fill_in 'user_password', :with => 'tonytone'
    end
    click_button 'submit_btn'
    page.should have_content 'Tony设计'    
  end
end