import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  notes: yup.string(),
  performance: yup.string(),
  skills: yup.string(),
  growth: yup.string(),
  player_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
