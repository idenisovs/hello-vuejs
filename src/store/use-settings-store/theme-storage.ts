interface Theme {
    name: string;
    icon: string;
}

interface Themes {
    [theme: string]: Theme;
}

export const STORAGE_KEY = 'theme';

export default class ThemeStorage {
    static themes: Themes = {
        light: {
            name: 'light',
            icon: 'nights_stay'
        },
        dark: {
            name: 'dark',
            icon: 'light_mode'
        }
    };

    static load() {
        const selectedTheme = localStorage.getItem(STORAGE_KEY);

        if (!selectedTheme || !this.themes[selectedTheme]) {
            localStorage.setItem(STORAGE_KEY, this.themes.light.name);
            
            return this.themes.light;
        }

        return this.themes[selectedTheme];
    }

    static save(theme: Theme) {
        localStorage.setItem('theme', theme.name);
    }
}