import React from "react";
import styled from "styled-components";
import { theme } from "../../../shared/theme";

interface Props {
  bgcolor?: string;
  progress: number;
  height?: number;
}

const ProgressBar = ({
  bgcolor = theme.colors.primary,
  progress,
  height = 4,
}: Props) => {
  return (
    <ParentDiv height={height}>
      <ChildDiv bgcolor={bgcolor} progress={progress}></ChildDiv>
    </ParentDiv>
  );
};

export default ProgressBar;

const ParentDiv = styled.div<{
  height: number;
}>`
  display: flex;
  height: ${(props) => props.height}px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
`;

const ChildDiv = styled.div<{
  bgcolor: string;
  progress: number;
}>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.bgcolor};
  border-radius: 50px;
`;
