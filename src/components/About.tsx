import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import useGitHubStats from "../hooks/useGitHubStats";

const skills = [
    "Node.js",
    "React",
    "React Native",
    "Next.js",
    "Supabase",
    "Python",
    "Lua",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Godot",
    "Blender",
    "Figma",
    "Discord Bots",
    "Ubuntu",
];

const About: React.FC = () => {
    const { t } = useTranslation();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
    const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
    const { stats, loading: statsLoading } = useGitHubStats("al7arthy");

    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl font-bold text-center mb-12 fade-in-up ${
                        titleVisible ? "visible" : ""
                    }`}
                >
                    {t("about.title")}
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div
                        ref={leftRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 fade-in-left ${
                            leftVisible ? "visible" : ""
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("about.who.title")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {t("about.who.text")}
                        </p>
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("about.education.title")}
                        </h3>
                        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-medium">
                                    Taif University
                                </h4>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    2023 - Present
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t("about.education.degree")}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                GPA: 3.68/4.00
                            </p>
                        </div>
                    </div>
                    <div
                        ref={rightRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 fade-in-right ${
                            rightVisible ? "visible" : ""
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("about.skills.title")}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className={`skill-badge px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 fade-in-up ${
                                        rightVisible ? "visible" : ""
                                    } ${
                                        index % 7 === 0
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                                            : index % 7 === 1
                                            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                                            : index % 7 === 2
                                            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                                            : index % 7 === 3
                                            ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                                            : index % 7 === 4
                                            ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                                            : index % 7 === 5
                                            ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                                            : "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("about.stats.title")}
                        </h3>
                        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">
                                        {statsLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600" />
                                        ) : (
                                            stats?.public_repos || "0"
                                        )}
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        {t("about.stats.repos")}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">
                                        {statsLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600" />
                                        ) : (
                                            `${stats?.total_commits || "0"}+`
                                        )}
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        {t("about.stats.commits")}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">
                                        {statsLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600" />
                                        ) : (
                                            stats?.total_stars || "0"
                                        )}
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        {t("about.stats.projects")}
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://github.com/al7arthy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center mt-4 text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                            >
                                {t("about.stats.profile")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
