import React, { memo, useCallback, useEffect, useState } from "react";
import { Label, RadioButton, TInputChangeEvent } from "../../components";
import { TFormUserNameInputProps } from "./FormUserNameInput";

const radioName = "push-notifications";

const radioButtons = [
  {
    id: "push-everything",
    name: radioName,
    value: "everything",
    label: "Everything",
    checked: false,
  },
  {
    id: "push-email",
    name: radioName,
    value: "same-as-email",
    label: "Same as email",
    checked: false,
  },
  {
    id: "push-nothing",
    name: radioName,
    value: "no-push-notifications",
    label: "No push notifications",
    checked: false,
  },
];

type TFormNotificationPushProps = Pick<
  TFormUserNameInputProps,
  "onChange" | "value"
>;

export const FormNotificationPush = memo(
  ({ onChange, value: currentValue }: TFormNotificationPushProps) => {
    const [radio, setRadio] = useState(radioButtons);

    const handleChange = useCallback(
      (e: TInputChangeEvent) => {
        const { name, value } = e.target;
        onChange && onChange({ name, value });
      },
      [onChange]
    );

    useEffect(() => {
      setRadio(
        radioButtons.map((r) => ({ ...r, checked: r.value === currentValue }))
      );
    }, [currentValue]);

    return (
      <fieldset className="mt-6">
        <legend className="contents text-base font-medium text-gray-900">
          Push Notifications
        </legend>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>

        <div className="mt-4 space-y-4">
          {radio.map(({ id, name, value, label, checked }) => (
            <div className="flex items-center" key={`radio-push-${value}`}>
              <RadioButton
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                checked={checked}
              />
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
  }
);
