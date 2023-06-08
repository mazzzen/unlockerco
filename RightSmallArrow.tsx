const RightSmallArrow = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="7" height="12" viewBox="0 0 7 12">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.332 0L0 1.41 4.327 6 0 10.59 1.332 12 7 6z"
      />
    </svg>
  );
};

export { RightSmallArrow };
