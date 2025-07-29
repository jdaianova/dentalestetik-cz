import NavLink from './NavLink';

const DesktopMenu = ({ navItems, activeId }) => {
    return (
        <nav className="hidden md:flex w-[60%]">
            {navItems.map(({ id, label }) => (
                <div key={id} className="flex w-full justify-center">
                    <NavLink
                        id={id}
                        label={label}
                        activeId={activeId}
                    />
                </div>
            ))}
        </nav>
    );
};

export default DesktopMenu;
