import sharedConfig from '@repo/tailwind-config';

export default {
  ...sharedConfig,
  content: [
    './**/*.{js,ts,jsx,tsx}',
    // ... other content paths specific to this project
  ],
  // You can override or extend the shared config here if needed
  theme: {
    extend: {
      ...sharedConfig.theme.extend,
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    ...sharedConfig.plugins,
    // Project-specific plugins
  ],
};