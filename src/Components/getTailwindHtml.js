import draftToHtml from "draftjs-to-html";

export const getTailwindHtml = (value) => {
  const converted = value ? draftToHtml(value) : null;

  const tailwindClasses = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-md",
    blockquote: "border-l-4 border-blue-500 pl-4 py-2 italic",
    pre: "bg-base-300 p-4 rounded-md text-sm font-mono",
    ol: "list-decimal pl-4",
    ul: "list-disc pl-4",
  };

  let tailwindHTML = converted;

  // Loop through each element and add Tailwind CSS classes
  for (const element in tailwindClasses) {
    const regex = new RegExp(`<${element}>`, "g");
    const replacement = `<${element} class="${tailwindClasses[element]}">`;
    tailwindHTML = tailwindHTML?.replace(regex, replacement);
  }
  return tailwindHTML;
};
