import { StyledDiv } from "./styles";

type WrapperPropsType = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperPropsType) {
  return <StyledDiv>{children}</StyledDiv>;
}
