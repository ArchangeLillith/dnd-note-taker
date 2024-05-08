import mysql from "mysql";
import config from "../config";
const pool = mysql.createPool(config.db);

export const Query = (sql: string, values?: any) => {
	return new Promise((res, rej) => {
		const formatted = mysql.format(sql, values);

		pool.query(formatted, (err, result) => {
			if (err) {
				return rej(err);
			}
			return res(result);
		});
	});
};

Query("SELECT 1+2 AS sum;")
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
