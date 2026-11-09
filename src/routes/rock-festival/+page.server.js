import { database_dol } from '$data/database';

export const load = async function () {
	try {
		const data = await database_dol.find({}).toArray();
		return { database: JSON.parse(JSON.stringify(data)).reverse().slice(0, 6) };
	} catch {
		return { database: [] };
	}
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
