import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavLink from './NavLink';
import burgerMenu from '../../../shared/assets/svg/burgerMenu4.svg';
import closeMenu from '../../../shared/assets/svg/closeMenu.svg';

const MobileMenu = ({ navItems, activeId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <div className="md:hidden z-10">
            <button
                onClick={toggle}
                className={`relative w-[28px] h-[28px]`}>
                <img
                    src={burgerMenu}
                    alt="menu"
                    className={`absolute left-0 h-full w-full 
                        bottom-[4px] sm:bottom-[5px]
                        transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                />
                <img
                    src={closeMenu}
                    alt="close"
                    className={`absolute left-0 h-full w-full 
                        bottom-[4px] sm:bottom-[5px]
                        transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </button>


            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ transformOrigin: 'top' }}
                        className={`fixed left-0 w-full z-40 bg-white 
                                    shadow-md rounded-b-2xl overflow-hidden
                                    top-[60px] sm:top-[70px]
                                    `}
                    >
                        <div className="flex flex-col items-start py-[32px] mobile-menu-border">
                            {navItems.map(({ id, label }) => (
                                <NavLink
                                    key={id}
                                    id={id}
                                    label={label}
                                    activeId={activeId}
                                    onClick={toggle}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
