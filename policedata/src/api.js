import axios from 'axios';
const baseUrl = 'https://data.police.uk/api/stops-force?force=greater-manchester&date=2018-08';
export const fetchSearches = () => {
	return axios.get(`${baseUrl}`).then(({ data }) => {
		return data;
	});
};
