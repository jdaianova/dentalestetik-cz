import ImgBlock from "../../../../../shared/ui/ImgBlock/ImgBlock";

const ServiceCard = ({ service }) => {
    const { id, title, text, image } = service;

    return (
        <div className={`flex w-[47%] px-[48px] pb-[40px] pt-[60px]  
                        rounded-[20px] border-primary mb-[6%]
                        `}>

            <div className={`flex flex-col w-full relative bg-primary-soft 
                            rounded-xl p-[40px] h-[316px]
                        `}>
                <h3 className="text-[24px] uppercase font-bold mb-[12px]">{title}</h3>

                <p className="absolute font-numbers color-border text-[100px] left-[-20px] top-[-80px]">
                    0{id}
                </p>

                <div className="flex flex-row items-start gap-2">
                    <p className="text-paragraph w-[50%]">{text}</p>

                    <div className="absolute min-w-[220px] right-[-20px] bottom-[-20px]">
                        <ImgBlock image={image} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ServiceCard