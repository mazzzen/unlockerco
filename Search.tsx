const Search = ({ width }: { width?: string }) => {
  return (
    <svg width={width ? width : "20"} height="20" viewBox="0 0 20 20">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle cx="8" cy="8" r="8" />
        <path d="M18 18L13.65 13.65" />
      </g>
    </svg>
  );
};

export { Search };
