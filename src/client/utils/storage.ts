const TOKEN_KEY = "token";

const getToken = () => {
	const token = localStorage.getItem(TOKEN_KEY);
	return token;
};

const setToken = (token: string) => {
	localStorage.setItem(TOKEN_KEY, token);
	return true;
};

const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY);
	console.log(`KEY?`, localStorage.key);
	return true;
};

export default {
	getToken,
	setToken,
	removeToken,
};
