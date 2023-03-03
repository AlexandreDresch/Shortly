import { InputContainer } from "./styles";

export function Input({ placeholder, onChange, value, disabled, type }) {
  return (
    <InputContainer
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
    />
  );
}
