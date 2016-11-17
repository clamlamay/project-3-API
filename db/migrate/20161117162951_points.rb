class Points < ActiveRecord::Migration[5.0]
  def change
  	create_table :points do |table|
  		table.string :score
  	end
  end
end
