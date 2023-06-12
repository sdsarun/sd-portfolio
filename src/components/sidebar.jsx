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
import sendmailIcon from "../assets/sendmail3.png"

export default function Sidebar() {
    return (
        <aside className="w-4/12 h-full flex flex-col gap-y-6 sticky top-6 max-md:w-full max-md:static">
            <Section header="< CAREER PROFILE />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-orange-200" headerStyle="text-orange-500 text-xl font-bold py-3">
                <Article iconLeft={linkedinIcon} header="Sarun Daunghirun" type="LinkedIn" leftHref={"https://www.linkedin.com/in/sarun-daunghirun-166234266/"} target={"_blank"} />
                <Article iconLeft={githubIcon} header="sdsarun" type="Github" leftHref={"https://github.com/sdsarun"} target={"_blank"} />
            </Section>
            <Section header="< DOCUMENT />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-orange-200" headerStyle="text-orange-500 text-xl font-bold py-3">
                <Article iconLeft={resumeIcon} iconRight={downloadIcon} header="Resume" type="PDF" target={"_blank"} leftHref={"https://drive.google.com/file/d/1IFkEs4cxppIz66kAcMdQuIp0PH5Q0z5u/view?usp=sharing"} rightHref={"https://drive.google.com/file/d/1IFkEs4cxppIz66kAcMdQuIp0PH5Q0z5u/view?usp=sharing"} />
            </Section>
            <Section header="< INFORMATION />" sectionStyle="px-4 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-orange-200" headerStyle="text-orange-500 text-xl font-bold py-3">
                <Article iconLeft={mailIcon} iconRight={sendmailIcon} header="sdsarun@outlook.com" type="E-Mail Address" leftHref={"mailto:sdsarun@outlookk.com"} target={"_blank"} />
                <Article iconLeft={laptopIcon} header="Hybrid" type="Work Type" leftHref={"#"}  />
                <Article iconLeft={locationIcon} header="Saraburi, Thailand" type="Location" leftHref={"#"} />
            </Section>
            <SkillsSection />
        </aside>
    );
}