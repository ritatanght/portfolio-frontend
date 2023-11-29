import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiPython,
  DiDjango,
  DiReact,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiAdobe,
} from "react-icons/si";
import photo from "./assets/images/profile_pic.jpg";
import photo2 from "./assets/images/profile_pic2.jpg";

export const photos = [photo, photo2];

export const tools = [
  { label: "HTML5", icon: <DiHtml5 />, color: "#e96228" },
  { label: "CSS3", icon: <DiCss3 />, color: "#3a97d0" },
  { label: "Sass", icon: <DiSass />, color: "#c76494" },
  { label: "Tailwind", icon: <SiTailwindcss />, color: "#07b0ce" },
  { label: "JavaScipt", icon: <DiJsBadge />, color: "#f7df1e" },
  { label: "React", icon: <DiReact />, color: "#61dbfb" },
  { label: "Typescript", icon: <SiTypescript />, color: "#3178c6" },
  { label: "Express", icon: <SiExpress />, color: "#000000" },
  { label: "Python", icon: <DiPython />, color: "#4584b6" },
  { label: "Python", icon: <DiPython />, color: "#ffde57" },
  { label: "Django", icon: <DiDjango />, color: "#0c4b33" },
  { label: "MongoDB", icon: <SiMongodb />, color: "#00684a" },
  { label: "PostgreSQL", icon: <SiPostgresql />, color: "#0064a5" },
  { label: "Adobe Suite", icon: <SiAdobe />, color: "#ed2224" },
];

export const traits = [
  "Lifelong Learner",
  "Autodidact",
  "Foodie",
  "Coffee Lover",
  "Globetrotter",
  "Amateur Pianist",
  "Dependable",
  "Frugal",
  "Low-profile",
  "Co-op Gamer",
  "DIYer",
  "Animal Lover",
];
