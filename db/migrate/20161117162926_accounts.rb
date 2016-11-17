class Accounts < ActiveRecord::Migration[5.0]
  def change
	create_table :accounts do |table|
		table.string :username
		table.string :password
		add_foreign_key :songs, :accounts
		add_foreign_key :points, :accounts
	end	
  end
end
