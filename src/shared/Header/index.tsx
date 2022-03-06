import { StyledHeader } from "./styles";

type HeaderPropsType = {
  children: string;
};

export default function Header({ children }: HeaderPropsType) {
  return <StyledHeader>{children}</StyledHeader>;
}
