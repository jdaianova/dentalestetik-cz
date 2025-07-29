import { motion } from "framer-motion"

const text = "V případě akutních bolestí nás prosím kontaktujte telefonicky předem. Termín domluvíme podle aktuální kapacity"

const ShimmerText = () => {
    return (
        <p className={`font-bold text-center text-primary
                        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[32px]
                        pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[24px]
                        pb-[0px] sm:pb-[6px] md:pb-[10px] lg:pb-[12px]
                        `}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + index * 0.03 }}
                >
                    {char}
                </motion.span>
            ))}
        </p>
    )
}

export default ShimmerText
