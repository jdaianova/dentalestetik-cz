const TitleAccentText = ({ title }) => {
    const { allPhrase, accentWord } = title.text;

    if (!accentWord) return null;

    const regex = new RegExp(`(${accentWord})`, 'i');
    const parts = allPhrase.split(regex);

    return (
        <h2 className="font-section-title whitespace-nowrap">
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