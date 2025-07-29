import TitleAccentText from "./TitleAccentText"

const SectionTitle = ({ title }) => {
    const isLeft = title.side === 'left';

    const captionStyle = `color-caption text-[18px] text-${title.side}`;

    return (
        <div className={`flex flex-col gap-[20px]`}>
            <div className="flex w-full justify-between items-end">
                {isLeft && <TitleAccentText title={title} />}

                <div className={`flex w-full with-bottom-border`}>
                    {/* <p className={`${captionStyle} 
                               hidden lg:flex
                                `}>
                    {title.caption}
                </p> */}
                </div>

                {!isLeft && <TitleAccentText title={title} />}
            </div>

            <p className={`${captionStyle}`}>{title.caption}</p>

        </div>
    )
}

export default SectionTitle