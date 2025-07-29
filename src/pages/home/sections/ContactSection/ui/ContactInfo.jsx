import imgContacts from '../../../../../shared/assets/img/imgContacts.png';

const ContactInfo = ({ className }) => {
    return (
        <div className={`${className} gap-4 max-h-[280px]`}>
            <div className='w-full rounded-2xl overflow-hidden'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.6074216448964!2d16.59162461591137!3d49.22864297932661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129474cb06b8c9%3A0x4b75a32f13f6b6c!2sPurky%C5%88ova%2035d%2C%20612%2000%20Brno!5e0!3m2!1scs!2scz!4v1697729937455!5m2!1scs!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
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