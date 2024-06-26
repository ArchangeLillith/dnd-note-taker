import dotenv from "dotenv";

//Looks for the .env at the root
dotenv.config();

export default {
	app: {
		port: process.env.PORT,
	},
	db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_SCHEMA,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
		expires: process.env.JWT_EXPIRES,
	},
};
