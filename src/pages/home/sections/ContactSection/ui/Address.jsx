import imgAddress from '../../../../../shared/assets/img/imgAddress.png';

const Address = ({ className }) => {
    return (
        <div className={`${className} gap-4`}>
            <div className='w-full max-w-[292px] rounded-2xl overflow-hidden'>
                <img src={imgAddress} />
            </div>

            <div className='flex flex-col w-full rounded-2xl border-2 border-gray-300 
                            justify-center items-center p-[32px]'>
                <h5 className='uppercase'>Naše adresa</h5>

                <div>
                    <h6 className='uppercase'>Zubní ordinace - Anastasiia Neuimina</h6>
                    <p>Purkyňova 35d, 612 00 Brno - Královo Pole</p>
                </div>
            </div>
        </div>
    )
}

export default Address