'use client'

import React from 'react';

interface InputFieldProps {
  id: string;
  placeholder: string;
  name: string;
  value: string;
  type?:'text'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 }

export const InputField: React.FC<InputFieldProps> = ({ id, placeholder, name,value,onChange,type }) => {
  return (
    <div className="mb-3 relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block px-2.5 pb-2 border pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-customeprimary focus:outline-none focus:ring-0 focus:border-customeprimary peer"
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cusborder-customeprimary peer-focus:dark:text-customeprimary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {placeholder}
      </label>
    </div>
  );
};
