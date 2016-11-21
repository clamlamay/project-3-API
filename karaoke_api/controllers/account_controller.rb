class AccountsController < ApplicationController


	get '/' do
		Account.all.to_json
	end

	post '/' do
		@username = params[:username]
		@password = params[:password]

		# password_salt = BCrypt::Engine.generate_salt
		# password_hash = BCrypt::Engine.hash_secret(@password, password_salt)

		@model = Account.new
		@model.username = @username
		@model.password = @password 
		# @model.password_hash = password_hash
		# @model.password_salt = password_salt
		@model.save

		@account_message = "You have successfully registered and you are logged in :)"
		session[:user] = @username
		@model.to_json
	end

	post '/login' do
		@username = params[:username]
		@password = params[:password]
		if does_user_exist?(@username) == true
			session[:user] = @username
			p session
			{ :message => 'Started session.'}.to_json
		else
			{ :message => 'You need to register.'}.to_json	
			# redirect '/register'
		end

		# @model = Account.where(:username => @username).first!
		# if @model.password_hash == BCrypt::Engine.hash_secret(@password, @model.password_salt)
		# 	@account_message = "Welcome back!"
		# 	session[:user] = @model
		# 	@username = session[:user][:username]
		# else
		# 	@account_message = "Sorry, your password did not match. Try again?"
		# end
	end

	get '/logout' do
		session[:user] = nil
		redirect '/'
	end



	# delete '/:id' do
	# 	@id = params[:id]
	# 	@model = Account.find(@id)
	# 	@model.destroy

	# 	{ :message => 'User has been deleted.'}.to_json
	# end

end
