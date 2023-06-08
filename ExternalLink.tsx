import * as React from "react";

interface ExternalLinkProps {
  url: string;
  openInNewTab?: boolean;
  children?: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  children,
  openInNewTab,
}) => {
  const target = openInNewTab ? "_blank" : "_self";
  const realURL = url?.includes("http") ? url : "http://" + url;
  return (
    <a href={realURL} target={target}>
      {children}
    </a>
  );
};
