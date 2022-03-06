import { StyledForm, StyledInput } from "./styles";

type FormPropsType = {
  value: string;
  placeholder: string;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({
  value,
  placeholder,
  handleChange,
  handleSubmit,
}: FormPropsType) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </StyledForm>
  );
}
