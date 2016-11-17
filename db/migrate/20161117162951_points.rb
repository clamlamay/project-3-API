class Points < ActiveRecord::Migration[5.0]
  def change
  	create_table :points do |table|
  		table.string :score
  		table.string :accounts_id
  	end
  end
end
