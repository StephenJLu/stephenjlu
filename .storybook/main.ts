
const config = {
  stories: [    
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",    
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
    '@storybook/addon-links',    
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.js',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
