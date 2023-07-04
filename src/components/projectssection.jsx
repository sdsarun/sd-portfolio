import Project from "./project"

import justfitIcon from "../assets/justfit-project.png"
import justfitDemoVideo from "../assets/justfit-demo-video.mp4"
import kotesVideo from "../assets/kotes-video.mp4"
import kostkanVideo from "../assets/kostkan-video.mp4"
import { DateUtil } from "../utils/dateutil.js";

export default function ProjectsSection({ image, title, description, date, tools, githubLink, demoLink, activityType, videoBackground }) {
    return (
        <section className="relative bg-black transition hover:shadow-gray-600 rounded-2xl shadow-xl px-4 py-2">
            <header>
                <h1 className="text-white text-4xl font-bold py-10 pr-8 text-right">{"< PROJECTS />"}</h1>
            </header>
            <section className="flex flex-col gap-y-8 px-6 py-6">
                <Project title="JustFit" description="Activity Tracking." date={DateUtil.getDateFormat()} image={justfitIcon} videoBackground={justfitDemoVideo} tools={["ReactJS", "ExpressJS", "NodeJS", "MongoDB"]} githubLink={"https://github.com/jaturaorn/Activity-tracker-app"} demoLink={"https://just-fit-sdsarun.vercel.app/"} />
                <Project title="Kostkan" description="Postman clone minimal." date={DateUtil.getDateFormat()} image={justfitIcon} videoBackground={kostkanVideo} tools={["ReactJS"]} githubLink={"https://github.com/sdsarun/kostkan"} demoLink={"https://kostkan.vercel.app/"} />
                <Project title="Kotes" description="Minimal notes taking." date={DateUtil.getDateFormat()} image={justfitIcon} videoBackground={kotesVideo} tools={["HTML", "CSS", "JavaScript"]} githubLink={"https://github.com/sdsarun/portfolio/tree/main/kotes"} />
            </section>
        </section>
    )
}
