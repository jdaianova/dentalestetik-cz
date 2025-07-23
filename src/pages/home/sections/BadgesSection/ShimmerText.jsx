import { motion } from "framer-motion"

const text = "V případě akutních bolestí nás prosím kontaktujte telefonicky předem. Termín domluvíme podle aktuální kapacity."

const ShimmerText = () => {
    return (
        <p className="text-[28px] font-bold text-center text-primary pb-[32px] pt-[54px] px-[40px]">
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
