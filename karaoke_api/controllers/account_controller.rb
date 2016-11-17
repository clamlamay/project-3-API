class AccountsController < ApplicationController

	# before '/*' do
	# 	if session[:logged] == nil

	# 		session[:warning] = 'not logged'
	# 		redirect('/users/login')
	# 	end
	# end

	get '/' do
		Account.all.to_json
	end

	get '/:id' do
		@id = params[:id]
		Account.find(@id).to_json
	end

	post '/' do
		@username = params[:username]
		@password = params[:password]

		@model = Account.new
		@model.username = @username
		@model.password = @password
		@model.save

		@model.to_json
	end


	post '/register' do
		# accept the params from a post
		# to create a user
		# hint: bcrypt
		@username = params[:username]
		@password = params[:password]
		# @email = params[:email]
		if does_user_exist?(@username) == true
			# @account_message = "User already exists."
			# return ejs :login_notice
			{ :message => 'User already exists.'}.to_json
		end

		# password_salt = BCrypt::Engine.generate_salt
		# password_hash = BCrypt::Engine.hash_secret(@password, password_salt)

		@model = Account.new
		@model.username = @username
		@model.password = @password
		# @model.email = @email
		# @model.password_hash = password_hash
		# @model.password_salt = password_salt
		@model.save

		# @account_message = "You have successfully registered and you are logged in :)"
		{ :message => 'You have successfully registered and you are logged in :)'}.to_json

		session[:user] = @model
		@username = session[:user][:username]
		#binding.pry

		# ejs :login_notice

	end

	patch '/:id' do
		@id = params[:id]
		@model = Account.find(@id)
		@username = params[:username]
		@password = params[:password]
		@model.username = @username
		@model.password = @password
		@model.save

		@model.to_json
	end
	
	delete '/:id' do
		@id = params[:id]
		@model = Account.find(@id)
		@model.destroy

		{ :message => 'User has been deleted.'}.to_json
	end

end
