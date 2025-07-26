import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
    const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

    return (
        <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl font-bold text-center mb-12 fade-in-up ${
                        titleVisible ? "visible" : ""
                    }`}
                >
                    {t("contact.title")}
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div
                        ref={leftRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 fade-in-left ${
                            leftVisible ? "visible" : ""
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("contact.info.title")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {t("contact.info.text")}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start hover:transform hover:scale-105 transition-all duration-300">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-blue-600 dark:text-blue-400"
                                    />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-lg font-medium">
                                        {t("contact.email")}
                                    </h4>
                                    <a
                                        href="mailto:alharthy.ahmed@outlook.sa"
                                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                                    >
                                        alharthy.ahmed@outlook.sa
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start hover:transform hover:scale-105 transition-all duration-300">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="text-green-600 dark:text-green-400"
                                    />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-lg font-medium">
                                        {t("contact.website")}
                                    </h4>
                                    <a
                                        href="https://al7arthy.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                                    >
                                        al7arthy.dev
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start hover:transform hover:scale-105 transition-all duration-300">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="text-purple-600 dark:text-purple-400"
                                    />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-lg font-medium">
                                        {t("contact.github")}
                                    </h4>
                                    <a
                                        href="https://github.com/al7arthy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                                    >
                                        github.com/al7arthy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={rightRef as React.RefObject<HTMLDivElement>}
                        className={`md:w-1/2 fade-in-right ${
                            rightVisible ? "visible" : ""
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            {t("contact.form.title")}
                        </h3>
                        <form
                            action="https://formspree.io/f/xblkodny"
                            method="POST"
                            className="space-y-4"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    {t("contact.form.name")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-all duration-300 hover:border-blue-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    {t("contact.form.email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-all duration-300 hover:border-blue-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    {t("contact.form.message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-all duration-300 hover:border-blue-400 resize-none"
                                ></textarea>
                            </div>
                            <input type="hidden" name="_to" value="alharthy.ahmed@outlook.sa" />
                            <input type="hidden" name="_subject" value="Portfolio Contact Form" />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:transform hover:scale-105 animate-pulse-glow"
                            >
                                {t("contact.form.send")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;