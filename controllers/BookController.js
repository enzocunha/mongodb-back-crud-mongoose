import Book from "@/models/Book";

const bookController = {
	async getBooks() {
		const books = await Book.find();
		return books;
	},

	async getBook(id) {
		const book = await Book.findById(id);
		return book;
	},

	async createBook({ title, description, author }) {
		const book = new Book({
			title: title,
			description: description,
			author: author,
		});

		return book.save();
	},

	async updateBook(id, data) {
		const book = Book.findByIdAndUpdate(id, data, { new: true });

		if (!book) {
			throw new Error("Book not found.");
		}

		return book;
	},

	async deleteBook(id) {
		const book = Book.findByIdAndDelete(id);

		if (!book) {
			throw new Error("Book not found.");
		}

		return book;
	},
};

export default bookController;
