import { servicesData } from "../lib/servicesData"
import ServiceCard from "./ServiceCard"

const ServicesSection = () => {
    return (
        <div className="flex items-stretch w-full flex-wrap gap-[6%]">
            {servicesData.map((service, i) => (
                <ServiceCard key={i} service={service} />
            ))}
        </div>
    )
}

export default ServicesSection