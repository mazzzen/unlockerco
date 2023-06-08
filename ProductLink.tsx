import * as React from "react";
import { Link } from "../../lib/i18n";

interface ProductLinkProps {
  handle: string;
  children?: React.ReactNode;
}

export const ProductLink: React.FC<ProductLinkProps> = ({
  children,
  handle,
}) => {
  return (
    <Link href={`/product/all/${handle}`} passHref>
      {children}
    </Link>
  );
};
