import imgContacts from '../../../../../shared/assets/img/imgContacts.png';

const ContactInfo = ({ className }) => {
    return (
        <div className={`${className} gap-4`}>
            <div className='w-full max-w-[292px] rounded-2xl overflow-hidden'>
                <img src={imgContacts} className='h-full w-full object-cover' />
            </div>

            <div
                className="flex flex-col w-full rounded-2xl border justify-start items-center 
                            px-[32px] py-[48px]"
                style={{ borderColor: 'var(--color-border)' }}
            >

                <div className='flex flex-col w-full mb-[40px]'>
                    <h5 className='font-title text-[24px] uppercase mb-[20px] text-center'>
                        Naš E-MAIL
                    </h5>
                    <p className='text-center text-[18px]'>
                        tlustydok@gmail.com
                    </p>
                </div>

                <div className='flex flex-col w-full mb-[40px]'>
                    <h5 className='font-title text-[24px] uppercase mb-[20px] text-center'>Naš telefon</h5>
                    <p className='text-center text-[18px]'>
                        +420 725 439 518
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo