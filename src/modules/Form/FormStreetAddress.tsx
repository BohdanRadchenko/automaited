import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormStreetAddress = memo(() => {
  return (
    <>
      <Label id={"street-address"}>Street address</Label>
      <div className="mt-1">
        <Input name="street-address" />
      </div>
    </>
  );
});
