class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.references :user, null: false, foreign_key: true
      t.string :genre
      t.string :title
      t.integer :limit_people
      t.integer :current_people
      t.date :limit_time
      t.string :canvas_gif

      t.timestamps
    end
  end
end
