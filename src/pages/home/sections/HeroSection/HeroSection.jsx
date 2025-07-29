import Button from "../../../../shared/ui/Button/Button"
// import imgHero from "../../../../shared/assets/img/imgHero.png";
import videoHero from "../../../../shared/assets/video/heroVideo2.mp4";

const HeroSection = () => {
    return (
        <div className="flex w-full relative">

            <div className={`flex flex-col z-20 bg-transparent
                            pt-[30px] sm:pt-[40px] lg:pt-[60px]
                            pb-[32px] sm:pb-[40px] md:pb-[40px] lg:pb-[60px] 
                            
                            `}>
                <h1 className={`whitespace-nowrap uppercase font-bold
                                mb-[0px] sm:mb-[4px] md:mb-[4px] lg:mb-[10px]
                                text-[28px] sm:text-[40px] md:text-[42px] lg:text-[48px]
                                `}>
                    Moderní <span className="color-primary">zubní</span> péče
                </h1>

                <h2 className={`font-bold whitespace-nowrap leading-non
                                text-[28px] sm:text-[40px] md:text-[42px] lg:text-[48px]
                                `}>
                    s lidským prístupem
                </h2>

                <p className={` max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[480px] 
                                mt-[16px] lg:mt-[40px]
                                mb-[24px] lg:mb-[40px]
                                text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                                `}>
                    Získejte u nás osobní přístup malého týmu
                    s technologiemi na špičkové úrovni
                </p>

                <div className="flex gap-4 sm:gap-6 lg:gap-8">
                    <a href="#contacts">
                        <Button type="primary" textBtn="Zobrazit kontakty" />
                    </a>

                    <a href="#pricing">
                        <Button type="secondary" textBtn="Zjistit naše ceny" />
                    </a>
                </div>
            </div>

            {/* <div className="flex h-[100%] z-10 absolute right-[-50px] bottom-0">
                <img className="h-[100%] w-auto" src={imgHero} />
            </div> */}

            <div className={`flex z-0 absolute bottom-0 h-full 
                            max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px]
                            right-[-100px] sm:right-[-90px] md:right-[-80px] lg:right-[-80px]
                            `}>
                <video
                    className="h-full w-auto"
                    src={videoHero}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

            <div className="absolute bottom-0 left-1/2 w-screen h-[8px] bg-primary-soft z-10 -translate-x-1/2"></div>

        </div>
    )
}

export default HeroSection