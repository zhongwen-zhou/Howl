FactoryGirl.define do
  factory :user do
    nick_name "John"
  end

  factory :admin_user do
  	nick_name "admin"
  	permission 99
  end

  factory :guest_user do
  	nick_name "guest"
  	permission -1
  end
end