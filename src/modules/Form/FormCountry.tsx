import React, { memo } from "react";
import { Label, Select } from "../../components";

const countries = [
  { id: 0, name: "Canada", value: "canada" },
  { id: 1, name: "Great Britain", value: "great_britain" },
  { id: 2, name: "Mexico", value: "mexico" },
  { id: 3, name: "United States", value: "united_states" },
];

export const FormCountry = memo(() => {
  return (
    <>
      <Label id={"country"}>Country</Label>
      <div className="mt-1">
        <Select
          name={"country"}
          autoComplete="country-name"
          options={countries}
        />
      </div>
    </>
  );
});
