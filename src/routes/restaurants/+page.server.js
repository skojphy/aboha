import { database } from '$data/database';

export const load = async function () {
	const data = await database.find({}).toArray();
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};
