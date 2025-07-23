import { motion } from "framer-motion"
import Badge from "../../../../shared/ui/Badge/Badge"
import ShimmerText from "./ShimmerText"

const BadgesSection = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className="flex justify-center w-full gap-[8px]">
                {[
                    'Přijímáme nové klienty',
                    'Volejte nám',
                    'Kontaktní telefon +420 725 439 518',
                ].map((text, index) => (
                    <div key={text} className="overflow-hidden">
                        <motion.div
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: index * 0.7 }}
                        >
                            <Badge textBadge={text} />
                        </motion.div>
                    </div>
                ))}
            </div>

            <ShimmerText />
        </div>
    )
}

export default BadgesSection
