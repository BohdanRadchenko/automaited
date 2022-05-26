import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormLastName = memo(() => {
  return (
    <>
      <Label id={"last-name"}>Last name</Label>
      <div className="mt-1">
        <Input name={"last-name"} autoComplete={"family-name"} />
      </div>
    </>
  );
});
