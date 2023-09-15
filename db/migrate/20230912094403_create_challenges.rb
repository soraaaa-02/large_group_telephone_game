class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.references :user, null: false, foreign_key: true
      t.string :genre, default: "none"
      t.string :title, null: false
      t.integer :limit_people
      t.datetime :limit_datetime
      t.string :canvas_gif

      t.timestamps
    end
  end
end
