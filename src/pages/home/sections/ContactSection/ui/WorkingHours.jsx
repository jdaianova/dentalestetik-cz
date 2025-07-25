
const WorkingHours = ({ className }) => {
    const workingHours = [
        { day: "Pondělí", time: "8:00 – 15:00" },
        { day: "Úterý", time: "8:00 – 15:00" },
        { day: "Středa", time: "11:00 – 17:00" },
        { day: "Čtvrtek", time: "8:00 – 15:00" },
        { day: "Pátek", time: "8:00 – 14:00" },
    ];

    return (
        <div
            className={`${className} flex flex-col w-full rounded-2xl border justify-start items-center 
                            px-[32px] py-[48px]`}
            style={{ borderColor: 'var(--color-border)' }}
        >
            <h5 className='font-title text-[24px] uppercase mb-[20px] text-center'>
                Ordinační hodiny
            </h5>

            <div>
                {workingHours.map((item) => (
                    <div
                        key={item.day}
                        className="flex justify-between place-items-end h-[44px] border-b-2 border-dashed"
                    >
                        <p className="text-[20px] font-bold color-primary-dark">
                            {item.day}
                        </p>

                        <p className="text-[20px]">
                            {item.time}
                        </p>

                    </div>
                ))}

                <div className="flex justify-between place-items-end h-[44px]" >
                    <p className="text-[20px] font-bold color-primary-dark">
                        So – Ne
                    </p>
                    <p className="text-[20px] uppercase text-red-500 tracking-widest ">
                        ZAVŘENO
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkingHours
