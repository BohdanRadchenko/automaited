import React, { memo, ReactNode } from "react";

export type TLabelProps = {
  children: ReactNode;
  id: string;
  customClass?: string;
};

export const Label = memo(({ children, id, customClass = "" }: TLabelProps) => {
  return (
    <label
      htmlFor={id}
      className={
        customClass ? customClass : "block text-sm font-medium text-gray-700"
      }
    >
      {children}
    </label>
  );
});
