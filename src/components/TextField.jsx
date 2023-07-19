import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Update to take a label but a prop to show/hide label.
 * Also should name be just label
 * Should label be required?
 */
const TextField = ({
  label,
  placeholder = '',
  name = '',
  value = '',
  defaultValue = '',
  onChange = () => {},
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? '');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col flex-grow mb-4">
      <label className="font-semibold">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputValue}
        className={`border border-gray-200 rounded px-2 py-1 w-full ${
          disabled ? 'bg-gray-200 cursor-not-allowed' : ''
        } ${!disabled ? 'shadow-md' : ''}`}
        onChange={handleChange}
        disabled={disabled}
        aria-disabled={disabled}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TextField;
