import React, { memo, useCallback } from "react";
import { Input, EInputType, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormEmailProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormEmail = memo(({ onChange, value }: TFormEmailProps) => {
  const handleChange = useCallback(
    (e: TInputChangeEvent) => {
      const { name, value } = e.target;
      onChange && onChange({ name, value });
    },
    [onChange]
  );

  return (
    <>
      <Label id={"email"}>Email address</Label>
      <div className="mt-1">
        <Input
          name="email"
          type={EInputType.EMAIL}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
});
