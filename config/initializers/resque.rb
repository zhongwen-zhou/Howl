# require 'resque_scheduler'
# require 'resque_scheduler/tasks'
require 'resque_scheduler'
Resque.redis = 'localhost:6379/howl-resque'

Resque.schedule = YAML.load_file(Rails.root.join('config', 'resque_schedule.yml'))