import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        
        // Update HTML attributes
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#031B34] font-semibold hover:opacity-90 transition-opacity"
            aria-label="Switch Language"
        >
            {i18n.language === 'ar' ? 'EN' : 'AR'}
        </button>
    );
}
