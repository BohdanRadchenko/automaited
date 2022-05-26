import React, { memo } from "react";

export type TTextareaProps = {
  id?: string;
  name: string;
  rows?: number;
  defaultValue?: string;
};

export const Textarea = memo(
  ({ id = "", name, rows = 3, defaultValue = "" }: TTextareaProps) => {
    return (
      <textarea
        id={id ?? name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
      />
    );
  }
);
