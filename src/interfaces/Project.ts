export default interface Project {
  title: {
    "pt_BR": string;
    "en_US": string;
    "es_ES": string;
    "et": string;
  };
  subDescription: {
    "pt_BR": string;
    "en_US": string;
    "es_ES": string;
    "et": string;
  };
  description: {
    "pt_BR": string;
    "en_US": string;
    "es_ES": string;
    "et": string;
  };
  image: string;
  skills: string[];
  type: "backend" | "frontend" | "mobile" | "all";
  link: string;
}
