require 'spec_helper'

describe User do
  it "create Guest User!" do
	  # u = User.last
	  u = FactoryGirl.build(:guest_user)
	  expect(u.is_guest_user?).to eq(false)
  end

  it "create Admin User!" do
  		u = FactoryGirl.build(:admin_user)
  		expect(u.is_admin?).to eq(true)
  end
end