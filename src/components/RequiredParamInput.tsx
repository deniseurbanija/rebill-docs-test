// RequiredParamInput.tsx
import React from 'react';

interface RequiredParamInputProps {
  paramName: string;
  updateParam: (paramName: string, value: string) => void;
}

export const RequiredParamInput: React.FC<RequiredParamInputProps> = ({ paramName, updateParam }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateParam(paramName, event.target.value);
  };

  return (
    <div>
      <label htmlFor={paramName}>{paramName}: </label>
      <input
        type="text"
        id={paramName}
        name={paramName}
        onChange={handleChange}
      />
    </div>
  );
};
