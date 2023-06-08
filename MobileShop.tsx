const MobileShop = ({ color = "#252a31" }: { color?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <rect width="24" height="24" fill="#FFF" />
        <path
          fill={color}
          fillRule="nonzero"
          d="M4,3 L4,7.0292969 L2,13.037109 L2,15 L3,15 L3,21 L13,21 L13,15 L19,15 L19,21 L21,21 L21,15 L22,15 L22,13.037109 L20,7.0292969 L20,3 L4,3 Z M6,5 L18,5 L18,7 L6,7 L6,5 Z M5.4511719,9 L18.548828,9 L19.880859,13 L13,13 L4.1210938,13 L5.4511719,9 Z M5,15 L11,15 L11,19 L5,19 L5,15 Z"
        />
      </g>
    </svg>
  );
};

export { MobileShop };
