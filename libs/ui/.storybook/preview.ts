import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';

import './tailwind.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
