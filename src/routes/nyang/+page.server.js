import { boardGameData } from './data.json';

export const load = async function () {
	const data = await boardGameData;
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};
