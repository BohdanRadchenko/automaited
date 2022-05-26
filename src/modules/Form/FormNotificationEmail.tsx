import React, { memo, useCallback } from "react";
import { Checkbox, Label, TInputChangeEvent } from "../../components";
import { TForm, TInputChangeParams } from "../../components/App";

const notificationByEmail = [
  {
    name: "comments",
    label: "Comments",
    text: "Get notified when someones posts a comment on a posting.",
  },
  {
    name: "candidates",
    label: "Candidates",
    text: "Get notified when a candidate applies for a job.",
  },
  {
    name: "offers",
    label: "Offers",
    text: "Get notified when a candidate accepts or rejects an offer.",
  },
];

type TFormNotificationEmailProps = {
  form: TForm;
  onChange?: (params: TInputChangeParams) => void;
};

export const FormNotificationEmail = memo(
  ({ form, onChange }: TFormNotificationEmailProps) => {
    const isChecked = useCallback(
      (name: string) => {
        return Boolean(form[name as keyof typeof form]);
      },
      [form]
    );

    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, checked } = e.target;
        onChange && onChange({ name, value: checked });
      },
      [onChange]
    );

    return (
      <fieldset>
        <legend className="sr-only">By Email</legend>
        <div className="text-base font-medium text-gray-900" aria-hidden="true">
          By Email
        </div>
        <div className="mt-4 space-y-4">
          {notificationByEmail.map(({ name, label, text }) => (
            <div className="relative flex items-start" key={name}>
              <div className="flex items-center h-5">
                <Checkbox
                  name={name}
                  checked={isChecked(name)}
                  onChange={handleChange}
                />
              </div>
              <div className="ml-3 text-sm">
                <Label id={name} customClass={"font-medium text-gray-700"}>
                  {label}
                </Label>
                <p className="text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
);
