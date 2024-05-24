import React, { useState } from "react";
import { useAuth } from "../utils/use-auth";
import { useForm } from "../utils/use-form";
import authService from "../services/auth";

interface RegisterProps {}

const Register = (props: RegisterProps) => {
	const { signin } = useAuth();
	const { values, handleChanges } = useForm<{ [key: string]: string }>({});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		//Prevents the browser from refereshing
		e.preventDefault();
		authService
			.registerUser(values)
			.then(() => signin("/profile"))
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<h1>Register new</h1>
			<form>
				<input
					type="text"
					name="first_name"
					value={values.first_name || ""}
					onChange={handleChanges}
				/>
				<input
					type="text"
					name="last_name"
					value={values.last_name || ""}
					onChange={handleChanges}
				/>
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
				<button onClick={handleClick}>Register</button>
			</form>
		</div>
	);
};

export default Register;
