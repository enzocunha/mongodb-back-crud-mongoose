import Author from "@/models/Author";
import Book from "@/models/Book";

const bookController = {
  async getBooks() {
    const books = await Book.find().populate("author");
    return books;
  },

  async getBook(id) {
    const book = await Book.findById(id).populate("author");
    return book;
  },

  async createOrFindAuthor({ name, nationality }) {
    let author = await Author.findOne({ name: name });

    // If author exists, return author
    if (author) {
      return author;
    }

    // Create and return author
    author = new Author({ name: name, nationality: nationality });
    return author.save();
  },

  async createBook({ title, description, cover, author_data }) {
    const author = await this.createOrFindAuthor(author_data);

    const book = new Book({
      title: title,
      description: description,
      cover: cover,
      author: author._id,
    });

    return book.save();
  },
};

export default bookController;