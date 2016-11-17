class Song < ActiveRecord::Base
	self.table_name = "songs"
	belongs_to :accounts
end
