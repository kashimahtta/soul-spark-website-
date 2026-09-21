import {
  PenLine,
  Brain,
  GraduationCap,
  HeartHandshake,
  Compass,
  BookOpenText,
} from "lucide-react";

export const phone = "9999884938";
export const nav = ["Home", "About", "Courses", "Reviews", "Contact Me"];

export const courses = [
  {
    title: "Handwriting",
    desc: "Improve handwriting, letter formation, spacing, speed and confidence through structured practice.",
    icon: PenLine,
    image: "/handwriting courses.jpeg",
  },
  {
    title: "Graphology",
    desc: "Explore handwriting patterns and discover how writing can reflect behavioural tendencies and self-expression.",
    icon: Brain,
    image: "/graphology courses.jpeg",
  },
  {
    title: "Parenting Guidance",
    desc: "Practical guidance to build stronger parent-child communication, emotional connection and positive routines.",
    icon: HeartHandshake,
    image: "/parenting.jpeg",
  },
  {
    title: "Life Coaching",
    desc: "Get clarity, direction and practical tools for personal growth, confidence, mindset and life decisions.",
    icon: Compass,
    image: "/life coaching.jpeg",
  },
  {
    title: "Bhagavad Gita Quotes",
    desc: "Timeless reflections and teachings inspired by the Bhagavad Gita for everyday courage, balance and growth.",
    icon: BookOpenText,
    image: "/bhagwat geeta qoutes.jpeg",
  },
];

export const reviews = [
  {
    name: "Student Result 1",
    text: "Share your experience with this result.",
    image: "/handwriting transform 1.jpeg",
    altText: "Handwriting progress example 1",
    orientation: "portrait",
  },
  {
    name: "Student Result 2",
    text: "Share your experience with this result.",
    image: "/handwriting transfom 2.jpeg",
    altText: "Handwriting progress example 2",
    orientation: "square",
  },
  {
    name: "Student Result 3",
    text: "Share your experience with this result.",
    image: "/handwriting transform 3.jpeg",
    altText: "Handwriting progress example 3",
    orientation: "square",
  },
  {
    name: "Student Result 4",
    text: "Share your experience with this result.",
    image: "/handwriting transform 4.jpeg",
    altText: "Handwriting progress example 4",
    orientation: "square",
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
