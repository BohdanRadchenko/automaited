import React, { memo, useCallback } from "react";
import { Input, EInputType, TInputProps, TInputChangeEvent } from "./Input";

export type TCheckboxProps = Pick<TInputProps, "name" | "checked"> & {
  onChange?: (e: TInputChangeEvent) => void;
};

export const Checkbox = memo(({ name, checked, onChange }: TCheckboxProps) => {
  const handleChange = useCallback(
    (e: TInputChangeEvent) => {
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <Input
      onChange={handleChange}
      checked={checked}
      name={name}
      type={EInputType.CHECKBOX}
      customClass="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    />
  );
});
