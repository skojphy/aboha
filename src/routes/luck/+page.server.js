import { fortuneData } from './data.json';

export const load = async function () {
	const data = await fortuneData;
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};
