import React from 'react'

export const themes = {
    light: {
        background: '#222222',
        foreground: '#ffffff',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});