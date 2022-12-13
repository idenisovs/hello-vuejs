import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

import ThemeStorage from './theme-storage';
import LanguageStorage from './language-storage';

export const useSettingsStore = defineStore('settings', () => {
    const { locale } = useI18n({ useScope: 'global' });
    const themeCtrl = useTheme();

    const theme = ref(ThemeStorage.load());
    const language = ref(LanguageStorage.load());

    locale.value = language.value;

    function toggleTheme() {
        if (theme.value.name === ThemeStorage.themes.light.name) {
            theme.value = ThemeStorage.themes.dark;
        } else {
            theme.value = ThemeStorage.themes.light;
        }

        themeCtrl.global.name.value = theme.value.name;

        ThemeStorage.save(theme.value);
    }

    function toggleLanguage() {
        const selectedLanguage = language.value === 'en' ? 'lv' : 'en';
        language.value = selectedLanguage;
        locale.value = selectedLanguage;
        LanguageStorage.save(selectedLanguage);
    }

    return { theme, language, toggleTheme, toggleLanguage };
});