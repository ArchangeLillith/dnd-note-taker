import storage from "../utils/storage";

const makeFetch = (url: string, info: any) => {
	return fetch(url, info);
};

//Method refers to PUT, POST, GET not a method function thing
const json = async (
	url: string,
	method: string,
	body: { [key: string]: string } = {}
) => {
	const TOKEN = storage.getToken();
	const headers = {
		"Content-Type": "application/json",
	};

	if (TOKEN) {
		headers["Authorization"] = `Bearer ${TOKEN}`;
	}

	const data = {
		method,
		headers,
		body: JSON.stringify(body),
	};

	if (method === "GET") {
		delete headers["Content-Type"];
		delete data.body;
	}

	try {
		const fetchResponse = await makeFetch(url, data);
		const response = await fetchResponse.json();
		if (fetchResponse.ok) {
			return response;
		} else {
			//This only works because json thrown from the backend, we're not sure if it'll be an error or message, and then we also add a third option just in case it's neither to not just hang
			//This isn't really used other than to show the front end that something went wrong and we can consume this and handle the different things in different ways
			throw new Error(
				response.error || response.message || "Something went wrong"
			);
		}
	} catch (error) {
		throw error;
	}
};

const get = (url: string) => {
	return json(url, "GET");
};
const post = (url: string, payload: { [key: string]: string }) => {
	return json(url, "POST", payload);
};
const put = (url: string, payload: { [key: string]: string }) => {
	console.log(url);
	return json(url, "PUT", payload);
};
const destroy = (url: string) => {
	return json(url, "DELETE");
};

export default {
	get,
	post,
	put,
	destroy,
};
