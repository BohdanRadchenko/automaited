import React, { memo } from "react";
import { Input, Label } from "../../components";

export const FormUserNameInput = memo(() => {
  return (
    <>
      <Label id={"username"}>Username</Label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          automaited.com/
        </span>
        <Input
          name="username"
          customClass={
            "flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
          }
        />
      </div>
    </>
  );
});
