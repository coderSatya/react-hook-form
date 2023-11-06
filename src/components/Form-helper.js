import * as yup from "yup";

export const Schema = yup.object().shape({
  username: yup.string().required(),
});
