import { StyledParagraph } from "./styles";

type ParagraphPropsType = {
  children: string;
};

export default function Text({ children }: ParagraphPropsType) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
