export default interface Project {
  title: string;
  subDescription: string;
  description: string;
  image: string;
  skills: string[];
  type: "backend" | "frontend" | "mobile"
}
