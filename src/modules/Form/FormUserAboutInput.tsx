import React, { memo } from "react";
import { Textarea } from "../../components";

export const FormUserAboutInput = memo(() => {
  return (
    <div className="sm:col-span-6">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-700"
      >
        About
      </label>
      <div className="mt-1">
        <Textarea name="about" />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Write a few sentences about yourself.
      </p>
    </div>
  );
});
