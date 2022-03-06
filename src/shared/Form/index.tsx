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
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={{
          margin: 4,
          height: 30,
          padding: 15,
          fontSize: 16,
          border: "none",
          outline: "none",
          color: "dimgrey",
        }}
      />
    </form>
  );
}
