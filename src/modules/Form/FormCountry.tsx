import React, { memo, useCallback, useEffect, useState } from "react";
import { Label, Select, TSelectChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

const countries = [
  { id: 0, name: "Canada", value: "canada" },
  { id: 1, name: "Great Britain", value: "great_britain" },
  { id: 2, name: "Mexico", value: "mexico" },
  { id: 3, name: "United States", value: "united_states" },
];

type TFormCountryProps = Pick<TFormUserNameInputProps, "onChange" | "value">;

export const FormCountry = memo(({ onChange, value }: TFormCountryProps) => {
  const [selected, setSelected] = useState(countries[0]);

  const handleChange = useCallback(
    (e: TSelectChangeEvent) => {
      const { value, name } = e.target;
      const opt = countries.find((el) => el.value === value);
      onChange && onChange({ value: opt?.name || "", name });
    },
    [onChange]
  );

  useEffect(() => {
    if (value) {
      const opt = countries.find((c) => c.name === value);
      if (opt) {
        setSelected(opt);
      }
    }
  }, [value]);

  return (
    <>
      <Label id={"country"}>Country</Label>
      <div className="mt-1">
        <Select
          name={"country"}
          autoComplete="country-name"
          options={countries}
          selected={selected}
          onChange={handleChange}
        />
      </div>
    </>
  );
});
