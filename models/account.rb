class Account < ActiveRecord::Base
	self.table_name = "accounts"
	has_many :songs
	has_one :points
end

