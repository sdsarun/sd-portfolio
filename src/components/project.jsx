import Tag from "./tag";

import internetIcon from "../assets/internet-light.png"
import githubIcon from "../assets/github-light.png"

export default function Project({ title, description, date, videoBackground, tools, demoLink, githubLink, type }) {
    return (
        <article className="relative flex items-center gap-x-4 w-full bg-white rounded-lg px-8 py-8 shadow-lg">
            <div className="absolute bg-black z-10 opacity-70 top-0 bottom-0 left-0 right-0 rounded-lg"></div>
            <video className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover rounded-lg" loop muted autoPlay>
                <source src={videoBackground} />
            </video>
            <section className="z-20 flex flex-col gap-y-10 w-full text-white">
                <section className="flex flex-col gap-y-4">
                    <header className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <Tag text={type} />
                    </header>
                    <div className="flex justify-between items-center">
                        <p>{description}</p>
                        <p>{date}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tools ? tools.map(tool => <Tag key={crypto.randomUUID()} text={tool} />) : null}
                    </div>
                </section>
                <section className="flex gap-x-4 font-extrabold">
                    <a className="bg-black text-white rounded-md px-2 py-1 cursor-pointer tracking-widest hover:bg-white hover:text-black hover:transition-all hover:duration-150" href={demoLink} target="_blank">
                        <img className="inline-block w-10 p-1" src={internetIcon} />DEMO
                    </a>
                    <a className="bg-black text-white rounded-md px-2 py-1 cursor-pointer tracking-widest hover:bg-white hover:text-black hover:transition-all hover:duration-150" href={githubLink} target="_blank">
                        <img className="inline-block w-10" src={githubIcon} />REPO
                    </a>
                </section>
            </section>
        </article>
    )
}