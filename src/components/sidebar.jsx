import Article from "./article";
import Section from "./section"
import SkillsSection from "./skillssection";

import linkedinIcon from "../assets/linkedin.png"
import githubIcon from "../assets/github.png"
import resumeIcon from "../assets/resume.png"
import mailIcon from "../assets/mail.png"
import laptopIcon from "../assets/laptop.png"
import locationIcon from "../assets/location2.png"
import downloadIcon from "../assets/download.png"

export default function Sidebar() {
    return (
        <aside className="w-4/12 h-full flex flex-col gap-y-6 sticky top-6">
            <Section header="< CAREER PROFILE />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg" headerStyle="text-orange-500 text-2xl font-bold py-3">
                <Article iconLeft={linkedinIcon} header="Sarun Daunghirun" type="LinkedIn" leftHref={"#"} />
                <Article iconLeft={githubIcon} header="sdsarun" type="Github" leftHref={"#"} />
            </Section>
            <Section header="< DOCUMENT />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg" headerStyle="text-orange-500 text-2xl font-bold py-3">
                <Article iconLeft={resumeIcon} iconRight={downloadIcon} header="Resume" type="PDF" leftHref={"#"} rightHref={"#"} />
            </Section>
            <Section header="< INFORMATION />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg" headerStyle="text-orange-500 text-2xl font-bold py-3">
                <Article iconLeft={mailIcon} header="sdsarun@outlook.com" type="E-Mail Address" leftHref={"#"} />
                <Article iconLeft={laptopIcon} header="Mixed" type="Work Type" leftHref={"#"} />
                <Article iconLeft={locationIcon} header="Saraburi, Thailand" type="Location" leftHref={"#"} />
            </Section>
            <SkillsSection />
        </aside>
    );
}