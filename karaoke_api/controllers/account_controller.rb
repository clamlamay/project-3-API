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

		password_salt = BCrypt::Engine.generate_salt
		password_hash = BCrypt::Engine.hash_secret(@password, password_salt)

		@model = Account.new
		@model.username = @username
		@model.password_hash = password_hash
		@model.password_salt = password_salt
		@model.save

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
	
	delete '/:id' do
		@id = params[:id]
		@model = Account.find(@id)
		@model.destroy

		{ :message => 'User has been deleted.'}.to_json
	end

end
