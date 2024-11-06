import PropTypes from "prop-types";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const InputField = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="rounded-3xl  border-2 w-[40%] lg:w-[50%]  border-gray_lite h-12 relative ">
      <input
        type="text"
        onChange={handleChange}
        className="bg-inherit h-full border-none pl-3 pr-10 w-full outline-none"
        placeholder="Search anything in cupivupi"
        value={value}
      />
      <span
        className="absolute right-3 top-[50%] translate-y-[-50%]"
        onClick={() => onSearch(value)}
      >
        <BiSearch size={18} className="text-highlight" />
      </span>
    </div>
  );
};

InputField.propTypes = {
  onSearch: PropTypes.func,
};

InputField.defaultProps = {
  onSearch: () => {},
};

export default InputField;
