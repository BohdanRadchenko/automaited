import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

type TFormRegionProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormRegion = memo(({ onChange, value }: TFormRegionProps) => {
  const handleChange = useCallback(
    (e: TInputChangeEvent) => {
      const { name, value } = e.target;
      onChange && onChange({ name, value });
    },
    [onChange]
  );
  return (
    <>
      <Label id={"region"}>State / Province</Label>
      <div className="mt-1">
        <Input
          name="region"
          autoComplete={"address-level1"}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
});
