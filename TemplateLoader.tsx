import React from "react";
import renderers from "../Renderers";
import type { DefaultTemplate, ModifiedTemplate } from "./default";
import type { Renderers } from "../Renderers";
import defaultTemplate from "./default";
import ArabHardware from "./arab-hardware";
import FarahOmar from "./farah-omar";

const TemplateMap = {
  "arab-hardware": ArabHardware,
  "farah-omar": FarahOmar,
};

function loadTemplate(template: string): DefaultTemplate {
  const customTemplate: DefaultTemplate = TemplateMap[template];
  const mergedTemplate: DefaultTemplate = {
    pages: {
      ...defaultTemplate?.pages,
      ...customTemplate?.pages,
    },
    elements: {
      ...defaultTemplate?.elements,
      ...customTemplate?.elements,
    },
  };

  const renderedElements = Object.keys(renderers).reduce(
    (acc: ModifiedTemplate["elements"], componentName: keyof Renderers) => {
      const RendererComponent: any = renderers[componentName];
      const elements: ModifiedTemplate["elements"] = {
        ...acc,
        [componentName]: (props) => (
          <RendererComponent
            Component={mergedTemplate.elements?.[componentName]}
            {...props}
          />
        ),
      };
      return elements;
    },
    {}
  );

  const Template: DefaultTemplate = {
    pages: {
      ...mergedTemplate.pages,
    },
    elements: {
      ...mergedTemplate.elements,
      ...renderedElements,
    },
  };

  return Template;
}

export const StoreTemplate = (function () {
  const templateMapper: { [key: string]: DefaultTemplate } = {};
  let templateName: string | undefined = undefined;

  const Actions = {
    load: (template: string) => {
      templateName = template;
      if (!templateMapper[template]) {
        templateMapper[template] = loadTemplate(template);
      }
      return templateMapper[template];
    },

    get: () => {
      return templateMapper[templateName!];
    },
  };

  return Actions;
})();
