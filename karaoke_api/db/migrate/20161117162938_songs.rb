class Songs < ActiveRecord::Migration[5.0]
  def change
	create_table :songs do |table|
		table.string :title
		table.string :artist
		table.string :lyrics
		# table.integer :account_id
		table.references :accounts, column: :id, index: true
	end 
	# add_foreign_key :accounts, :accounts_id
  end
end
