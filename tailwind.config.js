import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  _content(),
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const plugins = [
  // ...
  plugin(),
];
