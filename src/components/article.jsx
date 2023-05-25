export default function Article({ iconLeft, header, type, iconRight, rightHref, leftHref, target }) {
    return (
        <article className="flex w-full p-3">
            <section className="flex justfiy-between items-center gap-x-4 w-full">
                <figure>
                    <a className="cursor-pointer" href={leftHref} target={target} rel="noopener noreferrer"><img className="block w-10" src={iconLeft}  /></a>
                </figure>
                <section className="flex flex-col justify-center">
                    <h2 className="text-xl font-semibold"> <a href={rightHref} target={target} rel="noopener noreferrer">{header}</a></h2> 
                    <p className="text-gray-600">{type}</p>
                </section>
            </section>
            <figure className="hover:animate-bounce transition-all hover:transition-all">
                <a href={leftHref} target={target} ><img className="block w-10" src={iconRight} /></a>
            </figure>
        </article>
    )
}