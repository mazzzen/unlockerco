import { HeadText, Text } from "./styled";

interface HeadingProps {
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <HeadText>
      <Text>{children}</Text>
    </HeadText>
  );
};
