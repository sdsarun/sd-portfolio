import Tag from "./tag"
import internetIcon from "../assets/internet-light.png"
import githubIcon from "../assets/github-light.png"

export default function ProjectsSection({ image, title, description, date, tools, githubLink, demoLink, activityType }) {
    return (
        <section className="relative bg-orange-50 rounded-xl shadow-lg px-4 py-2">
            <header>
                <h1 className="text-orange-500 text-4xl font-bold py-10 pr-8 text-right">{"< PROJECTS />"}</h1>
            </header>

            <section className="flex px-8 py-8 bg-white rounded-md">
                <article className="flex items-center gap-x-4 w-full">
                    <section className="flex flex-col gap-y-10 w-full">
                        <section className="flex flex-col gap-y-4">
                            <header className="flex justify-between items-center">
                                <h1 className="text-xl font-bold">{title}</h1>
                                <Tag text={"Hobby"} />
                            </header>
                            <div className="flex justify-between items-center">
                                <p>{description}</p>
                                <p>{date}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Tag text="JavaScript" />
                                <Tag text="C++" />
                                <Tag text="NodeJS" />
                                <Tag text="ExpressJS" />
                                <Tag text="MongoDB" />
                            </div>
                        </section>
                        <section className="flex gap-x-4 font-extrabold">
                            <a className="bg-black text-white rounded-md px-2 py-1 cursor-pointer tracking-widest hover:bg-white hover:text-black hover:transition-all hover:duration-150" href={demoLink}>
                                <img className="inline-block w-10 p-1" src={internetIcon} />DEMO
                            </a>
                            <a className="bg-black text-white rounded-md px-2 py-1 cursor-pointer tracking-widest hover:bg-white hover:text-black hover:transition-all hover:duration-150" href={githubLink}>
                                <img className="inline-block w-10" src={githubIcon} />REPO
                            </a>
                        </section>
                    </section>
                </article>
            </section>

        </section>
    )
}