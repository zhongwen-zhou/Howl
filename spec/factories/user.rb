FactoryGirl.define do

  factory :basic_user, class: User do
    password "ok"
    password_confirmation "ok"
    nick_name "John"
  end

  factory :user, class: User, parent: :basic_user do
    email { Time.now.to_i.to_s }
  end

  factory :admin_user, class: User, parent: :basic_user do
  	nick_name "admin"
  	permission 99
  end

  factory :guest_user, class: User, parent: :basic_user do
  	nick_name "guest"
  	permission -1
  end
end