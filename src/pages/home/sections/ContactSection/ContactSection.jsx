import { contactsData } from "./lib/contactsData"

const ContactSection = () => {
    return (
        <div className="flex w-full gap-[8px] flex-wrap justify-between items-stretch">
            {contactsData.map(({ id, component: Component }) => (
                <Component
                    key={id}
                    className='flex w-full max-w-[49.2%] mb-[8px] items-stretch' />
            ))}
        </div>
    )
}

export default ContactSection