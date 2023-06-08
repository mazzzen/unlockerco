import { theme } from "../../shared/theme";

const UpdateIcon = ({ ink }: { ink?: boolean }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 13L2.5 10C2.5 9.73478 2.60536 9.48043 2.79289 9.29289L9.79289 2.29289C10.1834 1.90237 10.8166 1.90237 11.2071 2.29289L14.2071 5.29289C14.5976 5.68342 14.5976 6.31658 14.2071 6.70711L7.20711 13.7071C7.01957 13.8946 6.76522 14 6.5 14L3.5 14C2.94772 14 2.5 13.5523 2.5 13ZM10.5 4.41421L4.5 10.4142L4.5 12H6.08579L12.0858 6L10.5 4.41421Z"
        fill={ink ? theme.text.inkLight : "white"}
      />
    </svg>
  );
};

export { UpdateIcon };
