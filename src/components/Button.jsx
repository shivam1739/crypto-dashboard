import PropTypes from "prop-types";

const Button = ({ className, label, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
