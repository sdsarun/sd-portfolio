import Tag from "./Tag"

export default function SkillsSection() {
    return (
        <section className="px-4 py-2 bg-white rounded-xl shadow-lg">
            <header>
                <h1 className="text-orange-500 text-2xl font-bold py-3">{"< SKILLS />"}</h1>
            </header>
            <article className="flex flex-col gap-y-6 p-3">
                <section>
                    <header>
                        <h2 className="text-xl font-bold pb-1">Coding Languages</h2>
                    </header>
                    <section className="flex gap-2 flex-wrap">
                        <Tag text={"JavaScript"} />
                        <Tag text={"Java"} />
                    </section>
                </section>
                <section>
                    <header>
                        <h2 className="text-xl font-bold pb-1">Frontend</h2>
                    </header>
                    <section className="flex gap-2 flex-wrap">
                        <Tag text={"ReactJS"} />
                        <Tag text={"HTML"} />
                        <Tag text={"CSS"} />
                        <Tag text={"Tailwind"} />
                    </section>
                </section>
                <section>
                    <header>
                        <h2 className="text-xl font-bold pb-1">Backend</h2>
                    </header>
                    <section className="flex gap-2 flex-wrap">
                        <Tag text={"ExpressJS"} />
                    </section>
                </section>
                <section>
                    <header>
                        <h2 className="text-xl font-bold pb-1">Databases</h2>
                    </header>
                    <section className="flex gap-2 flex-wrap">
                        <Tag text={"MySQL"} />
                        <Tag text={"MongoDB"} />
                    </section>
                </section>
            </article>
        </section>
    )
}