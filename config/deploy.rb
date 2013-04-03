require 'bundler/capistrano'
set :application, "Howl"
set :repository,  "https://github.com/zhongwen-zhou/Howl.git"


set :scm_verbose, true
set :scm, :git
set :user, "tony"
set :use_sudo, false
set :keep_releases, 5
set :deploy_to, "/home/tony/project_space/Howl"
set :branch, "development"

set :default_environment, {
  'PATH' => "/path/to/.rvm/gems/ree/1.8.7/bin:/path/to/.rvm/bin:/path/to/.rvm/ree-1.8.7-2009.10/bin:$PATH",
  'RUBY_VERSION' => 'ruby 1.8.7',
  'GEM_HOME'     => '/path/to/.rvm/gems/ree-1.8.7-2010.01',
  'GEM_PATH'     => '/path/to/.rvm/gems/ree-1.8.7-2010.01',
  'BUNDLE_PATH'  => '/path/to/.rvm/gems/ree-1.8.7-2010.01'  # If you are using bundler.
}

# set :rvm_path, "/usr/local/rvm/gems/ruby-2.0.0-p0@tony_project/bin"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "106.187.101.20"                          # Your HTTP server, Apache/etc
role :app, "106.187.101.20"                          # This may be the same as your `Web` server
role :db,  "106.187.101.20", :primary => true # This is where Rails migrations will run
role :db,  "106.187.101.20"


# Use our ruby-1.9.2-p290@my_site gemset
# default_environment["PATH"]         = "--"
# default_environment["GEM_HOME"]     = "--"
# default_environment["GEM_PATH"]     = "--"
default_environment["RUBY_VERSION"] = "ruby-2.0.0-p0"

default_run_options[:shell] = 'bash'

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end