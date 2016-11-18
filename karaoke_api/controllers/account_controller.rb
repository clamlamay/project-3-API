class AccountsController < ApplicationController


	get '/' do
		Account.all.to_json
	end

	# get '/:id' do
	# 	@id = params[:id]
	# 	Account.find(@id).to_json
	# end


	post '/users' do
		@username = params[:username]
		@password = params[:password]

		if does_user_exist?(@username) == false
			@account_message = "User already exists."
		end

		password_salt = BCrypt::Engine.generate_salt
		password_hash = BCrypt::Engine.hash_secret(@password, password_salt)

		@model = Account.new
		@model.username = @username
		@model.password_hash = password_hash
		@model.password_salt = password_salt
		@model.save

		@account_message = "You have successfully registered and you are logged in :)"

		session[:user] = @model
		@username = session[:user][:username]

		@model.to_json
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

	post '/login' do
		@username = params[:username]
		@password = params[:password]
		# if does_user_exist?(@username) == false
		# 	@account_message = "User already exists."
		# end

		@model = Account.where(:username => @username).first!
		if @model.password_hash == BCrypt::Engine.hash_secret(@password, @model.password_salt)
			@account_message = "Welcome back!"
			session[:user] = @model
			@username = session[:user][:username]
		else
			@account_message = "Sorry, your password did not match. Try again?"
		end

	end

	get '/logout' do
		session[:user] = nil
		@username = nil
		redirect '/'

	end

	get '/test' do

		if is_not_authenticated == false
				@account_message = "Come on in"
			else
				@account_message = "You shall not pass!"
			end
	end


	# delete '/:id' do
	# 	@id = params[:id]
	# 	@model = Account.find(@id)
	# 	@model.destroy

	# 	{ :message => 'User has been deleted.'}.to_json
	# end

end
