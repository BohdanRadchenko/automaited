import React, { memo } from "react";
import { Label, Textarea } from "../../components";

export const FormUserAboutInput = memo(() => {
  return (
    <>
      <Label id={"about"}>About</Label>
      <div className="mt-1">
        <Textarea name="about" />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Write a few sentences about yourself.
      </p>
    </>
  );
});
