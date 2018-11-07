import axios from 'axios';
const baseUrl = 'https://data.police.uk/api/stops-force?force=';

export const fetchSearches = (force) => {
	return axios.get(`${baseUrl}${force}&date=2017-08`).then(({ data }) => {
		return data;
	});
};

export const fetchForces = () => {
	return axios.get('https://data.police.uk/api/forces').then((forces) => {
		return forces;
	});
};
