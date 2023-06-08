import * as React from "react";
import { useStore } from "../lib/storeData";
import type { FooterProps } from "../templates/types";
import type { RendererComponent } from "./types";

interface FooterRendererProps extends RendererComponent<FooterProps> {}

const FooterRenderer: React.FC<FooterRendererProps> = ({ Component }) => {
  const { storeId, socialMedia, appearance, legalPages } = useStore();

  const date = new Date().getFullYear();

  if (!storeId) {
    return null;
  }

  return (
    <Component
      date={date}
      footerData={appearance?.footer}
      legalPages={legalPages}
      socialMedia={socialMedia}
    />
  );
};

export default FooterRenderer;
