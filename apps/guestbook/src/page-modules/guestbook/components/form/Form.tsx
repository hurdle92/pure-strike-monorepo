import { Button, Flex, Spacer, Stack, TextField } from "pure-strike-ui";
import { useForm } from "react-hook-form";
import { guestbookInputDefaultValue } from "../../core/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { guestbookSchema } from "../../core/schema";
import { usePostGuestbook } from "src/apis/guestbook/queries";
import React from "react";

export const Form = () => {
  const {
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: "all",
    defaultValues: guestbookInputDefaultValue,
    resolver: yupResolver(guestbookSchema),
  });

  const { mutate, isPending } = usePostGuestbook();

  const onClickSubmit = React.useCallback(() => {
    const inputValue = watch("guestbookInput");
    mutate({ content: inputValue });
    setValue("guestbookInput", "");
  }, [watch("guestbookInput")]);

  return (
    <Stack position={"fixed"} bottom={"20px"} width={"760px"}>
      <Flex>
        <Stack width={"100%"}>
          <TextField
            control={control}
            value={watch("guestbookInput")}
            controlKey={"guestbookInput"}
            placeholder={"방명록을 입력해주세요."}
          />
        </Stack>
        <Spacer width={"20px"} />
        <Stack width={"100px"}>
          <Button
            text={"제출"}
            disabled={!isValid || isPending}
            onClick={onClickSubmit}
          />
        </Stack>
      </Flex>
    </Stack>
  );
};
