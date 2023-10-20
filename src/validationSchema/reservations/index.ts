import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
