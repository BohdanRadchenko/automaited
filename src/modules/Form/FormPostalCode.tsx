import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormPostalCode = memo(() => {
  return (
    <>
      <Label id={"postal-code"}>ZIP / Postal code</Label>
      <div className="mt-1">
        <Input name={"postal-code"} />
      </div>
    </>
  );
});
