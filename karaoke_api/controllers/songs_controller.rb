class SongsController < ApplicationController

	get '/' do
		Song.all.to_json
	end

	get '/:id' do
		@id = params[:id]
		Song.find(@id).to_json
	end

	patch '/:id' do
		@id = params[:id]
		@model = Account.find(@id)
		@title = params[:title]
		@artist = params[:artist]
		@lyrics = params[:lyrics]

		@model = Song.new
		@model.title = @title
		@model.artist = @artist
		@model.lyrics = @lyrics
		@model.id = @id
		@model.save
		p model

		@model.to_json
	end

	get '/users/:id' do
		binding.pry
		@a = Account.all
		@a = Account.find(1)
		@a.songs
		@a.songs.create(:title => 'meow', :artist => 'guster', :lyrics => 'meow meow meow')
		 @Song.all
		 Song.all
		 @a.songs
		 @a.songs.to_json 

	end

	post '/' do
		@id = params[:id]
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
