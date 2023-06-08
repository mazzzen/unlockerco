import React from "react";
import styled from "styled-components";

interface HTMLRenderProps {
  html: string | null | undefined;
  className?: string;
}

const HTMLRender: React.FC<HTMLRenderProps> = ({ html, className }) => {
  if (!html) return null;
  return (
    <Wrapper className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HTMLRender;

const Wrapper = styled.div`
  max-width: calc(100vw - 40px);
  overflow: auto;
`;
