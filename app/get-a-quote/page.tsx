import React from 'react';

interface InputFieldProps {
  id: string;
  placeholder: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, placeholder, name }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, id, options }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="mb-1 block text-base font-medium text-[#07074D]">
        {label}
      </label>
      <select
        id={id}
        className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface RadioButtonProps {
  id: string;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label }) => {
  return (
    <div className="flex items-center">
      <input type="radio" id={id} className="h-5 w-5" />
      <label htmlFor={id} className="pl-3 text-base font-medium text-[#07074D]">
        {label}
      </label>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl text-customeprimary">Get a Quote</h1>
      <p className="text-center text-xl text-customeprimary">Client Information</p>
      <div className="flex items-center justify-center p-6">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField  id="fName" placeholder="Full Name" name="fullName" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField  id="email" placeholder="Email" name="email" />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                 
                  id="phone"
                  placeholder="Your Phone Number"
                  name="phone"
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField id="company" placeholder="Company" name="company" />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                  label="Country"
                  id="country"
                  options={[
                    { value: 'usa', label: 'United States' },
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'canada', label: 'Canada' },
                  ]}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField id="date" placeholder="Date" name="date" />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField id="time" placeholder="Time" name="time" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-3">
                  <label className="mb-1 block text-base font-medium text-[#07074D]">
                    Are you coming to the event?
                  </label>
                  <div className="flex items-center space-x-6">
                    <RadioButton id="radioButton1" label="Yes" />
                    <RadioButton id="radioButton2" label="No" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
