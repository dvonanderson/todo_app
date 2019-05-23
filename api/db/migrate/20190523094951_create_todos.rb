class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :description
      t.string :created_by
      t.string :updated_by
      t.datetime :created_at
      t.datetime :updated_at
      t.boolean :completed

      t.timestamps
    end
  end
end
