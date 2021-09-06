import { DefaultTheme } from '@react-navigation/native';

export const colors = {
    white: '#fff',
    black: '#000',
    primary100: '#A8A6A6', // Subtitles
    primary200: '#696969', // Segmented Navigation Background
    primary300: '#363636', // Container Border
    primary400: '#1A1A1A', // Container Background
    primary500: '#111111', // Main Background
    accent: '#F51F22',
    accentHover: '#FF6F71',
    accentDisabled: '#FF9697',
    accentTransparent: '',
}

export const fontSizes = {
    h1: 30,
    h2: 26,
    h3: 22,
    h4: 18,
    h5: 14
}

export const defaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#111111',
        border: 'transparent'
    }
}