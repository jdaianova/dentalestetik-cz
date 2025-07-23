const Badge = ({ textBadge }) => {

    return (
        <button className={`flex justify-center w-full px-[32px] py-[8px] bg-primary-dark 
                            whitespace-nowrap text-[28px] text-white rounded-b-2xl
                            `} >
            {textBadge}
        </button>
    )
}

export default Badge