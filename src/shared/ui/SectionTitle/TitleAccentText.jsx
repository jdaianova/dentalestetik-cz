const TitleAccentText = ({ title }) => {
    const { allPhrase, accentWord } = title.text;

    if (!accentWord) return null;

    const regex = new RegExp(`(${accentWord})`, 'i');
    const parts = allPhrase.split(regex);

    return (
        <h2 className={`whitespace-nowrap font-bold uppercase leading-none
                        text-[32px] sm:text-[32px] md:text-[44px] lg:text-[56px]
                    `}>
            {parts.map((part, index) =>
                part.toLowerCase() === accentWord.toLowerCase() ? (
                    <span key={index} className="color-primary">
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </h2>
    );
};

export default TitleAccentText;


    //   fontSize: 'var(--font-size-section-title)',
    //   fontWeight: '700',
    //   lineHeight: '1',
    //   textTransform: 'uppercase',
