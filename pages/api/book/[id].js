import dbConnect from "@/lib/dbConnect";
import bookController from "@/controllers/BookController";

export default async function handler(req, res) {
	const { query: { id }, method } = req;

	if (!id) {
		res.status(400).json({ success: false, message: "Missing book id" });
		return;
	}

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const book = await bookController.getBook(id);

				if (!book) {
					res.status(400).json({ success: false, message: "Book not found." });
					return;
				}

				res.status(200).json({ success: true, data: books });
			} catch (error) {
				res.status(400).json({ success: false, message: error.message });
			}
			break;

		case "PUT":
			try {
				const { title, description, author } = req.body;

				if (!title || !author) {
					res.status(400).json({ success: false, message: "Missing fields", });
					return;
				}

				const book = await bookController.updateBook(id, {
					title: title,
					description: description,
					author: author,
				});

				res.status(201).json({ success: true, data: book });
			} catch (error) {
				res.status(400).json({ success: false, message: error.message });
			}
			break;

		case "DELETE":
			try {
				const book = await bookController.deleteBook(id);

				if (!book) {
					res.status(400).json({ success: false, message: "Book not found." });
					return;
				}

				res.status(200).json({ success: true, data: book });
			} catch (error) {
				res.status(400).json({ success: false, message: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false, message: "Method not allowed." });
			break;
	}
}
