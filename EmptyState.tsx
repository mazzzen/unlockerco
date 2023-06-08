import styled from "styled-components";
import { H2, H4 } from "../../shared/globals/";
import { ReactNode } from "react";

interface EmptyStateProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  image?: ReactNode;
  button?: ReactNode;
}

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 0 100px;
  > * {
    margin-bottom: 15px;
  }
`;

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  image,
  button,
}) => {
  return (
    <StyledCard>
      {image}
      <H2>{title}</H2>
      <H4 color="secondary" style={{ maxWidth: "60%" }}>
        {description}
      </H4>
      {button}
    </StyledCard>
  );
};
