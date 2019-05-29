Stardust::GraphQL.define_mutation :edit_todo do
	description "edit a todo"

	argument :id, :id, required: false
	argument :title, :string, required: false	
	argument :description, :string, required: false

	field :todo, :todo, null: true

	def resolve(id:, title:, description:)
		todo = Todo.where(id: id) # How does the mutation know what id to modify
		todo = Todo.update( id: id, title: title, description: description)
		{
			todo: todo
		}
	end
end