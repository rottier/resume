import { mergeConfig } from 'vite';
 
export default {
 stories: [
   '../stories/**/*.stories.mdx',
   '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
 ],
 addons: ['@storybook/addon-essentials'],
 framework: '@storybook/svelte-vite',
 async viteFinal(config) {
   return mergeConfig(config, {
   });
 },
};