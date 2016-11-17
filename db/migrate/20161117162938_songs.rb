class Songs < ActiveRecord::Migration[5.0]
  def change
	create_table :songs do |table|
		table.string :title
		table.string :artist
		table.string :lyrics
	end 
  end
end
