import { dol_attendance } from '$data/database';

export const load = async function () {
	const data = await dol_attendance.find({}).toArray();
	const loadData = JSON.parse(JSON.stringify(data));

	return {
		database: loadData
	};
};

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			nickname: getFormValues('nickname'),
			account: getFormValues('account'),
			bank: getFormValues('bank'),
			arrival: getFormValues('arrival'),
			leave: getFormValues('leave'),
			boardgame: getFormValues('boardgame'),
			timeStamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
		};

		await dol_attendance.insertOne(submitData);

		return { success: true };
	}
};
