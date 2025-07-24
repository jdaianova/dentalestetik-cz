import { pricingData } from "./lib/pricingData"
import PricingBlock from "./ui/PricingBlock"

const PricingSection = () => {
    return (
        <div className="flex w-full gap-10">
            {pricingData.map((service) => (
                <div
                    key={service.id}
                    className={`flex flex-col w-full bg-primary-light rounded-2xl 
                                p-[40px] pb-[60px]
                                `}>

                    <p className="text-[32px]">{service.titleBlock}</p>

                    <div className="flex w-full h-[2px] bg-primary mt-[20px] mb-[32px]"></div>

                    <PricingBlock pricesList={service.pricesList} />
                </div>
            ))}
        </div>
    )
}

export default PricingSection