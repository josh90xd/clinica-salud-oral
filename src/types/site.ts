import type { IconType } from "react-icons";

export type LinkItem = {
  label: string;
  href: string;
};

export type Specialty = {
  name: string;
  description: string;
  details: string[];
  idealFor: string;
  image: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: IconType;
};

export type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  gallery?: string[];
};
