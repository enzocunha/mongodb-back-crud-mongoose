import dbConnect from "@/lib/dbConnect";
import authorController from "@/controllers/AuthorController";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	res.status(400).json({ success: false });
}
