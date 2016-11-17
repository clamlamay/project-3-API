require 'sinatra/base'

require './controllers/application_controller.rb'

# #models
# require './models'

map('/') { run ApplicationController }

before '/*' do 
	puts "Route log:"
	puts request.host
	puts params
	puts request.path
end

after '/*' do 
	puts "Completed Route Log:"
	puts reponse.body
	puts response.status
end