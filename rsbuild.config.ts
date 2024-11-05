import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginAssetsRetry } from "@rsbuild/plugin-assets-retry";
import { pluginCssMinimizer } from "@rsbuild/plugin-css-minimizer";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginAssetsRetry(),
    pluginCssMinimizer(),
    pluginImageCompress(),
    pluginSass(),
  ],
});
