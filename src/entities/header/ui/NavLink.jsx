const NavLink = ({ id, label, activeId, onClick }) => {
    return (
        <a
            href={`#${id}`}
            onClick={onClick}
            className={`flex w-full pt-[6px] pb-[2px] transition-colors
                        justify-center
                        hover:color-text-dark rounded-t-2xl
                        text-[20px] sm:text-[18px] md:text-[18px] lg:text-[20px]
                        ${id === activeId ? 'bg-primary-light' : 'color-primary-dark'}
                        `}>
            {label}
        </a>
    );
};

export default NavLink;
