import { database_dol } from '$data/database';

export const load = async function () {
	const data = await database_dol.find({}).toArray();
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};
