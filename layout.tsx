import React from "react";
import { StoreTemplate } from "../../templates/TemplateLoader";

// by default all pages will use this SiteLayout component
export const getMainLayout = (page: React.ReactElement) => {
  const Template = StoreTemplate.get();
  return <Template.elements.SiteLayout>{page}</Template.elements.SiteLayout>;
};

// use this function to render custom layout
export const disableMainLayout = (page) => page;

// use this function to render nested layout
export const getNestedSiteLayout = (Layout) => (page) => {
  return getMainLayout(<Layout>{page}</Layout>);
};
