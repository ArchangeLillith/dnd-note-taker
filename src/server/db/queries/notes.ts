import { Query } from "../pool";

export interface NotesTable {
	id?: string;
	created_at?: string;
	userid?: string;
	body?: string;
}
export interface UsersTable {
	id?: string;
	email?: string;
	password?: string;
	created_at?: string;
	first_name?: string;
	last_name?: string;
}

const all = () =>
	Query<(NotesTable & UsersTable)[]>(`
SELECT 
  notes.*,
  users.first_name 
FROM 
  notes 
      JOIN 
  users ON users.id = notes.userid;`);

const one = (id: string) =>
	Query<(NotesTable & UsersTable)[]>(
		`
SELECT 
  notes.*,
  users.first_name 
FROM 
  notes 
      JOIN 
  users ON users.id = notes.userid
  WHERE notes.id = ?;`,
		[id]
	);

const insert = (values: NotesTable) =>
	Query("INSERT INTO notes SET ?", [values]);

const destroy = (id: string, userid: string) =>
	Query("DELETE FROM notes WHERE id = ? AND userid = ?", [id, userid]);

const update = (editedNote: NotesTable, id: string, userid: string) =>
	Query("UPDATE notes SET ? WHERE id = ? AND userid = ?", [
		editedNote,
		id,
		userid,
	]);

export default { all, one, insert, destroy, update };
