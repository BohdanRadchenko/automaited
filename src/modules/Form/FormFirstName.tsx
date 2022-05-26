import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormFirstName = memo(() => {
  return (
    <>
      <Label id={"first-name"}>First name</Label>
      <div className="mt-1">
        <Input name={"first-name"} autoComplete={"given-name"} />
      </div>
    </>
  );
});
