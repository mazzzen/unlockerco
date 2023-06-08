import * as React from "react";
import { Link } from "../../lib/i18n";

interface CollectionLinkProps {
  handle: string;
  children?: React.ReactNode;
}

export const CollectionLink: React.FC<CollectionLinkProps> = ({
  handle,
  children,
}) => {
  return <Link href={`/product/${handle}`}>{children}</Link>;
};
