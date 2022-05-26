import React, { memo, useCallback } from "react";
import { Label, Textarea, TTextareaChangeEvent } from "../../components";
import { TInputChangeParams } from "../../components/App";

type TFormUserAboutInputProps = {
  onChange?: (params: TInputChangeParams) => void;
  value?: string;
};

export const FormUserAboutInput = memo(
  ({ onChange, value }: TFormUserAboutInputProps) => {
    const handleChange = useCallback(
      (e: TTextareaChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );
    return (
      <>
        <Label id={"about"}>About</Label>
        <div className="mt-1">
          <Textarea name="about" value={value} onChange={handleChange} />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Write a few sentences about yourself.
        </p>
      </>
    );
  }
);
