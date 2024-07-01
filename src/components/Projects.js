import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A collection of utility and game applications including a classic
            Tic-tac-toe game for two players, a precise StopWatch with start,
            stop, and reset functionalities, an efficient To-do list for
            managing tasks with add, edit, and delete features, and a sleek
            Digital Clock displaying real-time hours, minutes, and seconds with
            an AM/PM indicator.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-100 p-4">
              <div className="relative w-full border-4 border-gray-800 bg-gray-900 p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-3">{project.description}</p>
                {project.skills && (
                  <div className="text-gray-500 text-sm">
                    Skills: {project.skills.join(", ")}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
