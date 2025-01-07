import { createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: '38em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  colors: {
    blue: [
        "#f3edff",
        "#e0d7fa",
        "#beabf0",
        "#9a7ce6",
        "#7c56de",
        "#683dd9",
        "#5f2fd8",
        "#4f23c0",
        "#451eac",
        "#3a1899"
    ],
  },
  fontFamily: 'Open Sans, sans-serif',
//   primaryColor: 'violet',
});