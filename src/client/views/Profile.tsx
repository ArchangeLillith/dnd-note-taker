import React from "react";
import { useAuth } from "../utils/use-auth";

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
	const { logout } = useAuth();

	return (
		<div>
			<h1>This is the Profile page</h1>
			<div>
				<button
					onClick={() => {
						logout();
					}}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;
