type FormPropsType = {
  value: string;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({
  value,
  handleChange,
  handleSubmit,
}: FormPropsType) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
    </form>
  );
}
