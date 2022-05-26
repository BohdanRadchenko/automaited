import React, { memo } from "react";
import { Checkbox, Label } from "../../components";

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

export const FormNotificationEmail = memo(() => {
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
              <Checkbox name={name} />
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
});
