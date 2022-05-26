import React, { memo, useCallback } from "react";

export type TTextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type TTextareaProps = {
  id?: string;
  name: string;
  rows?: number;
  value?: string;
  onChange?: (e: TTextareaChangeEvent) => void;
};

export const Textarea = memo(
  ({ id = "", name, rows = 3, value, onChange }: TTextareaProps) => {
    const handleChange = useCallback(
      (e: TTextareaChangeEvent) => {
        onChange && onChange(e);
      },
      [onChange]
    );

    return (
      <textarea
        onChange={handleChange}
        value={value}
        id={id ?? name}
        name={name}
        rows={rows}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
      />
    );
  }
);
