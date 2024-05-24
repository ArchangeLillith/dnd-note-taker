import React from "react";
import { useAuth } from "../utils/use-auth";

interface HomeProps {}

const Home = (props: HomeProps) => {
	//Uses our custom hook to gather the state from the parent and consume it here
	const { authenticated } = useAuth();
	return (
		<div>
			<h1>
				Home.
				<br /> You are {authenticated ? "logged in" : "logged out"}
				<br />
				{authenticated.valueOf()}
			</h1>
		</div>
	);
};

export default Home;
