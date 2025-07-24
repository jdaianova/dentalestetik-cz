const PricingBlock = ({ pricesList }) => {
    return (
        <div className="flex flex-col w-full gap-6">
            {pricesList.map((priceItem) => (
                <div
                    key={priceItem.id}
                    className="flex justify-between items-end
                                border-b-2 border-dashed">

                    <div className="flex flex-col gap-2">
                        <p className="text-[20px] leading-snug">{priceItem.title}</p>
                        <p className="color-caption">{priceItem.subTitle}</p>
                    </div>
                    <p className="flex pl-[90px] whitespace-nowrap text-[20px]">{priceItem.price}</p>
                </div>
            ))}
        </div>
    )
}

export default PricingBlock