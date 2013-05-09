require 'spec_helper'

describe User do
  it "test common user!" do
  	u = FactoryGirl.build(:user)
  	expect(u.nick_name).to eq('John')
  end

  it "create Guest User!" do
    u = FactoryGirl.build(:guest_user)
	  expect(u.is_guest_user?).to be_true

  end

  it "create Admin User!" do
  		u = FactoryGirl.build(:admin_user)
  		expect(u.is_admin?).to be_true
  end

  it "mock test demo..." do
    user = mock('User', :nick_name => 'tony', :say_hi => 'hello')
    # user.stub(:say_hi).and_return('hi')
    u = FactoryGirl.build(:user)
    user.should_receive(:nick_name)
    user.should_not_receive(:say)
    expect(u.nick_name).to eq(user.nick_name)

  end
end