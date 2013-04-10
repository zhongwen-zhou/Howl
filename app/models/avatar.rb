#encoding: utf-8
class Avatar < ActiveRecord::Base
  belongs_to :user
end
