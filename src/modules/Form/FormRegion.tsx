import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormRegion = memo(() => {
  return (
    <>
      <Label id={"region"}>State / Province</Label>
      <div className="mt-1">
        <Input name="region" autoComplete={"address-level1"} />
      </div>
    </>
  );
});
