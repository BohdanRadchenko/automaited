import React, { memo } from "react";

export enum InputType {
  TEXT = "text",
}

export type TInputType = {
  name: string;
  id?: string;
  type?: string;
};

export const Input = memo(
  ({ type = InputType.TEXT, name, id = "" }: TInputType) => {
    return (
      <input
        type={type}
        name={name}
        id={id ?? name}
        autoComplete={name}
        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
      />
    );
  }
);
