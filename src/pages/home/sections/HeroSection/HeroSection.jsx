import Button from "../../../../shared/ui/Button/Button"
// import imgHero from "../../../../shared/assets/img/imgHero.png";
import videoHero from "../../../../shared/assets/video/heroVideo2.mp4";

const HeroSection = () => {
    return (
        <div className="flex w-full relative">

            <div className="flex flex-col pb-[60px] pt-[60px] z-20 bg-transparent">
                <h1 className="text-[48px] whitespace-nowrap uppercase font-bold mb-[10px]">
                    Moderní <span className="color-primary">zubní</span> péče
                </h1>

                <h2 className="text-[48px] font-bold whitespace-nowrap leading-none ">s lidským prístupem</h2>

                <p className="text-[24px] max-w-[480px] my-[40px]">
                    Získejte u nás osobní přístup malého týmu
                    s technologiemi na špičkové úrovni
                </p>

                <div className="flex gap-8">
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

            <div className="flex h-full z-0 absolute right-[-50px] bottom-0">
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