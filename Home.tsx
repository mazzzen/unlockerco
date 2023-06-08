export const Home = ({ color = "#252a31" }: { color?: string }) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.0996094L0 10H3V19H10V13H12V19H19V10H22L11 0.0996094ZM11 2.79102L17 8.19141V9V17H14V11H8V17H5V8.19141L11 2.79102Z"
        fill={color}
      />
    </svg>
  );
};
