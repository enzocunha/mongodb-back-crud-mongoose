import dbConnect from "@/lib/dbConnect";
import bookController from "@/controllers/BookController";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const books = await bookController.getBooks();
				res.status(200).json({ success: true, data: books });
			} catch (error) {
				res.status(400).json({
					success: false,
					message: error.message,
				});
			}
			break;
		case "POST":
			try {
				const { title, description, cover, author_data } = req.body;

				if (!title || !description || !cover || !author_data) {
					res.status(400).json({
						success: false,
						message: "Missing fields",
					});
					return;
				}

				const book = await bookController.createBook({
					title: title,
					description: description,
					cover: cover,
					author_data: author_data,
				});

				res.status(201).json({ success: true, data: book });
			} catch (error) {
				res.status(400).json({
					success: false,
					message: error.message,
				});
			}
			break;
		default:
			res.status(400).json({ success: false, message: "Method not allowed." });
			break;
	}
}
