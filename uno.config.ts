import { defineConfig, presetIcons, presetWind4, transformerDirectives } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";
import { presetValorant } from "./preset.valorant";

export default defineConfig({
  presets: [
    presetWind4(),
    presetAnimations(),
    presetShadcn(),
    presetIcons(),
    presetValorant(),
  ],
  transformers: [transformerDirectives()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "(components|src)/**/*.{js,ts}",
      ],
    },
  },
});
