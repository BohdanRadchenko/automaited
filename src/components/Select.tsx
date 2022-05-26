import React, { memo, useCallback } from "react";

export type TOption = {
  id?: string | number;
  name: string;
  value: string;
};

export type TSelectProps = {
  id?: string;
  name: string;
  autoComplete?: string;
  options?: TOption[];
};

export const Select = memo(
  ({ id = "", name, autoComplete = "", options = [] }: TSelectProps) => {
    const createOptionId = useCallback(
      (id: TOption["id"], value: TOption["value"]) => `option-${id}-${value}`,
      []
    );
    return (
      <select
        id={id ?? name}
        name={name}
        autoComplete={autoComplete ?? name}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      >
        {Boolean(options?.length) &&
          options.map(({ id, name, value }, i) => (
            <option key={createOptionId(id ?? i, value)}>{name}</option>
          ))}
      </select>
    );
  }
);
