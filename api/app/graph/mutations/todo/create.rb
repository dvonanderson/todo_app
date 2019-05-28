Stardust::GraphQL.define_mutation :create_todo do
	description "create a todo"

	argument :title, :string, required: true
	argument :description, :string, required: true

	field :todo, :todo, null: true

	def resolve(title:, description:)
		todo = Todo.create( title: title, description: description)
		{
			todo: todo
		}
	end
end