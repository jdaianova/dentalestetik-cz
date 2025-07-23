import SectionWrapper from "../../shared/ui/SectionWrapper/SectionWrapper"
import { homepageSections } from "./lib/sections"

const Homepage = () => {
    return (
        <main className="main">
            {homepageSections.map(({ id, title, content, withBorder }) => (
                <SectionWrapper key={id} id={id} title={title} withBorder={withBorder}>
                    {content()}
                </SectionWrapper>
            ))}
        </main>
    )
}

export default Homepage