class Jobs::SleepJob
  @queue = :sleeper
  def self.perform(id)
  	u = User.find(id)
  	u.increment!(:permission)
  	# u.update_attribute(:nick_name,name)
  	# u.save!
  end
end