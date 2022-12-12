import { ref } from 'vue';
import { defineStore } from 'pinia';

import ThemeStorage from './theme-storage';
import LanguageStorage from './language-storage';

export const useSettingsStore = defineStore('settings', () => {
    const theme = ref(ThemeStorage.load());
    const language = ref(LanguageStorage.load());

    function toggleTheme() {
        if (theme.value.name === ThemeStorage.themes.light.name) {
            theme.value = ThemeStorage.themes.dark;
        } else {
            theme.value = ThemeStorage.themes.light;
        }

        ThemeStorage.save(theme.value);
    }

    function toggleLanguage() {
        const selectedLanguage = language.value === 'en' ? 'lv' : 'en';
        language.value = selectedLanguage;
        LanguageStorage.save(selectedLanguage);
    }

    return { theme, language, toggleTheme, toggleLanguage };
});