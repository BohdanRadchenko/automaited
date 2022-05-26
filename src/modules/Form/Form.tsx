import React, { memo } from "react";

type TFormType = {
  children: React.ReactNode;
};

export const Form = memo(({ children }: TFormType) => {
  return (
    <form
      id="form"
      className="space-y-8 divide-y divide-gray-200 p-8"
      onSubmit={(e) => {
        const data = new FormData(e.currentTarget);

        console.log(JSON.stringify(Object.fromEntries(data), null, 4));

        e.preventDefault();
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200">{children}</div>
      <div className="pt-5">
        <div className="flex justify-end">
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
        </div>
      </div>
    </form>
  );
});
