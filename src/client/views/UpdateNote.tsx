import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "../utils/use-form";
import noteService from "../services/notes";

interface UpdateNoteProps {}

const UpdateNote = (props: UpdateNoteProps) => {
	const { id } = useParams();
	const { state } = useLocation();
	const navigate = useNavigate();

	const { values, handleChanges, setValues } = useForm<{ body: string }>(
		(state && { body: state }) || { body: "" }
	);

	//Pulls the note body if there's not state that comes along with the link click
	useEffect(() => {
		if (!state) {
			noteService
				.getOneNote(id)
				.then((data) => setValues({ body: data.body }))
				.catch((e) => console.log(e));
		}
	}, [id]);

	const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		noteService
			.updateNote(id, values)
			.then(() => navigate(`/notes/${id}`))
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<h1>UpdateNote</h1>
			<div>
				<form>
					<textarea onChange={handleChanges} name="body" value={values.body} />
					<button onClick={handleUpdate}>Make it pretty~</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateNote;
