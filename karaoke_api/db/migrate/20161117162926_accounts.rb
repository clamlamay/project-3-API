class Accounts < ActiveRecord::Migration[5.0]
  def change
	create_table :accounts do |table|
		table.string :username
<<<<<<< HEAD
		table.string :password_hash
  		table.string :password_salt
=======
		table.string :password
		
		# table.string :password_hash
		# table.string :password_salt
>>>>>>> da295c435598d3605fb82adf627dce7eeb5ed12a
	end
  end
end
