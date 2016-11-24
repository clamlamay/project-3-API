class PointsController < ApplicationController
	

	get '/' do
		Point.all.to_json
	end

	get '/:id' do
		@id = params[:id]
		Point.find(@id).to_json
	end

	post '/' do
		@score = params[:score]
		@account_id = params[:account_id]

		@model = Point.new
		@model.score = @score
		@model.account_id = @account_id
		@model.save

		@model.to_json
	end

	patch '/:id' do
		@id = params[:id]
		@model = Point.find(@id)
		@score = params[:score]
		@model.score = @score
		@model.save

		@model.to_json
	end
	
	delete '/:id' do
		@id = params[:id]
		@model = Point.find(@id)
		@model.destroy

		{ :message => 'Score has been deleted.'}.to_json
	end
end 
