import React, { memo } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Form, FormUserNameInput, FormUserAboutInput } from "../modules/Form";

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
              <FormUserNameInput />
              <FormUserAboutInput />
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
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Canada</option>
                    <option>Great Britain</option>
                    <option>Mexico</option>
                    <option>United States</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*<div className="pt-8">*/}
          {/*  <div>*/}
          {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
          {/*      Notifications*/}
          {/*    </h3>*/}
          {/*    <p className="mt-1 text-sm text-gray-500">*/}
          {/*      We'll always let you know about important changes, but you pick*/}
          {/*      what else you want to hear about.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="mt-6">*/}
          {/*    <fieldset>*/}
          {/*      <legend className="sr-only">By Email</legend>*/}
          {/*      <div*/}
          {/*        className="text-base font-medium text-gray-900"*/}
          {/*        aria-hidden="true"*/}
          {/*      >*/}
          {/*        By Email*/}
          {/*      </div>*/}
          {/*      <div className="mt-4 space-y-4">*/}
          {/*        <div className="relative flex items-start">*/}
          {/*          <div className="flex items-center h-5">*/}
          {/*            <input*/}
          {/*              id="comments"*/}
          {/*              name="comments"*/}
          {/*              type="checkbox"*/}
          {/*              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <div className="ml-3 text-sm">*/}
          {/*            <label*/}
          {/*              htmlFor="comments"*/}
          {/*              className="font-medium text-gray-700"*/}
          {/*            >*/}
          {/*              Comments*/}
          {/*            </label>*/}
          {/*            <p className="text-gray-500">*/}
          {/*              Get notified when someones posts a comment on a posting.*/}
          {/*            </p>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="relative flex items-start">*/}
          {/*          <div className="flex items-center h-5">*/}
          {/*            <input*/}
          {/*              id="candidates"*/}
          {/*              name="candidates"*/}
          {/*              type="checkbox"*/}
          {/*              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <div className="ml-3 text-sm">*/}
          {/*            <label*/}
          {/*              htmlFor="candidates"*/}
          {/*              className="font-medium text-gray-700"*/}
          {/*            >*/}
          {/*              Candidates*/}
          {/*            </label>*/}
          {/*            <p className="text-gray-500">*/}
          {/*              Get notified when a candidate applies for a job.*/}
          {/*            </p>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="relative flex items-start">*/}
          {/*          <div className="flex items-center h-5">*/}
          {/*            <input*/}
          {/*              id="offers"*/}
          {/*              name="offers"*/}
          {/*              type="checkbox"*/}
          {/*              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <div className="ml-3 text-sm">*/}
          {/*            <label*/}
          {/*              htmlFor="offers"*/}
          {/*              className="font-medium text-gray-700"*/}
          {/*            >*/}
          {/*              Offers*/}
          {/*            </label>*/}
          {/*            <p className="text-gray-500">*/}
          {/*              Get notified when a candidate accepts or rejects an*/}
          {/*              offer.*/}
          {/*            </p>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </fieldset>*/}
          {/*    <fieldset className="mt-6">*/}
          {/*      <legend className="contents text-base font-medium text-gray-900">*/}
          {/*        Push Notifications*/}
          {/*      </legend>*/}
          {/*      <p className="text-sm text-gray-500">*/}
          {/*        These are delivered via SMS to your mobile phone.*/}
          {/*      </p>*/}
          {/*      <div className="mt-4 space-y-4">*/}
          {/*        <div className="flex items-center">*/}
          {/*          <input*/}
          {/*            id="push-everything"*/}
          {/*            name="push-notifications"*/}
          {/*            type="radio"*/}
          {/*            value="everything"*/}
          {/*            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
          {/*          />*/}
          {/*          <label*/}
          {/*            htmlFor="push-everything"*/}
          {/*            className="ml-3 block text-sm font-medium text-gray-700"*/}
          {/*          >*/}
          {/*            Everything*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*        <div className="flex items-center">*/}
          {/*          <input*/}
          {/*            id="push-email"*/}
          {/*            name="push-notifications"*/}
          {/*            type="radio"*/}
          {/*            value="same-as-email"*/}
          {/*            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
          {/*          />*/}
          {/*          <label*/}
          {/*            htmlFor="push-email"*/}
          {/*            className="ml-3 block text-sm font-medium text-gray-700"*/}
          {/*          >*/}
          {/*            Same as email*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*        <div className="flex items-center">*/}
          {/*          <input*/}
          {/*            id="push-nothing"*/}
          {/*            name="push-notifications"*/}
          {/*            type="radio"*/}
          {/*            value="no-push-notifications"*/}
          {/*            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"*/}
          {/*          />*/}
          {/*          <label*/}
          {/*            htmlFor="push-nothing"*/}
          {/*            className="ml-3 block text-sm font-medium text-gray-700"*/}
          {/*          >*/}
          {/*            No push notifications*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </fieldset>*/}
          {/*    <fieldset className="mt-6">*/}
          {/*      <legend className="contents text-base font-medium text-gray-900">*/}
          {/*        Extra*/}
          {/*      </legend>*/}
          {/*      <div className="mt-4 space-y-4">*/}
          {/*        <p className="-mb-4 text-sm text-gray-500">Age</p>*/}
          {/*        <FormControl fullWidth>*/}
          {/*          /!* <InputLabel*/}
          {/*              className="-mt-2"*/}
          {/*              id="demo-simple-select-label"*/}
          {/*            >*/}
          {/*              Age*/}
          {/*            </InputLabel> *!/*/}
          {/*          <Select*/}
          {/*            name="age"*/}
          {/*            labelId="demo-simple-select-label"*/}
          {/*            id="demo-simple-select"*/}
          {/*            defaultValue={28}*/}
          {/*          >*/}
          {/*            <MenuItem value={28}>28</MenuItem>*/}
          {/*            <MenuItem value={37}>37 </MenuItem>*/}
          {/*            <MenuItem value={54}>54</MenuItem>*/}
          {/*          </Select>*/}
          {/*        </FormControl>*/}
          {/*      </div>*/}
          {/*    </fieldset>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Form>
      </div>
    </div>
  );
};

export default memo(App);
