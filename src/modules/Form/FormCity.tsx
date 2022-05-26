import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormCity = memo(() => {
  return (
    <>
      <Label id={"city"}>City</Label>
      <div className="mt-1">
        <Input name={"city"} autoComplete="address-level2" />
      </div>
    </>
  );
});
