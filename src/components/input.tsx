import React from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  label: string;
  name?: string;
  onAction?: (...args: any[]) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  name,
  label,
  onAction,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border border-black border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type={type}
        name={name}
        onChange={onAction}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
