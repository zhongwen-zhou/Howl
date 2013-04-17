class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :activity
      t.string :group
      t.string :imageable_type
      t.integer :imageable_id
      t.integer :user_id
      t.integer :status
      t.text :description
      t.integer :visable_status

      t.timestamps
    end
  end
end
