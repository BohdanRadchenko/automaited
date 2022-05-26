import React, { FormEvent, memo, useCallback } from "react";

type TFormType = {
  children: React.ReactNode;
  onChange?: (t: HTMLInputElement) => void;
  onSubmit?: () => void;
  actions?: React.ReactNode[];
};

export const Form = memo(
  ({ children, onChange, onSubmit, actions = [] }: TFormType) => {
    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        onSubmit && onSubmit();
        e.preventDefault();
      },
      [onSubmit]
    );

    const handleChange = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        onChange && onChange(e.target as HTMLInputElement);
      },
      [onChange]
    );

    return (
      <form
        id="form"
        className="space-y-8 divide-y divide-gray-200 p-8"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">{children}</div>
        <div className="pt-5">
          <div className="flex justify-end">
            {Boolean(actions.length) ? (
              actions.map((action, i) => (
                <div key={`action-${i}`}>{action}</div>
              ))
            ) : (
              <>
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    );
  }
);
