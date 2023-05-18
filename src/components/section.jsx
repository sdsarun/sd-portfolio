export default function Section({children, header, sectionStyle, headerStyle}) {
    return (
        <section className={sectionStyle}>
            <header className={headerStyle}>
                {header}
            </header>
            {children}
        </section>
    )
}