import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../utils/use-auth";
import { useForm } from "../utils/use-form";
import authService from "../services/auth";

interface LoginProps {}

const Login = (props: LoginProps) => {
	const location = useLocation();
	//This is IMPORTANT
	//This is how we communicate back up to the parent and set the 'global' state
	const { signin } = useAuth();
	const [error, setError] = useState<string>("");

	const { values, handleChanges } = useForm<{ [key: string]: string }>({
		email: "guest@test.com",
		password: "password123",
	});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		//Prevents the browser from refereshing
		e.preventDefault();
		//Calls to our util functions to attempt to log in the user
		authService
			.loginUser(values)
			.then(() => signin("/profile"))
			.catch((e) => setError(e.message));
	};

	return (
		<div>
			<h1>This is the Login page</h1>
			<div>
				<form>
					<input
						type="email"
						name="email"
						autoComplete="current-email"
						value={values.email || ""}
						onChange={handleChanges}
					/>
					<input
						type="password"
						name="password"
						autoComplete="current-password"
						value={values.password || ""}
						onChange={handleChanges}
					/>
					<button onClick={handleClick}>Login</button>
				</form>
				{location.state?.message && <div>{location.state?.message}</div>}
				{error && <div>{error}</div>}
			</div>
		</div>
	);
};
export default Login;
