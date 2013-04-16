FactoryGirl.define do
  factory :activity, class: Activity do
    subject "John"
    association :user, factory: :user, password: 'ok'
  end

  factory :common_activity, class: Activity do
  	nick_name "admin"
  	permission 99
  end

  factory :special_activity, class: Activity do
  	nick_name "guest"
  	permission -1
  end
end