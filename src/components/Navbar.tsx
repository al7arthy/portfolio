import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faLanguage } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";
import useActiveSection from "../hooks/useActiveSection";

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const activeSection = useActiveSection();

    const handleLangSwitch = (lang: string) => setLanguage(lang);

    const getNavLinkClass = (section: string) => {
        const baseClass = "nav-link px-3 py-2 transition-all duration-300";
        
        if (activeSection === section) {
            return `${baseClass} active`;
        }
        
        return baseClass;
    };

    const getMobileNavLinkClass = (section: string) => {
        const baseClass = "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300";
        
        if (activeSection === section) {
            return `${baseClass} text-blue-600 dark:text-blue-400`;
        }
        
        return `${baseClass} hover:text-blue-600 dark:hover:text-blue-400`;
    };

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a
                            href="#home"
                            className="text-xl font-bold gradient-text"
                        >
                            Ahmed Alharthi
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#home" className={getNavLinkClass('home')}>
                            {t("nav.home")}
                        </a>
                        <a href="#about" className={getNavLinkClass('about')}>
                            {t("nav.about")}
                        </a>
                        <a href="#services" className={getNavLinkClass('services')}>
                            {t("nav.services")}
                        </a>
                        <a href="#projects" className={getNavLinkClass('projects')}>
                            {t("nav.projects")}
                        </a>
                        <a href="#contact" className={getNavLinkClass('contact')}>
                            {t("nav.contact")}
                        </a>
                        <div className="flex items-center space-x-2 ml-4">
                            <button
                                className="lang-switch px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700 font-bold flex items-center"
                                onClick={() => handleLangSwitch(language === "en" ? "ar" : "en")}
                            >
                                <FontAwesomeIcon icon={faLanguage} className={language === "en" ? 'mr-2' : 'ml-2'} />
                                {language === "en" ? "عربي" : "English"}
                            </button>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700"
                        >
                            <FontAwesomeIcon
                                icon={theme === "dark" ? faSun : faMoon}
                            />
                        </button>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <button
                                className="lang-switch px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700 font-bold flex items-center"
                                onClick={() => handleLangSwitch(language === "en" ? "ar" : "en")}
                            >
                                <FontAwesomeIcon icon={faLanguage} className={language === "en" ? 'mr-2' : 'ml-2'} />
                                {language === "en" ? "عربي" : "English"}
                            </button>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#home"
                            className={getMobileNavLinkClass('home')}
                        >
                            {t("nav.home")}
                        </a>
                        <a
                            href="#about"
                            className={getMobileNavLinkClass('about')}
                        >
                            {t("nav.about")}
                        </a>
                        <a
                            href="#services"
                            className={getMobileNavLinkClass('services')}
                        >
                            {t("nav.services")}
                        </a>
                        <a
                            href="#projects"
                            className={getMobileNavLinkClass('projects')}
                        >
                            {t("nav.projects")}
                        </a>
                        <a
                            href="#contact"
                            className={getMobileNavLinkClass('contact')}
                        >
                            {t("nav.contact")}
                        </a>
                        <div className="px-3 py-2">
                            <button
                                onClick={toggleTheme}
                                className="w-full flex justify-start items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
                            >
                                <FontAwesomeIcon
                                    icon={theme === "dark" ? faSun : faMoon}
                                    className="mr-2"
                                />
                                <span>Toggle Theme</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
