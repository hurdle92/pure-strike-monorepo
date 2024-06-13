import * as yup from "yup";

// NOTE : 검색창 schema
export const searchSchema = yup.object().shape({
  keyword: yup.string().min(2, "2글자 이상 입력해주세요.").required(),
});
