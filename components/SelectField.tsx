// SelectField.tsx
interface SelectFieldProps {
  id: string;
  options: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  options,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-3">
      <select
        required
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        className="w-full h-10 appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
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
