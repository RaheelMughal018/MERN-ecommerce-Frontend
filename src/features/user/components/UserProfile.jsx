import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUserInfo } from "../userSlice";
import { selectLoggedInUser } from "../../auth/AuthSlice";

export default function UserProfile() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  const handleEdit=()=>{

  }
  const handleRemove=()=>{

  }

  return (
    <>
      <div>
        <div>
          <div className="mx-auto mt-12 bg-white max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                Name: {user.name ? user.name : "New User"}
              </h1>
              <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                Email Address: {user.email}
              </h3>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="mt-0.5 text-sm  text-gray-500">Your Address:</p>
              {user.addresses.map((address,i) => (
                <div key={i} className="flex justify-between gap-x-6 px-5 py-5 ">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {address.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {address.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {address.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {address.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {address.city}
                    </p>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <button
                          onClick={e=>handleEdit(e,address.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                    <button
                          onClick={e=>handleRemove(e,address.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
