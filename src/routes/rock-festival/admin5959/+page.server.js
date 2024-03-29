import { dol_attendance } from '$data/database';

export const load = async function () {
	const data = await dol_attendance.find({}).toArray();
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};