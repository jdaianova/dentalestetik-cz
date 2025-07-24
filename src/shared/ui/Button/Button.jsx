const Button = ({
    type = 'primary', // secondary
    textBtn = 'btn',
    onClick,
    className,
}) => {
    const btnStyle = {
        primary: 'bg-primary text-white ',
        secondary: 'bg-white border-primary color-primary-dark',
    };

    const btnStyleHover = {
        primary: 'hover:bg-primary-dark',
        secondary: 'hover:bg-primary-soft hover:border-white',
    };

    return (
        <button
            onClick={onClick}
            className={`${className} ${btnStyle[type]} btn-padding rounded-2xl whitespace-nowrap
                        ${btnStyleHover[type]} text-[18px]
                        `}>
            {textBtn}
        </button>
    )
}

export default Button