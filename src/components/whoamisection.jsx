export default function WhoAmISection() {
    return (
        <section className="relative bg-white rounded-xl shadow-lg px-4 py-2 transition-all hover:shadow-orange-200">
            <figure className="block absolute -top-10 left-20 w-36 h-36 overflow-hidden shadow-2xl transition-all border-4 border-orange-400 rounded-lg  hover:scale-150 hover:transition-all">
                <img className="block " src="https://images.unsplash.com/photo-1635197996027-177a3f4103c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" />
            </figure>
            <header>
                <h1 className="text-orange-500 text-4xl font-bold py-10 pr-8 text-right">{"< WHO AM I />"}</h1>
            </header>
            <article className="px-8 py-8 flex flex-col gap-y-10">
                <p>...</p>
            </article>
        </section>
    );
}