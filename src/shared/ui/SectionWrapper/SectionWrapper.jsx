import SectionTitle from "../SectionTitle/SectionTitle"

const SectionWrapper = ({ id, title, children, withBorder }) => {
    const sectionsWithoutPaddings = ['badges', 'home', 'info'];

    const sectionStyle = `section relative
                        ${sectionsWithoutPaddings.includes(id) ? '' : 'section-paddings'}
                        `;

    return (
        <section id={id} className={`scroll-mt-20 ${sectionStyle}`}>
            {title.text.allPhrase && <SectionTitle title={title} />}
            {children}
            {withBorder && <div className={`absolute bottom-0 left-1/2 w-screen h-[2px] 
                                            bg-primary-soft z-0 -translate-x-1/2`}>
            </div>}

        </section>
    );
};

export default SectionWrapper