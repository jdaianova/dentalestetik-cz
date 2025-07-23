import { homepageSections } from "../../../pages/home/lib/sections";
import { useEffect, useState } from 'react';

const NavMenu = () => {
    const navItems = homepageSections
        .filter(section => section.label)
        .map(section => ({ id: section.id, label: section.label }));

    const [activeId, setActiveId] = useState(navItems[0].id || '');

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
        <nav className="flex w-[60%]">
            {navItems.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`flex w-full justify-center py-[10px] transition-colors text-[20px]
                                hover:color-text-dark rounded-t-2xl
                                ${id === activeId ? 'bg-primary-light' : 'color-primary-dark'}
                                `}>
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default NavMenu;