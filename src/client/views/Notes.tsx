import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notesService from "../services/notes";
interface NotesProps {}

const Notes = (props: NotesProps) => {
	const [notes, setNotes] = useState<{ [key: string]: any }[]>([]);

	useEffect(() => {
		notesService
			.getAllNotes()
			.then((data) => setNotes(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div>
			<h1>Notes Component</h1>
			<div>
				{notes.map((note) => (
					<div key={note.id}>
						<h3>{note.first_name}</h3>
						<p>{note.body.slice(0, 55)}...</p>
						<Link to={`/notes/${note.id}`}>
							<button>View Full Note</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
