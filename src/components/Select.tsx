import React, { memo, useCallback } from "react";

export type TSelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;

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
  selected?: TOption;
  onChange: (e: TSelectChangeEvent) => void;
};

export const Select = memo(
  ({
    id = "",
    name,
    autoComplete = "",
    options = [],
    selected,
    onChange,
  }: TSelectProps) => {
    const createOptionId = useCallback(
      (id: TOption["id"], value: TOption["value"]) => `option-${id}-${value}`,
      []
    );

    const handleChange = useCallback(
      (e: TSelectChangeEvent) => {
        onChange && onChange(e);
      },
      [onChange]
    );

    return (
      <select
        value={selected ? selected.value : options[0].value}
        onChange={handleChange}
        id={id ?? name}
        name={name}
        autoComplete={autoComplete ?? name}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      >
        {Boolean(options?.length) &&
          options.map(({ id, name, value }, i) => (
            <option key={createOptionId(id ?? i, value)} value={value}>
              {name}
            </option>
          ))}
      </select>
    );
  }
);
