type HeaderPropsType = {
  children: string;
};

export default function Header({ children }: HeaderPropsType) {
  return <h1>{children}</h1>;
}
