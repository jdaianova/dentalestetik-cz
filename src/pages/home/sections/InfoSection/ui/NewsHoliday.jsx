import imgHoliday from '../../../../../shared/assets/img/imgZavreno.png';

const NewsHoliday = () => {
    return (
        <div className="flex pb-[60px]">
            <div className={`flex w-full justify-center flex-col bg-primary-light h-[220px] p-[40px]
                            rounded-xl
                            `}>

                <div className='flex flex-col'>
                    <h4 className="text-[28px] font-bold uppercase z-20">
                        Ordinace bude uzavřena
                    </h4>

                    <p className="text-[24px] font-bold text-rose-400 mb-[6px]">
                        od 18. do 31. srpna 2025 <br /> máme dovolenou
                    </p>

                    <p className="text-[20px]">
                        Znovu otevřeno v pondělí 2. září
                    </p>
                </div>

                <img
                    src={imgHoliday}
                    alt=""
                    className="flex absolute right-[-12px] bottom-[76px] w-[140px] z-10"
                />

            </div>
        </div>
    )
}

export default NewsHoliday