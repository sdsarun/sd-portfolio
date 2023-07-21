import Project from "./project"

import justfitIcon from "../assets/justfit-project.png"
import justfitDemoVideo from "../assets/justfit-demo-video.mp4"
import findmyhatVideo from "../assets/find-my-hat-video.mp4"
import kostkanVideo from "../assets/kostkan-video.mp4"
import xxportfolioVideo from "../assets/xx-portfolio-video.mp4"

export default function ProjectsSection({ image, title, description, date, tools, githubLink, demoLink, activityType, videoBackground }) {
    return (
        <section className="relative bg-black transition hover:shadow-gray-600 rounded-2xl shadow-xl px-4 py-2">
            <header>
                <h1 className="text-white text-4xl font-bold py-10 pr-8 text-right">{"< PROJECTS />"}</h1>
            </header>
            <section className="flex flex-col gap-y-8 px-6 py-6">
                <Project title="JustFit" description="Activity Tracking." date={"28 May 2023"} image={justfitIcon} videoBackground={justfitDemoVideo} tools={["ReactJS", "ExpressJS", "NodeJS", "MongoDB"]} githubLink={"https://github.com/jaturaorn/Activity-tracker-app"} demoLink={"https://just-fit-sdsarun.vercel.app/"} type={"JSD Project"} />
                <Project title="Kostkan" description="Postman clone minimal." date={"25 May 2023"} image={justfitIcon} videoBackground={kostkanVideo} tools={["ReactJS"]} githubLink={"https://github.com/sdsarun/kostkan"} demoLink={"https://kostkan.vercel.app/"} type={"Hobby"} />
                <Project title="Portfolio Website" description="Portfolio template website." date={"4 July 2023"} image={justfitIcon} videoBackground={xxportfolioVideo} tools={["ReactJS", "Tailwind"]} githubLink={"https://github.com/sdsarun/xx-portfolio"} demoLink={"https://xx-portfolio.vercel.app/"} type="Hobby" />
                <Project title="Find my hat" description="Mini cli game." date={"17 April 2023"} image={justfitIcon} videoBackground={findmyhatVideo} tools={["JavaScript"]} githubLink={"https://github.com/sdsarun/portfolio/tree/main/find-your-hat"} demoLink={"https://replit.com/@smeakol/39SarunFindMyHat#index.js"} type="Hobby" />
            </section>
        </section>
    )
}
