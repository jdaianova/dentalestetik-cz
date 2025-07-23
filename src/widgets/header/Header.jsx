import NavMenu from "../../entities/header/ui/NavMenu"
import Logo from "../../shared/ui/Logo/Logo"

const Header = () => {
    return (
        <div className={`flex justify-center w-full with-header-border fixed top-0 left-0 z-50
                         bg-white
                         [filter:drop-shadow(0px_8.24688px_24.7406px_rgba(34,48,114,0.07))]
                        `}>
            <div className={`flex w-full h-[80px] flex-row justify-between px-[60px] items-end
                             max-w-[1200px]
                            `}>
                <div className="mb-[-23px]">
                    <Logo />
                </div>

                <NavMenu />
            </div>
        </div>
    )
}

export default Header