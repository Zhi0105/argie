/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTemplate } from "@_src/Template/SectionTemplate"
import { About } from "../About"
import { Skills } from "../Skills"
import { Contact } from "../Contact"
import { Project } from "../Project"

export const Interface = (props: any) => {
    const { setSection } = props
    return (
        <div className="flex flex-col items-center w-screen">
            <SectionTemplate mobileTop>
                <About setSection={setSection} />
            </SectionTemplate>
            <SectionTemplate>
                <Skills />
            </SectionTemplate>
            <SectionTemplate>
                <Project />
            </SectionTemplate>
            <SectionTemplate>
                <Contact />
            </SectionTemplate>
        </div>   
    )
}
