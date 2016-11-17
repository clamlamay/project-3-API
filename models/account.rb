class Account < ActiveRecord::Base
	self.table_name = "accounts"
	has_one :points 
	has_many :songs 
end




