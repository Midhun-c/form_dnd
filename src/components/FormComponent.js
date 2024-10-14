import React from 'react';

const FormComponent = ({
  component,
  label,
  placeholder,
  handleInputChange,
  handleLabelChange,
  handlePlaceholderChange,
}) => {
  return (
    <div>
      <label className="block">{label}:</label>
      <input
        type={component.type}
        placeholder={placeholder}
        onChange={e => handleInputChange(component.id, e.target.value)}
        className="border border-gray-300 p-2 rounded mt-1 w-full"
      />
    </div>
  );
};

export default FormComponent;
