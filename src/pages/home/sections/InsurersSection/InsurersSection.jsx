import { insurersData } from "./lib/insurersData"

const InsurersSection = () => {
    return (
        <div className="flex flex-wrap gap-[2%] justify-center">
            {insurersData.map((logo) => (
                <div key={logo.id}
                    className="flex w-full py-[20px] px-[40px] bg-subtle max-w-[32%] rounded-3xl mb-[2%]">
                    <img
                        src={logo.img}
                        className="w-full"
                    />
                </div>
            ))}
        </div>
    )
}

export default InsurersSection