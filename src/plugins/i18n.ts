import { createI18n } from 'vue-i18n';

import lv from '../locales/lv.json';
import en from '../locales/en.json';

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages: {
        en, lv
    }
});