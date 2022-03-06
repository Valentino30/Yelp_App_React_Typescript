type HeaderPropsType = {
  children: string;
};

export default function Header({ children }: HeaderPropsType) {
  return <h1 style={{ textAlign: "center", color: "white" }}>{children}</h1>;
}
