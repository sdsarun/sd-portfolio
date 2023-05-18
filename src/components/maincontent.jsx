import ProjectsSection from "./projectssection";
import WhoAmISection from "./whoamisection"
import justfitIcon from "../assets/justfit-project.png"

export default function MainContent() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const currentDate = new Date();
    const dateTime = `${currentDate.getDay()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    return (
        <main className="w-8/12 flex flex-col gap-y-4">
            <WhoAmISection />
            <ProjectsSection title="Find My Hat" description="First game that i made during Generation Thailand" date={dateTime} image={justfitIcon} />
        </main>
    );
}