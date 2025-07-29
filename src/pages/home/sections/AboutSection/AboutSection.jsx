import ImgBlock from "../../../../shared/ui/ImgBlock/ImgBlock";
import imgAbout from "../../../../shared/assets/img/imgAbout.jpg";

const AboutSection = () => {
    const textAbout = `Naším cílem je, abyste se u nás cítili v bezpečí, srozumitelně informovaní 
    a bez zbytečného stresu. Každý pacient je pro nás jedinečný, a proto přistupujeme k léčbě 
    individuálně, s důrazem na dlouhodobé výsledky a komfort během ošetření.
    Poskytujeme komplexní stomatologickou péči pro děti i dospělé — 
    s výjimkou dentální hygieny a implantologie.`;

    return (
        <div className="flex w-full flex-row gap-14 items-stretch">
            <ImgBlock image={imgAbout} />
            <div className="flex w-full bg-primary-light rounded-2xl max-w-[730px] p-[40px]">
                <p className="text-[20px] leading-loose">{textAbout}</p>
            </div>
        </div>
    )
}

export default AboutSection