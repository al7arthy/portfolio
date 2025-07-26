import { useEffect, useState } from 'react';
import i18n from '../i18n';

export default function useLanguage() {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) return savedLanguage;
        
        const systemLanguage = navigator.language.split('-')[0];
        return systemLanguage === 'ar' ? 'ar' : 'en';
    });

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('language', language);
        i18n.changeLanguage(language);
    }, [language]);

    return { language, setLanguage };
}
