
const ModalInfoCard = ({ service }) => {
    const { id, title, text, image } = service;

    return (
        <div className={`flex relative w-full rounded-[20px] border-primary
                        px-[20px] py-[20px]
                        `}>

            <div className={`flex flex-col w-full relative bg-primary-soft 
                            rounded-xl p-[32px]
                        `}>
                <h3 className="text-[18px] uppercase font-bold mb-[12px]">{title}</h3>

                <p className="text-[20px] leading-snug">{text}</p>

                <img
                    src={image}
                    alt=""
                    className="flex absolute right-[-15px] top-[-10px] h-[80px] z-10"
                />

            </div>

        </div>
    )
}

export default ModalInfoCard