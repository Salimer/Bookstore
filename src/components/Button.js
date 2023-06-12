import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
