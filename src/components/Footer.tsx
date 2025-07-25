import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

    return (
        <footer
            ref={footerRef as React.RefObject<HTMLElement>}
            className={`bg-gray-100 dark:bg-slate-800 py-8 fade-in-up ${
                footerVisible ? "visible" : ""
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-300 text-center md:text-start">
                            {t("footer.copyright", { year })}
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/al7arthy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-2xl"
                            />
                        </a>
                        <a
                            href="mailto:alharthy.ahmed@outlook.sa"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-2xl"
                            />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-2xl"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;