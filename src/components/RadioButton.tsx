import React, { memo, useCallback } from "react";
import { Input, EInputType, TInputProps, TInputChangeEvent } from "./Input";

export type TRadioButtonProps = Pick<
  TInputProps,
  "name" | "value" | "id" | "checked" | "onChange"
>;

export const RadioButton = memo(
  ({ name, value, id, checked, onChange }: TRadioButtonProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        onChange && onChange(e);
      },
      [onChange]
    );
    return (
      <Input
        id={id}
        name={name}
        type={EInputType.RADIO}
        value={value}
        checked={checked}
        onChange={handleChange}
        customClass="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
    );
  }
);
