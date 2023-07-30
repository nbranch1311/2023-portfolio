import React from 'react';
import PropTypes from 'prop-types';

const variantStyles = {
  primary: 'bg-white text-blue-500 hover:bg-blue-100 border border-gray-200',
  secondary: 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
}) => {
  const buttonStyle = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      className={`py-[7px] px-4 rounded mb-4 ${buttonStyle} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } shadow`}
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
