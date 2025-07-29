const Button = ({
    type = 'primary', // secondary
    textBtn = 'btn',
    onClick,
    className,
}) => {
    const btnStyle = {
        primary: 'bg-primary text-white ',
        secondary: 'bg-[rgba(255,255,255,0.5)] border-primary color-primary-dark',
    };

    const btnStyleHover = {
        primary: 'hover:bg-primary-dark',
        secondary: 'hover:bg-primary-soft hover:border-white',
    };

    return (
        <button
            onClick={onClick}
            className={`${className} ${btnStyle[type]} whitespace-nowrap
                        ${btnStyleHover[type]}
                        text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]
                        px-[20px] sm:px-[40px] md:px-[40px] lg:px-[40px]
                        py-[10px] sm:py-[16px] md:py-[16px] lg:py-[16px]
                        rounded-xl lg:rounded-2xl
                        `}>
            {textBtn}
        </button>
    )
}

export default Button