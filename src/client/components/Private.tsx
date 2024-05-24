import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/use-auth";

interface PrivateProps {
	children: React.ReactNode;
}

const Private = (props: PrivateProps) => {
	const location = useLocation();
	const { authenticated } = useAuth();

	if (!authenticated) {
		return (
			<Navigate
				to="/login"
				state={{ message: "You gotta be logged in", from: location }}
				replace={true}
			/>
		);
	}

	return <>{props.children}</>;
};
export default Private;
