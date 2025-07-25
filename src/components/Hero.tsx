import React from "react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import useGitHubProfile from "../hooks/useGitHubProfile";

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
    const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
    const { profile } = useGitHubProfile("al7arthy");

    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div
                        ref={leftRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 mb-10 md:mb-0 fade-in-left ${
                            leftVisible ? "visible" : ""
                        }`}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {t("hero.title")}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
                            {t("hero.subtitle")}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            {t("hero.tagline")}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300 shadow-lg hover:shadow-blue-500/30 animate-pulse-glow"
                            >
                                {t("hero.projects_button")}
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg font-medium transition duration-300"
                            >
                                {t("hero.cv_button")}
                            </a>
                        </div>
                    </div>
                    <div
                        ref={rightRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 flex justify-center fade-in-right ${
                            rightVisible ? "visible" : ""
                        }`}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center animate-float">
                            <div
                                className="absolute inset-0 rounded-full bg-cover bg-center opacity-90"
                                style={{
                                    backgroundImage: `url('${
                                        profile?.avatar_url ||
                                        "https://avatars.githubusercontent.com/u/54087818?v=4"
                                    }')`,
                                }}
                            ></div>
                            <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
                            <div className="absolute space-x-2 -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg animate-pulse-glow flex items-center whitespace-nowrap">
                                <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                                <span className="text-sm font-medium">
                                    {t("hero.available")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
