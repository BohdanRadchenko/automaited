import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormLastNameProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormLastName = memo(({ onChange, value }: TFormLastNameProps) => {
  const handleChange = useCallback(
    (e: TInputChangeEvent) => {
      const { name, value } = e.target;
      onChange && onChange({ name, value });
    },
    [onChange]
  );

  return (
    <>
      <Label id={"last-name"}>Last name</Label>
      <div className="mt-1">
        <Input
          name={"last-name"}
          autoComplete={"family-name"}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
});
