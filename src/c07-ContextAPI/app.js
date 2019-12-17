import React from 'react'
import ThemedButton from './themed-button'
import { ThemeContext, themes } from './theme-context'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }))
        };
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <div>
                        <ThemedButton />
                    </div>
                </ThemeContext.Provider>
                <ThemedButton />
            </div>
        );
    }
}