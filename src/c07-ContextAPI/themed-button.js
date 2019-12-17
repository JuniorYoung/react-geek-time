import React from 'react'
import { ThemeContext } from './theme-context'

export default function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    {...props}
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background}}
                >
                    toggle theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}