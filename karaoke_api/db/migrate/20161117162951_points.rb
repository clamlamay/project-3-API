class Points < ActiveRecord::Migration[5.0]
  def change
  	create_table :points do |table|
  		table.integer :score
  		table.integer :account_id, foreign_key: :account
  	end
  end
end
