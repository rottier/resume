import { mergeConfig } from 'vite';
 
export default {
 stories: [
   '../stories/**/*.stories.mdx',
   '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
 ],
 addons: ['@storybook/addon-essentials', '@storybook/addon-designs'],
 framework: '@storybook/svelte-vite',
 async viteFinal(config) {
   // Merge custom configuration into the default config
   return mergeConfig(config, {
     // Add storybook-specific dependencies to pre-optimization
     optimizeDeps: {
       include: ['@storybook/addon-designs'],
     },
   });
 },
};