export const STORAGE_KEY = 'language';

export default class LanguageStorage {
    static load() {
        const selectedLanguage = localStorage.getItem('language');

        if (selectedLanguage) {
            return selectedLanguage;
        }

        const defaultLanguage = 'en';

        localStorage.setItem(STORAGE_KEY, defaultLanguage);
        
        return defaultLanguage;
    }

    static save(selectedLanguage: string) {
        localStorage.setItem(STORAGE_KEY, selectedLanguage);
    }
}