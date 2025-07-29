import imgAddress from '../../../../../shared/assets/img/imgAddress.png';

const Address = ({ className }) => {
    return (
        <div className={`${className} gap-4 max-h-[280px]`}>
            <div className='w-full max-w-[292px] rounded-2xl overflow-hidden'>
                <img src={imgAddress} className='h-full w-full object-cover' />
            </div>

         <div
                className="flex flex-col w-full rounded-2xl border justify-start items-center px-[32px] py-[48px]"
                style={{ borderColor: 'var(--color-border)' }}
            >
                <h5 className='font-title text-[24px] uppercase mb-[20px] text-center'>Naše adresa</h5>

                <div>
                    <h6 className='text-center text-[18px] uppercase mb-[20px] color-primary-dark font-bold'>
                        Zubní ordinace - Anastasiia Neuimina
                    </h6>

                    <p className='text-center text-[18px]'>
                        Purkyňova 35d,
                        612 00 <br />
                        Brno – Královo Pole
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Address