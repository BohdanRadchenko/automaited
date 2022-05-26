import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormStreetAddressProps = Pick<
  TFormUserNameInputProps,
  "onChange" | "value"
>;

export const FormStreetAddress = memo(
  ({ onChange, value }: TFormStreetAddressProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );

    return (
      <>
        <Label id={"street-address"}>Street address</Label>
        <div className="mt-1">
          <Input name="street-address" value={value} onChange={handleChange} />
        </div>
      </>
    );
  }
);
