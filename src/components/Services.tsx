import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faGamepad,
    faCube,
    faPaintBrush,
    faRobot,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
    {
        icon: faCode,
        title: "services.web.title",
        text: "services.web.text",
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        icon: faGamepad,
        title: "services.games.title",
        text: "services.games.text",
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        icon: faCube,
        title: "services.modeling.title",
        text: "services.modeling.text",
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
        icon: faPaintBrush,
        title: "services.design.title",
        text: "services.design.text",
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
        icon: faRobot,
        title: "services.bots.title",
        text: "services.bots.text",
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-600 dark:text-red-400",
    },
    {
        icon: faServer,
        title: "services.db.title",
        text: "services.db.text",
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-600 dark:text-indigo-400",
    },
];

const Services: React.FC = () => {
    const { t } = useTranslation();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: servicesRef, isVisible: servicesVisible } =
        useScrollAnimation();

    return (
        <section id="services" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl font-bold text-center mb-12 fade-in-up ${
                        titleVisible ? "visible" : ""
                    }`}
                >
                    {t("services.title")}
                </h2>
                <div
                    ref={servicesRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 fade-in-up ${
                                servicesVisible ? "visible" : ""
                            }`}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div
                                className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}
                            >
                                <FontAwesomeIcon
                                    icon={service.icon}
                                    className={`text-2xl ${service.iconColor}`}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                {t(service.title)}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t(service.text)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
