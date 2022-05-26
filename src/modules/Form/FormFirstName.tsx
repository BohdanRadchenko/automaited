import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormFirstNameProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormFirstName = memo(
  ({ onChange, value }: TFormFirstNameProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );
    return (
      <>
        <Label id={"first-name"}>First name</Label>
        <div className="mt-1">
          <Input
            name={"first-name"}
            autoComplete={"given-name"}
            value={value}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
);
