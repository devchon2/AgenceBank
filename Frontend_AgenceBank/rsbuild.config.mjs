import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.js',
        },
    },
    html: {
        template: './public/index.html',
    },
    output: {
        assetPrefix: '/AgenceBank/',
    },
});
