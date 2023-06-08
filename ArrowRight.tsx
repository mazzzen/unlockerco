const ArrowRight = () => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12">
      <defs>
        <path
          id="66q15kvv9a"
          d="M5.293 6.697L.7 2.104C.313 1.718.313 1.091.7.704c.387-.386 1.013-.386 1.4 0l3.9 3.9 3.9-3.9c.387-.386 1.013-.386 1.4 0 .387.387.387 1.014 0 1.4L6.707 6.697c-.39.39-1.024.39-1.414 0z"
        />
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        opacity=".4"
        transform="rotate(-90 6 6)"
      >
        <mask id="l3tad14ulb" fill="currentColor">
          <use xlinkHref="#66q15kvv9a" />
        </mask>
        <use fill="currentColor" xlinkHref="#66q15kvv9a" />
        <g fill="currentColor" mask="url(#l3tad14ulb)">
          <path d="M0 24L24 24 24 0 0 0z" transform="translate(-6 -8)" />
        </g>
      </g>
    </svg>
  );
};

export { ArrowRight };
