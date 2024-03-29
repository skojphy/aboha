import { database_dol } from '$data/database';

export const load = async function () {
	const data = await database_dol.find({}).toArray();
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData.reverse().slice(0, 6)
	};
};

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			name: getFormValues('name'),
			message: getFormValues('message'),
			timeStamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
		};

		await database_dol.insertOne(submitData);

		return { success: true };
	}
};
