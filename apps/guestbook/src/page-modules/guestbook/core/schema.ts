import * as yup from "yup";

// NOTE : 검색창 schema
export const guestbookSchema = yup.object().shape({
  guestbookInput: yup.string().min(2).required(),
});
