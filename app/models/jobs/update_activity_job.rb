class Jobs::UpdateActivityJob
  @queue = :howl
  def self.perform
  	Activity.update_status
  end
end