#encoding: utf-8
class Picture < ActiveRecord::Base

  mount_uploader :activity, ActivityUploader
  mount_uploader :group, GroupUploader

  attr_accessible :imageable_type, :imageable_id, :user_id, :status, :description, :visable_status, :activity, :activity_cache, :group, :group_cache
  belongs_to :imageable, :polymorphic => true
  belongs_to :user
end
