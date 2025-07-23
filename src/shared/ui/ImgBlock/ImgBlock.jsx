const ImgBlock = ({ image, side = 'left' }) => {
    const coordBlock = side === 'right' ? 'top-0 right-0' : 'bottom-0 left-0';
    const coordPhoto = side === 'right' ? 'justify-start items-end' : 'justify-end';

    return (
        <div className={`relative flex ${coordPhoto} w-full aspect-square`}>
            <div className={`bg-subtle w-[95%] h-[95%] rounded-2xl z-10 overflow-hidden 
                        bg-no-repeat bg-cover bg-center
                        [filter:drop-shadow(0px_8.24688px_24.7406px_rgba(34,48,114,0.07))]
                        `}
                style={{ backgroundImage: `url(${image})` }} />

            <div className={`bg-primary w-[20%] h-[90%] 
                            absolute bottom-0 ${coordBlock} rounded-xl 
                            `} />

        </div>
    )
}

export default ImgBlock