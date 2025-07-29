import SectionWrapper from "../../shared/ui/SectionWrapper/SectionWrapper"
import { homepageSections } from "./lib/sections"

const Homepage = () => {
    return (
        <main className={`flex flex-col justify-center w-full
                        max-w-[375px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px]                   
                        px-[10px] sm:px-[40px] md:px-[50px] lg:px-[60px]
                        `}>
            {homepageSections.map(({ id, title, content, withBorder }) => (
                <SectionWrapper key={id} id={id} title={title} withBorder={withBorder}>
                    {content()}
                </SectionWrapper>
            ))}
        </main>
    )
}

export default Homepage