import { StyledHeader, HeaderText } from "./styled";

interface PageSubHeaderProps {
  children?: React.ReactNode;
}

export const PageSubHeader: React.FC<PageSubHeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <HeaderText>{children}</HeaderText>
    </StyledHeader>
  );
};
