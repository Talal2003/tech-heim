import { createTheme } from "@mui/material"

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#0C68F4'
            },
            secondary: {
                main: '#F45E0C'
            }
        }
    })
}

export default getTheme;