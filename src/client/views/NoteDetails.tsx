import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import noteService from "../services/notes";

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
	//Pulls the id from the url and gives it to us in string format
	const { id } = useParams();
	const navigate = useNavigate();
	const [details, setDetails] = useState<{ [key: string]: string }>(null);

	useEffect(() => {
		noteService
			.getOneNote(id)
			.then((data) => setDetails(data))
			.catch((e) => console.log(e));
	}, [id]);

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		noteService
			.destroyNote(id)
			.then(() => navigate("/notes"))
			.catch((e) => console.log(e));
	};

	console.log(id);

	return (
		<div>
			<h1>NoteDetails</h1>
			<button onClick={handleDelete}>Delete this note</button>
			{details && (
				<div>
					<h2>{details.first_name}</h2>
					<div>
						{details.body.split("\n").map((para, index) => (
							<p key={`para-index-${index}`}>
								{para}
								<br />
							</p>
						))}
					</div>
					<small>{details.created_at}</small>
				</div>
			)}
			<div>
				<Link to="/notes">Go Back</Link>
				<Link to={`/notes/${id}/update`} state={details?.body}>
					Edit Note
				</Link>
			</div>
		</div>
	);
};

export default NoteDetails;
