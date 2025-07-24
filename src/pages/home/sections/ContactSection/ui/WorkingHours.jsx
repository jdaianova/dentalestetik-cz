
const WorkingHours = ({ className }) => {
    const workingHours = [
        { day: "Pondělí", time: "8:00 – 15:00" },
        { day: "Úterý", time: "8:00 – 15:00" },
        { day: "Středa", time: "11:00 – 17:00" },
        { day: "Čtvrtek", time: "8:00 – 15:00" },
        { day: "Pátek", time: "8:00 – 14:00" },
        { day: "So – Ne", time: "ZAVŘENO" },
    ];

    return (
        <div className={`${className} flex flex-col w-full rounded-2xl border justify-start items-center 
                            px-[32px] py-[48px]`}>
            <h5 className='font-title text-[24px] uppercase mb-[20px] text-center'>
                Ordinační hodiny
            </h5>

            <div>
                {workingHours.map((item) => (
                    <div
                        key={item.day}
                        className=""
                    >
                        <p>{item.day}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkingHours
