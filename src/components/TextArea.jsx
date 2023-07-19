import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  label,
  name,
  value = '',
  defaultValue = '',
  rows = 3,
  onChange = () => {},
  disabled = false,
  resize = 'both',
}) => {
  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? '');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  let resizeClass = '';
  switch (resize) {
    case 'vertical':
      resizeClass = 'resize-y';
      break;
    case 'horizontal':
      resizeClass = 'resize-x';
      break;
    case 'both':
      resizeClass = 'resize';
      break;
    case 'none':
      resizeClass = 'resize-none';
      break;
    default:
      resizeClass = 'resize';
      break;
  }

  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}</label>
      <div>
        <textarea
          name={name}
          value={inputValue}
          rows={rows}
          className={`border border-gray-200 rounded px-2 py-1 w-full ${resizeClass} ${
            disabled ? 'bg-gray-200 cursor-not-allowed' : ''
          } ${!disabled ? 'shadow-md' : ''}`}
          onChange={handleChange}
          disabled={disabled}
          aria-disabled={disabled}
        />
      </div>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  resize: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
};

export default TextArea;
