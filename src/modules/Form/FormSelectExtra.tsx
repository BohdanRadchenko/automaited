import React, { memo, useCallback, useMemo } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { TFormUserNameInputProps } from "./FormUserNameInput";

const options = [
  { name: "Age-28", value: 28 },
  { name: "Age-37", value: 37 },
  { name: "Age-54", value: 54 },
];

type TFormSelectExtraProps = Pick<TFormUserNameInputProps, "onChange"> & {
  value?: number;
};

export const FormSelectExtra = memo(
  ({ onChange, value }: TFormSelectExtraProps) => {
    const currentValue = useMemo(() => {
      if (value) return value.toString();
      return options[0].value.toString();
    }, [value]);

    const handleChange = useCallback(
      ({ target }: SelectChangeEvent) => {
        const { name, value } = target;
        onChange && onChange({ name, value: value });
      },
      [onChange]
    );

    return (
      <fieldset className="mt-6">
        <legend className="contents text-base font-medium text-gray-900">
          Extra
        </legend>
        <div className="mt-4 space-y-4">
          <p className="-mb-4 text-sm text-gray-500">Age</p>
          <FormControl fullWidth>
            <Select
              name="age"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentValue}
              onChange={handleChange}
            >
              {options.map(({ name, value }) => (
                <MenuItem value={value} key={`age-${value}`}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </fieldset>
    );
  }
);
