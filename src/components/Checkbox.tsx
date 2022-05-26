import React, { memo } from "react";
import { Input, EInputType, TInputProps } from "./Input";

export type TCheckboxProps = Pick<TInputProps, "name">;

export const Checkbox = memo(({ name }: TCheckboxProps) => {
  return (
    <Input
      name={name}
      type={EInputType.CHECKBOX}
      customClass="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    />
  );
});
