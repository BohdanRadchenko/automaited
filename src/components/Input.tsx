import React, { memo } from "react";

export enum EInputType {
  TEXT = "text",
  EMAIL = "email",
  CHECKBOX = "checkbox",
}

export type TInputProps = {
  name: string;
  id?: string;
  type?: string;
  autoComplete?: string;
  customClass?: string;
};

export const Input = memo(
  ({
    type = EInputType.TEXT,
    name,
    id = "",
    autoComplete = "",
    customClass = "",
  }: TInputProps) => {
    return (
      <input
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
