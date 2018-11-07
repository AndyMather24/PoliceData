import axios from 'axios';
const baseUrl = 'https://data.police.uk/api/stops-force?force=';
export const fetchSearches = (force) => {
	return axios.get(`${baseUrl}${force}&date=2018-08`).then(({ data }) => {
		return data;
	});
};
