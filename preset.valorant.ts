import type { Preset } from "unocss";
import type { Theme } from "unocss/preset-mini";

export function presetValorant(): Preset<Theme> {
  return {
    name: "unocss-preset-valorant",
    preflights: [
      {
        getCSS: () => `
:root {
  --background: 1 0 17.2;
  --foreground: 0.2 0 14.4;
  --primary: 0.7 0.2 21.3;
  --primary-foreground: 1 0 12.8;
  --secondary: 0.9 0 15.6;
  --secondary-foreground: 0.4 0.1 20.2;
  --accent: 1 0 17.4;
  --accent-foreground: 0.3 0.1 19.4;
  --muted: 1 0 0;
  --muted-foreground: 0.6 0 0;
  --border: 0.9 0 264.5;
  --info: 0.7 0.1 232;
  --info-foreground: 1 0 0;
  --success: 0.6 0.1 160.1;
  --success-foreground: 1 0 0;
  --warning: 0.8 0.2 83.8;
  --warning-foreground: 0 0 0;
  --error: 0.7 0.2 22.2;
  --error-foreground: 1 0 0;
  --card: 1 0 17.2;
  --card-foreground: 0.2 0 14.4;
  --popover: 1 0 17.2;
  --popover-foreground: 0.2 0 14.4;
  --destructive: 0.7 0.2 22.2;
  --destructive-foreground: 1 0 0;
  --input: 0.9 0 264.5;
  --ring: 0.7 0.2 21.3;
  --radius: 0.75rem;
}

.dark {
  --background: 0.2 0 14.4;
  --foreground: 1 0 17.2;
  --primary: 0.6 0.2 21.1;
  --primary-foreground: 1 0 12.4;
  --secondary: 0.4 0.1 20.2;
  --secondary-foreground: 0.9 0 15.6;
  --accent: 0.3 0.1 19.4;
  --accent-foreground: 1 0 17.4;
  --muted: 0.3 0 0;
  --muted-foreground: 1 0 0;
  --border: 0.3 0 34.3;
  --info: 0.7 0.1 232;
  --info-foreground: 1 0 0;
  --success: 0.6 0.1 160.1;
  --success-foreground: 1 0 0;
  --warning: 0.8 0.2 83.8;
  --warning-foreground: 0 0 0;
  --error: 0.7 0.2 22.2;
  --error-foreground: 1 0 0;
  --card: 0.2 0 14.4;
  --card-foreground: 1 0 17.2;
  --popover: 0.2 0 14.4;
  --popover-foreground: 1 0 17.2;
  --destructive: 0.7 0.2 22.2;
  --destructive-foreground: 1 0 0;
  --input: 0.3 0 34.3;
  --ring: 0.6 0.2 21.1;
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
