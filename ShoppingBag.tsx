const ShoppingBag = ({ color = "#252a31" }: { color?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <filter
          id="uyr5fgkvtgjk"
          width="101.4%"
          height="116.4%"
          x="-.7%"
          y="-8.2%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            radius="2"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy="2"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0.1 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g
          fill={color}
          filter="url('#uyr5fgkvtgjk')"
          transform="translate(-1245 -23)"
        >
          <g>
            <path
              d="M2 2v2h2.1l3.3 7.9-1.2 1.9c-.4.6-.4 1.4-.1 2.1.3.7 1 1.1 1.8 1.1H20v-2H7.9v-.1L9.053 13H16.5c.7 0 1.4-.4 1.8-1l3.6-6.5c.2-.3.2-.7 0-1-.2-.3-.5-.5-.9-.5H6.232L5.4 2H2zm5.064 4h12.237L16.5 11H9.143L7.064 6zM8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              transform="translate(1245 23)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export { ShoppingBag };
