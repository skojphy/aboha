import { database } from '$data/database';

export const actions = {
	submitForm: async ({ request }) => {
		const values = await request.formData();

		const getFormValues = (key) => values.get(key);

		const submitData = {
			name: getFormValues('name'),
			phone: getFormValues('phone'),
			account: getFormValues('account'),
			arrival: getFormValues('arrival'),
			message: getFormValues('message'),
			timeStamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
		};

		await database.insertOne(submitData);

		return { success: true };
	}
};
