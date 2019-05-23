Stardust::GraphQL.define_query :all_todos do

  description "Get all of the todos"
  null true
  type [:todo]

  def resolve
    ::Todo.order(:id)
  end

end
