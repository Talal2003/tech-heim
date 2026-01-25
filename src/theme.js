import { createTheme } from "@mui/material"

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#0C68F4',
                25: '#E4EEFE',
                50: '#AECDFB',
                75: '#78ABF9',
                100: '#428AF6',
                200: '#2779F5',
                400: '#0951BE',
                500: '#063A88',
                600: '#052E6D',
                700: '#042352',
                900: '#021736'
            },
            secondary: {
                main: '#F45E0C',
                100: '#FDDBC9',
                200: '#FAB793',
                300: '#F68242',
                400: '#F45E0C',
                500: '#BE4909',
                600: '#883406'
            },
            neutral: {
                black: '#0C0C0C',
                white: '#FFFFFF',
                gray100: '#F9F9F9',
                gray200: '#F6F6F6',
                gray300: '#EDEDED',
                gray400: '#CBCBCB',
                gray500: '#B4B4B4',
                gray600: '#9E9E9E',
                gray700: '#717171',
                gray800: '#505050',
                gray900: '#444444',
                gray1000: '#2D2D2D'
            },
            error: {
                main: '#C91433',
                light: '#FAE7EB',
            },
            success: {
                main: '#198754',
                light: '#D1F7E5',
            },
        }
    })
}

export default getTheme;