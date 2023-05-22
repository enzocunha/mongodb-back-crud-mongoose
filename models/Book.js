import { Schema, model, models } from "mongoose";

const bookSchema = new Schema({
	id: String,
	title: { type: String, required: true, unique: true },
	author: { type: String, required: true },
	description: { type: String },
});

const Book = models.Book || model("Book", bookSchema);

export default Book;
