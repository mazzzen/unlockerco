import React from "react";
import { FontTypeEnum } from "../generated/graphql";
import { StoreContextType } from "./storeData";

interface StoreFontsProps {
  storeData?: StoreContextType;
}

const defaultFonts = (
  <>
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link
      href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
      rel="stylesheet"
    />
  </>
);

const StoreFonts: React.FC<StoreFontsProps> = ({ storeData }) => {
  const fonts = storeData?.appearance?.fonts;
  const selectedFonts = fonts
    ?.filter((item) => item?.type)
    ?.map((item) => (
      <link key={item?.type} href={item?.url!} rel="stylesheet" />
    ));
  const appliedFonts = selectedFonts?.length ? selectedFonts : defaultFonts;

  return (
    <React.Fragment>
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {appliedFonts}
    </React.Fragment>
  );
};

export default StoreFonts;

/**
 *
 * Helper
 *
 */

export function getFonts(storeData?: StoreContextType) {
  const chosenFontsArr = storeData?.appearance?.fonts?.filter(
    (item) => item?.type
  );
  const defaultFontFamily = Object.keys(FontTypeEnum).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: `"Inter","Almarai", sans-serif`,
    }),
    {}
  );
  const chosenFontsFamily = chosenFontsArr?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr?.type!]: `"${curr?.fontFamily}", "Inter","Almarai", ${curr?.category}, sans-serif`,
    }),
    {}
  );
  return { ...defaultFontFamily, ...chosenFontsFamily };
}
