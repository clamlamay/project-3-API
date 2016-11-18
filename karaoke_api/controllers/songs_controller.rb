class SongsController < ApplicationController

	get '/' do
		Song.all.to_json
	end

	get '/:id' do
		@id = params[:id]
		Song.find(@id).to_json
	end

	post '/:id' do
		@id = params[:id]
		@model = Account.find(@id)
		@title = params[:title]
		@artist = params[:artist]
		@lyrics = params[:lyrics]

		@model = Song.new
		@model.title = @title
		@model.artist = @artist
		@model.lyrics = @lyrics
		@model.save

		@model.to_json
	end

	post '/' do
		@title = params[:title]
		@artist = params[:artist]
		@lyrics = params[:lyrics]

		@model = Song.new
		@model.title = @title
		@model.artist = @artist
		@model.lyrics = @lyrics
		@model.save

		@model.to_json
	end
	
	delete '/:id' do
		@id = params[:id]
		@model = Song.find(@id)
		@model.destroy

		{ :message => 'Song has been deleted.'}.to_json
	end


end
