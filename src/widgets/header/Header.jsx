import NavMenu from "../../entities/header/ui/NavMenu"
import Logo from "../../shared/ui/Logo/Logo"

const Header = () => {
    return (
        <div className={`flex justify-center w-screen with-header-border 
                        fixed top-0 left-0 z-50 bg-white               
                        shadow-[0px_8.24688px_24.7406px_rgba(34,48,114,0.07)]
                        `}>
            <div className={`flex w-full justify-between items-end
                            h-[60px] sm:h-[70px] lg:h-[80px]
                            max-w-[420px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] 
                            pl-[20px] sm:pl-[40px] md:pl-[50px] lg:pl-[60px]
                            `}>
                <div className={`z-50 mb-[-23px] sm:mb-[-24px] md:mb-[-23px]
                                w-[500px] md:w-[300px] lg:w-[300px]
                                `}>
                    <Logo />
                </div>

                <NavMenu />
            </div>
        </div>
    )
}

export default Header