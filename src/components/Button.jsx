import React from 'react';
import PropTypes from 'prop-types';

const variantStyles = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
};

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
}) => {
  const buttonStyle = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      className={`font-bold py-2 px-4 rounded mb-4 ${buttonStyle} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } shadow-md`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default Button;
