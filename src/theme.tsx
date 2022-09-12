import { createTheme } from "@mui/material/styles"


export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                },
            },
        },
    },
    palette: {
        light: {
            light: "whitesmoke",
            main: "#FFF",
        },
        primary: {
            main: '#009BE5',
        },
        // contrastThreshold: 2,
    },
    spacing: [0, 4, 8, 12, 16, 20, 24, 30, 40, 50, 60, 70, 80, 100]
})