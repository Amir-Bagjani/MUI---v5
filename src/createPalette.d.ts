import { PaletteColorOptions, PaletteColor } from "@mui/material/styles/createPalette";

declare module '@mui/material/styles/createPalette' {

  interface Palette {
    light?: PaletteColor;
  }
  interface PaletteOptions {
    light?: PaletteColorOptions;
  }

}