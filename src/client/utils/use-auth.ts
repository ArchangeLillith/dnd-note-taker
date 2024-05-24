import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import storage from "../utils/storage";

export const useAuth = () => {
	const navigate = useNavigate();
	const [authState, setAuthState] = useContext(AuthContext);

	const signin = (path: string) => {
		setAuthState((prev) => ({ ...prev, authenticated: true }));
		navigate(path);
	};
	const logout = () => {
		setAuthState((prev) => ({ ...prev, authenticated: false }));
		storage.removeToken();
		navigate("/login");
	};
	return {
		authenticated: authState.authenticated,
		signin,
		logout,
	};
};
