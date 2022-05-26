import React, { memo } from "react";
import { Input, EInputType, Label } from "../../components";

export const FormEmail = memo(() => {
  return (
    <>
      <Label id={"email"}>Email address</Label>
      <div className="mt-1">
        <Input name="email" type={EInputType.EMAIL} />
      </div>
    </>
  );
});
