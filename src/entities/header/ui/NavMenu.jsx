import { homepageSections } from "../../../pages/home/lib/sections";
import { useEffect, useState } from 'react';
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const NavMenu = () => {
    const navItems = homepageSections
        .filter(section => section.label)
        .map(section => ({ id: section.id, label: section.label }));

    const [activeId, setActiveId] = useState(navItems[0].id || '');

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { setActiveId(entry.target.id) };
            });
        }, { rootMargin: '-30% 0px -70% 0px', threshold: 0, });

        const sectionElements = navItems
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        sectionElements.forEach(el => observer.observe(el));
    }, []);

    return (
        <div className={`flex w-full justify-end items-end h-full`}>
            <nav className={`hidden md:flex w-full 
                            md:max-w-[90%] lg:max-w-[70%] md:pr-[50px]
                            `}>
                {navItems.map(({ id, label }) => (
                    <NavLink key={id} id={id} label={label} activeId={activeId} />
                ))}
            </nav>

            <div className="md:hidden pr-[20px] sm:pr-[40px] md:pr-[50px]">
                <MobileMenu
                    navItems={navItems}
                    activeId={activeId}
                    isOpen={isOpen}
                    toggle={toggle}
                />
            </div>
        </div>
    );
};

export default NavMenu;