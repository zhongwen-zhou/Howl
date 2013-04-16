require 'spec_helper'

describe User do
  it "test common user!" do
  	u = FactoryGirl.build(:user)
  	expect(u.nick_name).to eq('John')
  end

  it "create Guest User!" do
	  u = FactoryGirl.build(:guest_user)
	  expect(u.is_guest_user?).to eq(true)
  end

  it "create Admin User!" do
  		u = FactoryGirl.build(:admin_user)
  		expect(u.is_admin?).to eq(true)
  end
end