import SectionTitle from "../SectionTitle/SectionTitle"

const SectionWrapper = ({ id, title, children, withBorder }) => {
    const sectionsWithoutPaddings = ['info', 'home', 'badges'];

    const styleSection = `scroll-mt-20 flex flex-col w-full relative
            ${sectionsWithoutPaddings.includes(id)
            ? ''
            : `py-[80px] sm:py-[80px] md:py-[80px] lg:py-[80px]
                gap-[60px]  sm:gap-[60px]  md:gap-[60px] lg:gap-[60px]
            `}
                        `;

    return (
        <section
            id={id}
            className={styleSection}>
            {title.text.allPhrase && <SectionTitle title={title} />}
            {children}
            {withBorder && <div className={`absolute bottom-0 left-1/2 w-screen h-[2px] 
                                            bg-primary-soft z-0 -translate-x-1/2`}>
            </div>}

        </section>
    );
};

export default SectionWrapper