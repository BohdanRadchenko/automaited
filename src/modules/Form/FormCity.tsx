import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormCityProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormCity = memo(({ onChange, value }: TFormCityProps) => {
  const handleChange = useCallback(
    (e: TInputChangeEvent) => {
      const { name, value } = e.target;
      onChange && onChange({ name, value });
    },
    [onChange]
  );
  return (
    <>
      <Label id={"city"}>City</Label>
      <div className="mt-1">
        <Input
          name={"city"}
          autoComplete="address-level2"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
});
