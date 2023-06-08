const UserIcon = ({ color = "#4F4335" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="20"
      viewBox="0 0 21 24"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke={color} strokeWidth="2.222">
          <g>
            <g transform="translate(-1088 -67) translate(0 44) translate(1090 25)">
              <path d="M17.778 20v-2.222c0-2.455-1.99-4.445-4.445-4.445H4.444C1.99 13.333 0 15.323 0 17.778V20" />
              <circle cx="8.889" cy="4.444" r="4.444" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { UserIcon };
