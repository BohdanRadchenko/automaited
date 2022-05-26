import React, { memo } from "react";
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

const App = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-8">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <Form>
          <div>
            <div>
              <h3 className="text-3xl leading-6 font-medium text-gray-900 mb-16">
                Demo Form
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <FormUserNameInput />
              </div>
              <div className="sm:col-span-6">
                <FormUserAboutInput />
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
                <FormFirstName />
              </div>

              <div className="sm:col-span-3">
                <FormLastName />
              </div>

              <div className="sm:col-span-4">
                <FormEmail />
              </div>

              <div className="sm:col-span-3">
                <FormCountry />
              </div>

              <div className="sm:col-span-6">
                <FormStreetAddress />
              </div>

              <div className="sm:col-span-2">
                <FormCity />
              </div>

              <div className="sm:col-span-2">
                <FormRegion />
              </div>

              <div className="sm:col-span-2">
                <FormPostalCode />
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
              <FormNotificationEmail />

              <FormNotificationPush />

              <FormSelectExtra />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(App);
