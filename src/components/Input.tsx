import React, { memo, useCallback } from "react";

export enum EInputType {
  TEXT = "text",
  EMAIL = "email",
  CHECKBOX = "checkbox",
  RADIO = "radio",
}

export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type TInputProps = {
  name: string;
  id?: string;
  type?: string;
  autoComplete?: string;
  customClass?: string;
  value?: string;
  onChange?: (e: TInputChangeEvent) => void;
  checked?: boolean;
};

export const Input = memo(
  ({
    type = EInputType.TEXT,
    name,
    id = "",
    autoComplete = "",
    customClass = "",
    onChange,
    value,
    checked = false,
  }: TInputProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        onChange && onChange(e);
      },
      [onChange]
    );

    return (
      <input
        checked={checked}
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        id={id ?? name}
        autoComplete={autoComplete ?? name}
        className={
          customClass
            ? customClass
            : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        }
      />
    );
  }
);
