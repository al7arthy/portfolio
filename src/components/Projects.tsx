import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faStar,
    faCodeBranch,
    faExternalLinkAlt,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import useGitHubProjects from "../hooks/useGitHubProjects";

const filters = [
    { key: "projects.filter.all", label: "All" },
    { key: "projects.filter.web", tag: 'web', label: "Web" },
    { key: "projects.filter.games", tag: 'games', label: "Games" },
    { key: "projects.filter.tools", tag: 'tools', label: "Tools" },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState(filters[0].key);
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation();
    const { ref: projectsRef, isVisible: projectsVisible } =
        useScrollAnimation();

    const {
        projects: githubProjects,
        loading,
        error,
    } = useGitHubProjects("al7arthy");

    const selectedFilter = filters.find(f => f.key === activeFilter);
    const projects =
        !selectedFilter?.tag
            ? githubProjects
            : githubProjects.filter((project) =>
                  project.tags?.includes(selectedFilter.tag)
              );

    return (
        <section id="projects" className="py-20 bg-gray-100 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl font-bold text-center mb-12 fade-in-up ${
                        titleVisible ? "visible" : ""
                    }`}
                >
                    {t("projects.title")}
                </h2>

                <div
                    ref={filtersRef as React.RefObject<HTMLDivElement>}
                    className={`flex justify-center mb-8 fade-in-up ${
                        filtersVisible ? "visible" : ""
                    }`}
                >
                    <div
                        className="inline-flex rounded-md shadow-sm rounded-lg overflow-hidden bg-white dark:bg-slate-700"
                        role="group"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                type="button"
                                className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                    activeFilter === filter.key
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-white dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600"
                                }`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                {t(filter.key)}
                            </button>
                        ))}
                    </div>
                </div>

                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <FontAwesomeIcon
                            icon={faSpinner}
                            spin
                            className="text-4xl text-blue-600"
                        />
                        <span className="ms-3 text-lg">
                            {t("projects.loading")}
                        </span>
                    </div>
                )}

                {error && !loading && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-8">
                        <p className="text-yellow-800 dark:text-yellow-200">
                            ⚠️ {t("projects.error")}
                        </p>
                    </div>
                )}

                {!loading && !error && projects.length === 0 && (
                    <div className="text-center py-12">
                        <FontAwesomeIcon 
                            icon={faLaptopCode} 
                            className="text-6xl mb-4 text-gray-400 dark:text-gray-300" 
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            {t("projects.no_projects.title")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t("projects.no_projects.description")}
                        </p>
                    </div>
                )}

                <div
                    ref={projectsRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`project-card bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 fade-in-up ${
                                projectsVisible ? "visible" : ""
                            }`}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div
                                className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                            >
                                <FontAwesomeIcon
                                    icon={project.icon}
                                    className="text-white text-6xl transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                {/* GitHub Stats */}
                                <div className="absolute top-4 end-4 flex gap-3">
                                    {project.stars > 0 && (
                                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-white text-xs">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="me-1"
                                            />
                                            {project.stars}
                                        </div>
                                    )}
                                    {project.forks > 0 && (
                                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-white text-xs">
                                            <FontAwesomeIcon
                                                icon={faCodeBranch}
                                                className="me-1"
                                            />
                                            {project.forks}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 capitalize">
                                    {project.name.replace(/-/g, " ")}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags
                                        .filter(
                                            (tag) =>
                                                !filters
                                                    .filter((f) => f.tag)
                                                    .map((f) => f.tag)
                                                    .includes(tag)
                                        )
                                        .map((tag, tagIndex) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded transition-all duration-300 hover:scale-105 fade-in-up ${
                                                    projectsVisible ? "visible" : ""
                                                }`}
                                                style={{
                                                    animationDelay: `${idx * 0.15 + tagIndex * 0.05}s`,
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-600 rounded transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="me-2"
                                        />
                                        {t("projects.buttons.code")}
                                    </a>
                                    {"homepage" in project &&
                                        project.homepage && (
                                            <a
                                                href={project.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-300 flex items-center justify-center"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faExternalLinkAlt}
                                                    className="me-2"
                                                />
                                                {t("projects.buttons.live")}
                                            </a>
                                        )}
                                </div>

                                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                    {t("projects.updated")}: {project.updated}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/al7arthy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:transform hover:scale-105 inline-flex items-center animate-pulse-glow"
                    >
                        <FontAwesomeIcon icon={faGithub} className="me-2" />
                        {t("projects.view_all")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;