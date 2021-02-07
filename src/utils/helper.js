import { logoMaping } from "./common";

export const getRepoIconBg = repo => {
  let { language = "", name = "", description = "" } = repo;
  language = language ? language.toLowerCase() : "";
  name = name ? name.toLowerCase() : "";
  description = description ? description.toLowerCase() : "";
  if (
    (description.includes("react") || name.includes("react")) &&
    language === "javascript"
  ) {
    return {
      icon: logoMaping["react"],
      bg: "react"
    };
  }
  return {
    icon: logoMaping[language ? language : "default"],
    bg: language
  };
};
