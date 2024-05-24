import { Router, query } from "express";
import { checkToken } from "../../middlewares/auth.mw";
import { v4 as uuidv4 } from "uuid";
import db from "../../db";

const router = Router();
//Run all these routes prepended with the method through this middle ware
router.route("*").post(checkToken).put(checkToken).delete(checkToken);

//GET api/notes/:id
router.get("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		//The one note comes back in an array and this destructures it to only the note
		const [result] = await db.notes.one(id);
		res.json(result);
	} catch (error) {
		//Goes to our global error handler
		next(error);
	}
});

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

router.get("/private", checkToken, async (req, res, next) => {
	try {
		res.json("Private endpoint");
	} catch (error) {
		next(error);
	}
});

//POST api/notes
router.post("/", async (req, res, next) => {
	try {
		const noteDTO = { id: uuidv4(), userid: req.payload.id, ...req.body };
		await db.notes.insert(noteDTO);
		//The return here helps front end to reroute to the new id or the message can be picked up by a toaster or modal
		res.json({ id: noteDTO.id, message: "New note created" });
	} catch (error) {
		next(error);
	}
});

//DELETE api/notes/:id
router.delete("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const userid = req.payload.id;
		const result = await db.notes.destroy(id, userid);

		if (!result.affectedRows) {
			throw new Error("Note does not exist");
		}

		res.json({ id, message: "Note deleted succesfully" });
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const userid = req.payload.id;
		const id = req.params.id;
		const noteDTO = {
			...req.body,
		};
		await db.notes.update(noteDTO, id, userid);
		res.json({ id, message: "Note updated~!" });
	} catch (error) {
		next(error);
	}
});

export default router;
