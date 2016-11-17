class Point < ActiveRecord::Base
	self.table_name = "points"
	belongs_to :accounts
end

