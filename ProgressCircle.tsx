import styled from "styled-components";
import { H1, H5 } from "../../../shared/globals";
import { rtl, themeColor } from "../../../shared/styles-utils";

interface ProgressCircleProps {
  value: number;
  total: number;
}

const ProgressCircle = ({ value, total }: ProgressCircleProps) => {
  const percentage = value / total;
  const size = 50;
  const strokeWidth = 5;
  const r = (size - strokeWidth) / 2;
  const c = (size - strokeWidth) * 3.14;
  const cOffset = percentage * c;

  return (
    <CircleChart style={{ transition: "all 0.2s" }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle
          r={r}
          cx="50%"
          cy="50%"
          fill="#fff"
          stroke="#fff"
          strokeWidth={strokeWidth}
        />
        <circle
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          r={r}
          strokeDasharray={`${cOffset} ${c}`}
          strokeLinecap="round"
          style={{
            transition: "all 0.2s",
            transformOrigin: "50% 50%",
            transform: "rotate(-90deg) scaleY(1)",
          }}
          cx="50%"
          cy="50%"
        />
      </svg>
      <Credit>
        <H1 style={{ fontWeight: 700 }}>{value}</H1>
        <Slash>/</Slash>
        <H5>{total}</H5>
      </Credit>
    </CircleChart>
  );
};

export default ProgressCircle;

const CircleChart = styled.div`
  display: inline-block;
  position: relative;
  color: ${themeColor("primary")};
  ${rtl("margin-left", "margin-right")}: 15px;
`;
const Credit = styled.div`
  direction: ltr;
  display: flex;
  align-items: baseline;
  position: absolute;
  top: 45%;
  ${rtl("right: -8%", "left: 50%")};

  transform: translate(-50%, -50%);
`;
const Slash = styled.span`
  margin-left: 3px;
`;
