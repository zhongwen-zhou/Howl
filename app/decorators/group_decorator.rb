class GroupDecorator < Draper::Decorator
  delegate_all

  def created_at
  	source.created_at.strftime("%H:%M:%S")
  end
end
