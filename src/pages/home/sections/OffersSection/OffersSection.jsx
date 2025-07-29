import ImgBlock from "../../../../shared/ui/ImgBlock/ImgBlock";
import checkCircle from "../../../../shared/assets/svg/checkCircle.svg";

const OffersSection = ({offersData, img}) => {

    return (
        <div className="flex flex-row items-stretch w-full gap-[40px]">
            <div className="flex flex-col w-full gap-6 bg-primary-light p-[40px] rounded-2xl">
                {offersData.map((offer, i) => (
                    <div key={i} className="flex flex-row gap-6">
                        <img src={checkCircle} />
                        <p className="text-[28px] whitespace-nowrap">{offer}</p>
                    </div>
                ))}
            </div>
            
            <div className="flex w-full max-w-[300px]">
                <ImgBlock image={img} side='right' />
            </div>

        </div>
    )
}

export default OffersSection