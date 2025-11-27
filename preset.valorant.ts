import type { Preset } from "unocss";
import type { Theme } from "unocss/preset-mini";

export function presetValorant(): Preset<Theme> {
  return {
    name: "unocss-preset-valorant",
    preflights: [
      {
        getCSS: () => `
:root {
  --background: 100% 0 0;
  --foreground: 14.5% 0 0;
  --primary: 66.8% 0.220 21.344;
  --primary-foreground: 98.5% 0 0;
  --secondary: 97% 0 0;
  --secondary-foreground: 20.5% 0 0;
  --accent: 97% 0 0;
  --accent-foreground: 20.5% 0 0;
  --muted: 97% 0 0;
  --muted-foreground: 55.6% 0 0;
  --border: 92.8% 0.006 264.531;
  --info: 72% 0.147 231.966;
  --info-foreground: 100% 0 0;
  --success: 77.8% 0.157 168.296;
  --success-foreground: 100% 0 0;
  --warning: 84.7% 0.163 83.848;
  --warning-foreground: 0% 0 0;
  --error: 71.8% 0.176 22.164;
  --error-foreground: 100% 0 0;
  --card: 100% 0 0;
  --card-foreground: 14.5% 0 0;
  --popover: 100% 0 0;
  --popover-foreground: 14.5% 0 0;
  --destructive: 71.8% 0.176 22.164;
  --destructive-foreground: 100% 0 0;
  --input: 92.8% 0.006 264.531;
  --ring: 20.5% 0 0;
  --radius: 0.5rem;
}

.dark {
  --background: 14.5% 0 0;
  --foreground: 98.5% 0 0;
  --primary: 66.8% 0.220 21.344;
  --primary-foreground: 20.5% 0 0;
  --secondary: 26.9% 0 0;
  --secondary-foreground: 98.5% 0 0;
  --accent: 26.9% 0 0;
  --accent-foreground: 98.5% 0 0;
  --muted: 26.9% 0 0;
  --muted-foreground: 98.5% 0 0;
  --border: 26.8% 0.006 34.298;
  --info: 72% 0.147 231.966;
  --info-foreground: 100% 0 0;
  --success: 77.8% 0.157 168.296;
  --success-foreground: 100% 0 0;
  --warning: 84.7% 0.163 83.848;
  --warning-foreground: 0% 0 0;
  --error: 71.8% 0.176 22.164;
  --error-foreground: 100% 0 0;
  --card: 14.5% 0 0;
  --card-foreground: 98.5% 0 0;
  --popover: 14.5% 0 0;
  --popover-foreground: 98.5% 0 0;
  --destructive: 71.8% 0.176 22.164;
  --destructive-foreground: 100% 0 0;
  --input: 26.8% 0.006 34.298;
  --ring: 98.5% 0 0;
}
`,
      },
    ],
    theme: {
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        border: "oklch(var(--border))",
        info: {
          DEFAULT: "oklch(var(--info))",
          foreground: "oklch(var(--info-foreground))",
        },
        success: {
          DEFAULT: "oklch(var(--success))",
          foreground: "oklch(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "oklch(var(--warning))",
          foreground: "oklch(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "oklch(var(--error))",
          foreground: "oklch(var(--error-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  };
}
