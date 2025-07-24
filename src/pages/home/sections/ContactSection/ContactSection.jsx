import { contactsData } from "./lib/contactsData"

const ContactSection = () => {
    return (
        <div className="flex w-full gap-[1%] flex-wrap justify-between items-stretch">
            {contactsData.map(({ id, component: Component }) => (
                <Component
                    key={id}
                    className='flex w-full max-w-[49%] mb-[1%] items-stretch' />
            ))}
        </div>
    )
}

export default ContactSection