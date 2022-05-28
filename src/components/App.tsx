import React, { memo, useCallback, useState } from "react";
import {
  Form,
  FormUserNameInput,
  FormUserAboutInput,
  FormFirstName,
  FormLastName,
  FormEmail,
  FormPostalCode,
  FormRegion,
  FormCity,
  FormStreetAddress,
  FormCountry,
  FormNotificationEmail,
} from "../modules/Form";
import { FormNotificationPush } from "../modules/Form/FormNotificationPush";
import { FormSelectExtra } from "../modules/Form/FormSelectExtra";
import { useDebounceLog, usePrevState } from "../hooks";

export type TInputChangeParams = {
  name: string;
  value: string | number | boolean;
  type?: string;
};

export type TForm = {
  username?: string;
  about?: string;
  "first-name"?: string;
  "last-name"?: string;
  email?: string;
  country?: string;
  "street-address"?: string;
  city?: string;
  region?: string;
  "postal-code"?: string;
  "push-notifications"?: string;
  comments?: boolean;
  candidates?: boolean;
  offers?: boolean;
  age?: number;
};

const defaultForm: TForm = {
  username: "",
  about: "",
  "first-name": "",
  "last-name": "",
  email: "",
  country: "",
  "street-address": "",
  city: "",
  region: "",
  "postal-code": "",
  "push-notifications": "",
  comments: false,
  candidates: false,
  offers: false,
  age: 28,
};

const mockForm: TForm = {
  "first-name": "James",
  "last-name": "Bond",
  country: "Great Britain",
  "push-notifications": "same-as-email",
  comments: true,
  offers: true,
  age: 37,
};

const typeExceptions = ["select", "radio", "checkbox"];

const App = () => {
  const [form, setForm] = useState<TForm>(defaultForm);
  const { prevState } = usePrevState<TForm>(form);

  const { debounced } = useDebounceLog<TForm>(form);

  const handleSubmit = useCallback(() => {
    console.log("form", form);
  }, [form]);

  // TODO: функция нужна для отслеживания изменений в стейте, вывода текущих изменений в массив, и перебором вызова дебоунса с логом
  // TODO: функция вызывается ТОЛЬКО если изменился стейт родительский без вызова changeEvent`а дочерних
  // TODO: НЕЛЬЗЯ вызывать ту же функцию, что и HTMLInput chanceEvent ибо ее нужно вызывать в useEffecte внутри компонета (допустим <FormUserNameInput/>), так изменение пропа внутри вызывает изменение стейта родительского компонента - рекурсия
  const getChangedState = useCallback(
    (prev: TForm, state: TForm) => {
      console.log("===========");
      const logArray = Object.entries(state).reduce(
        (acc, [name, value]) => {
          Object.keys(prev).forEach((k) => {
            if (
              { ...state }.hasOwnProperty(name) &&
              { ...prev }.hasOwnProperty(name)
            ) {
              if (k !== name) return;
              const key = k as keyof TForm;
              if (state[key] === prev[key]) return;
              acc = [...acc, { name, value }];
            }
          });
          return acc;
        },
        [] as Array<{
          name: string;
          value: [keyof TForm] | string | number | boolean;
        }>
      );

      logArray.forEach((el) => debounced(el.name as keyof TForm, 0));
    },
    [debounced]
  );

  const handleChange = useCallback(
    ({ name, value, type }: TInputChangeParams) => {
      setForm({ ...form, [name]: value });

      // TODO: установка дебонса ТОЛЬКО для инпута тайп текст
      const debounceTime = type && typeExceptions.includes(type) ? 0 : null;
      // TODO: функция дебоунс, которая вызывается каждый раз при вызовы ивент ченджа на импуте/радио/чекбоксе ...
      debounced(name as keyof TForm, debounceTime);
    },
    [form, debounced]
  );

  const handleAutomate = useCallback(() => {
    const newDate = { ...form, ...mockForm };
    setForm(newDate);
    getChangedState(prevState, newDate);
  }, [form, prevState, getChangedState]);

  const handleCancel = useCallback(() => {
    setForm(defaultForm);
    getChangedState(prevState, defaultForm);
  }, [prevState, getChangedState]);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-8">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <Form
          onSubmit={handleSubmit}
          actions={[
            <button
              onClick={handleAutomate}
              type="button"
              className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Automate!
            </button>,
            <button
              onClick={handleCancel}
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>,
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>,
          ]}
        >
          <div>
            <div>
              <h3 className="text-3xl leading-6 font-medium text-gray-900 mb-16">
                Demo Form
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <FormUserNameInput
                  onChange={handleChange}
                  value={form.username}
                />
              </div>
              <div className="sm:col-span-6">
                <FormUserAboutInput
                  onChange={handleChange}
                  value={form.about}
                />
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Personal Information
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <FormFirstName
                  onChange={handleChange}
                  value={form["first-name"]}
                />
              </div>

              <div className="sm:col-span-3">
                <FormLastName
                  onChange={handleChange}
                  value={form["last-name"]}
                />
              </div>

              <div className="sm:col-span-4">
                <FormEmail onChange={handleChange} value={form.email} />
              </div>

              <div className="sm:col-span-3">
                <FormCountry onChange={handleChange} value={form.country} />
              </div>

              <div className="sm:col-span-6">
                <FormStreetAddress
                  onChange={handleChange}
                  value={form["street-address"]}
                />
              </div>

              <div className="sm:col-span-2">
                <FormCity onChange={handleChange} value={form.city} />
              </div>

              <div className="sm:col-span-2">
                <FormRegion onChange={handleChange} value={form.region} />
              </div>

              <div className="sm:col-span-2">
                <FormPostalCode
                  onChange={handleChange}
                  value={form["postal-code"]}
                />
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>

            <div className="mt-6">
              <FormNotificationEmail form={form} onChange={handleChange} />

              <FormNotificationPush
                onChange={handleChange}
                value={form["push-notifications"]}
              />

              <FormSelectExtra onChange={handleChange} value={form.age} />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(App);
