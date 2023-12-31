const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const sharedTailwindConfig = require('../../libs/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    join(__dirname, './src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  ...sharedTailwindConfig,
};
