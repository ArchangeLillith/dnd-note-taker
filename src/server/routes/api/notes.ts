import { Router, query } from "express";
import db from "../../db";

const router = Router();

//GET /api/notes
router.get("/", async (req, res, next) => {
	try {
		const result = await db.notes.all();
		res.json(result);
	} catch (error) {
		//Goes to our global error handler
		next(error);
	}
});

export default router;
