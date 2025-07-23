import TitleAccentText from "./TitleAccentText"

const SectionTitle = ({ title }) => {
    const isLeft = title.side === 'left';

    const captionStyle = `color-caption flex w-full color-caption 
                        ${isLeft ? 'text-left pl-[40px]' : 'text-right pr-[40px]'}
                        `;

    return (
        <div className="flex w-full justify-between items-end">
            {isLeft && <TitleAccentText title={title} />}

            <div className={`flex w-full with-bottom-border`}>
                <p className={captionStyle}>
                    {title.caption}
                </p>
            </div>

            {!isLeft && <TitleAccentText title={title} />}
        </div>
    )
}

export default SectionTitle