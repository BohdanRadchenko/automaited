import React, { memo } from "react";
import { Input } from "../../components";

export const FormUserNameInput = memo(() => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700"
      >
        Username
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          automaited.com/
        </span>
        <Input name="username" />
      </div>
    </div>
  );
});
