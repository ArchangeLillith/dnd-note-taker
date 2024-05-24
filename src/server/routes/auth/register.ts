import { Router } from "express";
import { createJWT } from "../../utils/tokens";
import { v4 as uuidv4 } from "uuid";
import db from "../../db";
import bcrypt from "bcrypt";

const router = Router();

//Passport is a route level middleware
router.post("/", async (req, res, next) => {
	try {
		const { email, password } = req.body;
		//Check if email is valid
		if (!email || !isValidEmail(email)) {
			const error = new Error("Invalid email");
			error["status"] = 400;
			throw error;
		}
		//Check if email is already registered
		const [emailFound] = await db.users.find("email", email);
		if (emailFound) {
			const error = new Error("Email already registered");
			error["status"] = 400;
			throw error;
		}

		//DTO means data transfer object
		//Generate a uuid
		const userDTO = {
			id: uuidv4(),
			...req.body,
		};

		//Salt and hash their pass
		const salt = await bcrypt.genSalt(12);
		const hash = await bcrypt.hash(password, salt);
		userDTO.password = hash;

		//Insert user into the DB
		const result = await db.users.insert(userDTO);
		delete userDTO.password;
		//Create token
    
		//Send token

		const token = createJWT(userDTO.id);
		res.json({ token });
	} catch (error) {
		next(error);
	}
});

function isValidEmail(email: string) {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
}

export default router;
