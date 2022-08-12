import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    projectMainColor?: PaletteColor;
  }

  interface PaletteOptions {
    projectMainColor?: PaletteColorOptions;
  }

  interface PaletteColor {
    veryLight?: string;
    veryDark?: string;
  }

  interface SimplePaletteColorOptions {
    veryLight?: string;
    veryDark?: string;
  }
}
