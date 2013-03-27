class HowlTool
	def self.encrypt_md5(str)
		Digest::MD5.hexdigest(str)
	end
end