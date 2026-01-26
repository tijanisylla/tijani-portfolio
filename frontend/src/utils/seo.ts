// SEO utility functions

export const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
};

export const updateTitle = (title: string) => {
  document.title = title;
};

export const updateDescription = (description: string) => {
  updateMetaTag("description", description);
  updateMetaTag("og:description", description, "property");
  updateMetaTag("twitter:description", description);
};
