FactoryBot.define do
  factory :todo do
    title { "MyString" }
    description { "MyString" }
    created_by { "MyString" }
    updated_by { "MyString" }
    created_at { "2019-05-23 05:49:51" }
    updated_at { "2019-05-23 05:49:51" }
    completed { false }
  end
end
