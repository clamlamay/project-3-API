class ApplicationController < Sinatra::Base

	require 'bundler'
	require 'sinatra/cross_origin'

	Bundler.require()

	#register Sinatra::CrossOrigin

	
	# @account_message = ''
	# @username = ''

	ActiveRecord::Base.establish_connection(
		:adapter => 'mysql2',
		:database => 'Project_3'
	)

	# set :views, File.dirname(__FILE__) + '/views'
	# set :public_folder, File.File.dirname(__FILE__) + '/public'
	#  set :session_secret, "hi"
	# enable :sessions, :logging
	enable :sessions

	# options "*" do
	# 	response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
	#     response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	#     200
	# end

	# configure do
	#   enable :cross_origin
	# end

	#set :session_secret, "My session secret"
   

	def does_user_exist?(username)
		user = Account.find_by(:username => username.to_s)
		if user
			return true 
		else
			return false
		end
	end

	def is_not_authenticated
		session[:user].nil?	#bool
	end

	get '/' do
	    {:message => 'Home page not designed yet.'}.to_json
	end

end
