import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormPostalCodeProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormPostalCode = memo(
  ({ onChange, value }: TFormPostalCodeProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );
    return (
      <>
        <Label id={"postal-code"}>ZIP / Postal code</Label>
        <div className="mt-1">
          <Input name={"postal-code"} value={value} onChange={handleChange} />
        </div>
      </>
    );
  }
);
