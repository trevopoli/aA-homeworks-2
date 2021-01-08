class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title, null: false
      t.text  :description, null: false
      t.integer :user_id, null: false
      t.date :completion_date, null: false
      t.boolean :completed, default: false
      t.boolean :private, default: false

      t.timestamps
    end

    add_index :goals, :user_id
  end
end
