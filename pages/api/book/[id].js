import dbConnect from "@/lib/dbConnect";
import bookController from "@/controllers/BookController";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

    res.status(400).json({ success: false });
}