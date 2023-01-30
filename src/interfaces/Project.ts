type Type = "backend" | "frontend" | "mobile";

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
  type: Type[];
  link: string;
}
