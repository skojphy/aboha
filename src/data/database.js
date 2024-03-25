import db from '$data/mongo';

export const database = db.collection('restaurant');
export const database_dol = db.collection('dol');
export const dol_attendance = db.collection('dol_attendance');
