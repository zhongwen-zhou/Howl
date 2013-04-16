require 'spec_helper'

describe Activity do
  it "test common activity!" do
  	activity = FactoryGirl.build(:activity)
  	expect(activity.user.nick_name).to eq('John')
  end
end