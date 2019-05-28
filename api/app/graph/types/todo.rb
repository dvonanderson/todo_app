Stardust::GraphQL.define_types do

  object :todo do
    description "todo"
    field :id, :id, null: false
    field :title, :string, null: false
    field :description, :string, null: false
    field :created_by, :string, null: true
    field :updated_by, :string, null: true
    field :created_at, :datetime, null: true
    field :updated_at, :datetime, null: false
    field :completed, :boolean, null: true
  end

end
