import { motion } from "framer-motion"
import Badge from "../../../../shared/ui/Badge/Badge"
import ShimmerText from "./ShimmerText"

const BadgesSection = () => {
    const bagesTexts = [
        <>
            <span className="hidden md:inline">Přijímáme nové klienty</span>
            <span className="inline md:hidden">Přijímáme <br /> nové klienty </span>
        </>,
        <>
            <span className="hidden md:inline">Volejte nám</span>
            <span className="inline md:hidden">Volejte <br /> nám </span>
        </>,
        <>
            <span className="hidden md:inline">Kontaktní telefon +420 725 439 518</span>
            <span className="inline md:hidden">Kontaktní telefon <br /> +420 725 439 518 </span>
        </>
    ];
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className={`flex justify-center w-full 
                            gap-[4px] sm:gap-[8px] md:gap-[6px] lg:gap-[8px]
                            `}>
                {bagesTexts.map((text, index) => (
                    <div key={text} className="overflow-hidden">
                        <motion.div
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: index * 0.7 }}
                        >
                            <Badge
                                textBadge={text}
                                onClick={() => window.location.href = 'tel:+420725439518'}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>

            <ShimmerText />
        </div>
    )
}

export default BadgesSection
