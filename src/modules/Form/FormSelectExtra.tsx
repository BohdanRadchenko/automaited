import React, { memo } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export const FormSelectExtra = memo(() => {
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
            defaultValue={28}
          >
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={37}>37 </MenuItem>
            <MenuItem value={54}>54</MenuItem>
          </Select>
        </FormControl>
      </div>
    </fieldset>
  );
});
