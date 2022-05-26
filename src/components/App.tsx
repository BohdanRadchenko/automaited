import React, { memo } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
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

              {/*<fieldset className="mt-6">*/}
              {/*  <legend className="contents text-base font-medium text-gray-900">*/}
              {/*    Push Notifications*/}
              {/*  </legend>*/}
              {/*  <p className="text-sm text-gray-500">*/}
              {/*    These are delivered via SMS to your mobile phone.*/}
              {/*  </p>*/}
              {/*  <div className="mt-4 space-y-4">*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="push-everything"*/}
              {/*        name="push-notifications"*/}
              {/*        type="radio"*/}
              {/*        value="everything"*/}
              {/*        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="push-everything"*/}
              {/*        className="ml-3 block text-sm font-medium text-gray-700"*/}
              {/*      >*/}
              {/*        Everything*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="push-email"*/}
              {/*        name="push-notifications"*/}
              {/*        type="radio"*/}
              {/*        value="same-as-email"*/}
              {/*        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="push-email"*/}
              {/*        className="ml-3 block text-sm font-medium text-gray-700"*/}
              {/*      >*/}
              {/*        Same as email*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="push-nothing"*/}
              {/*        name="push-notifications"*/}
              {/*        type="radio"*/}
              {/*        value="no-push-notifications"*/}
              {/*        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="push-nothing"*/}
              {/*        className="ml-3 block text-sm font-medium text-gray-700"*/}
              {/*      >*/}
              {/*        No push notifications*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</fieldset>*/}

              {/*<fieldset className="mt-6">*/}
              {/*  <legend className="contents text-base font-medium text-gray-900">*/}
              {/*    Extra*/}
              {/*  </legend>*/}
              {/*  <div className="mt-4 space-y-4">*/}
              {/*    <p className="-mb-4 text-sm text-gray-500">Age</p>*/}
              {/*    <FormControl fullWidth>*/}
              {/*      /!* <InputLabel*/}
              {/*          className="-mt-2"*/}
              {/*          id="demo-simple-select-label"*/}
              {/*        >*/}
              {/*          Age*/}
              {/*        </InputLabel> *!/*/}
              {/*      <Select*/}
              {/*        name="age"*/}
              {/*        labelId="demo-simple-select-label"*/}
              {/*        id="demo-simple-select"*/}
              {/*        defaultValue={28}*/}
              {/*      >*/}
              {/*        <MenuItem value={28}>28</MenuItem>*/}
              {/*        <MenuItem value={37}>37 </MenuItem>*/}
              {/*        <MenuItem value={54}>54</MenuItem>*/}
              {/*      </Select>*/}
              {/*    </FormControl>*/}
              {/*  </div>*/}
              {/*</fieldset>*/}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(App);
