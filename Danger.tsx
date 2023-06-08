const Danger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="38"
      viewBox="0 0 41 38"
    >
      <defs>
        <filter
          id="wzuetbmuja"
          width="101.7%"
          height="148%"
          x="-.8%"
          y="-24%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.687160326 0 0 0 0 0.687160326 0 0 0 0 0.687160326 0 0 0 0.2 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fill="#E98305" fillRule="nonzero">
          <g
            filter="url(#wzuetbmuja)"
            transform="translate(-156 -76) translate(0 70)"
          >
            <g>
              <path
                d="M22.736 17.168L13.082.907C12.745.339 12.154 0 11.5 0s-1.246.339-1.582.906L.263 17.168c-.342.576-.35 1.298-.024 1.883.326.586.942.949 1.607.949h19.309c.664 0 1.28-.363 1.606-.949.327-.585.318-1.307-.025-1.883zm-10.139-.501h-2.195v-2.223h2.195v2.223zm0-4.445h-2.195V6.667h2.195v5.555z"
                transform="translate(165 15)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Danger };
