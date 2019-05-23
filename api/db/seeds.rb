30.times do
	Todo.create({
		title: FFaker::Movie.title,
		description: FFaker::Lorem.sentence,
		created_by: FFaker::Music.artist,
		updated_by: FFaker::Name.name,
		completed: false
	})
end
