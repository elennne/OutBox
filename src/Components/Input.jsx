import React from "react";

const Input = ({
  type,
  title,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div>
      <label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
        {title && <span>{title}</span>}
      </label>
    </div>
  );
};

export default Input;
