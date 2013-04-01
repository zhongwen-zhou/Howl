require 'spec_helper'

describe User do
  it "create Guest User!" do
	  # u = User.last
	  u = FactoryGirl.build(:user)
	  expect(u.is_guest_user?).to eq(false)
  end
end