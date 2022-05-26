import React, { memo } from "react";
import { Input, EInputType, TInputProps } from "./Input";

export type TRadioButtonProps = Pick<TInputProps, "name" | "value" | "id">;

export const RadioButton = memo(({ name, value, id }: TRadioButtonProps) => {
  return (
    <Input
      id={id}
      name={name}
      type={EInputType.RADIO}
      value={value}
      customClass="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
    />
  );
});
