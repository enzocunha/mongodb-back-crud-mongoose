import dbConnect from "@/lib/dbConnect";
import bookController from "@/controllers/BookController";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	if (method === "GET") {
        try {
            const books = await bookController.getBooks();
            res.status(200).json({ success: true, data: books });
            return;
        } catch (error) {
            res.status(400).json({ success: false });
        }
	}

    res.status(400).json({ success: false });
}
