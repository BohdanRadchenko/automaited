import React, { memo, useCallback } from "react";
import { Input, Label, TInputChangeEvent } from "../../components";
import { TInputChangeParams } from "../../components/App";

export type TFormUserNameInputProps = {
  onChange?: (params: TInputChangeParams) => void;
  value?: string;
};

export const FormUserNameInput = memo(
  ({ onChange, value }: TFormUserNameInputProps) => {
    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );

    return (
      <>
        <Label id={"username"}>Username</Label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            automaited.com/
          </span>
          <Input
            value={value}
            onChange={handleChange}
            name="username"
            customClass={
              "flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
            }
          />
        </div>
      </>
    );
  }
);
