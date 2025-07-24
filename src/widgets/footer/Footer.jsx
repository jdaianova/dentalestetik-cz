const Footer = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center bg-primary text-white p-[32px]">

            <p>© {new Date().getFullYear()} Dental Estetik</p>
            <p className="text-[12px]">Design and development by Julia Daianova</p>

        </div>
    )
}

export default Footer