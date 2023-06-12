import ProjectsSection from "./projectssection";
import WhoAmISection from "./whoamisection"

export default function MainContent() {
    return (
        <main className="w-8/12 flex flex-col gap-y-4 max-md:w-full">
            <WhoAmISection />
            <ProjectsSection/>
        </main>
    );
}