import React, { memo } from "react";
import { Label, RadioButton } from "../../components";

const radioName = "push-notifications";

const radioButtons = [
  {
    id: "push-everything",
    name: radioName,
    value: "everything",
    label: "Everything",
  },
  {
    id: "push-email",
    name: radioName,
    value: "same-as-email",
    label: "Same as email",
  },
  {
    id: "push-nothing",
    name: radioName,
    value: "no-push-notifications",
    label: "No push notifications",
  },
];

export const FormNotificationPush = memo(() => {
  return (
    <fieldset className="mt-6">
      <legend className="contents text-base font-medium text-gray-900">
        Push Notifications
      </legend>
      <p className="text-sm text-gray-500">
        These are delivered via SMS to your mobile phone.
      </p>

      <div className="mt-4 space-y-4">
        {radioButtons.map(({ id, name, value, label }) => (
          <div className="flex items-center">
            <RadioButton name={name} id={id} value={value} />
            <Label
              id={id}
              customClass="ml-3 block text-sm font-medium text-gray-700"
            >
              {label}
            </Label>
          </div>
        ))}
      </div>
    </fieldset>
  );
});
