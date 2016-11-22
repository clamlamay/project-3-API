class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()

	register Sinatra::CrossOrigin


	@account_message = ''
	@username = ''

	ActiveRecord::Base.establish_connection(
		:adapter => 'mysql2',
		:database => 'Project_3'
	)
	# ActiveRecord::Base.establish_connection(
	# 	:adapter  => 'sqlite3',
 #  		:database => 'karaoke.db'
	# )

	configure do
	  	enable :cross_origin
	end

	before '/*' do 
		puts "Route log:"
		puts request.host
		puts params
		puts request.path
		# puts 'Session:'
		# p session
	end

	after '/*' do 
		puts "Completed Route Log:"
		puts response.body
		puts response.status
		# puts 'Session:'
		# p session
	end

	# set :views, File.dirname(__FILE__) + '/views'
	# set :public_folder, File.File.dirname(__FILE__) + '/public'

	enable :sessions, :logging

	set :allow_origin, :any
	set :allow_methods, [:get, :post, :patch, :delete]

	options "*" do
		response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
	    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	    200
	end

	def does_user_exist?(username)
		user = Account.find_by(:username => username.to_s)
		if user
			return true 
		else
			return false
		end
	end

	# def is_not_authenticated
	# 	p 'Testing for auth is_not_authenticated'
	# 	p session
	# 	session[:user].nil?	#bool
	# end

	get '/' do
	    {:message => 'Home page not designed yet.'}.to_json
	end

end
