const Badge = ({ textBadge, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col justify-center w-full py-[8px] bg-primary-dark 
                        text-white rounded-b-2xl
                        md:whitespace-nowrap
                        text-[16px] sm:text-[20px] md:text-[17px] lg:text-[28px]
                        leading-snug sm:leading-tight md:leading-normal lg:leading-normal
                        px-[13px] sm:px-[35px] md:px-[20px] lg:px-[32px]
                        `}
        >
            {textBadge}
        </button>
    );
};

export default Badge;
