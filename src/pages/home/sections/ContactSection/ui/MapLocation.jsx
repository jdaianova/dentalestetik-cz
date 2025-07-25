import Button from "../../../../../shared/ui/Button/Button";

const MapLocation = ({ className }) => {
    return (
        <div className={`${className} flex-col gap-2`}>

            <a
                href="https://www.google.com/maps/place/Purkyňova+35d,+612+00+Brno"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className='w-full' textBtn='  Otevřít v Google Maps' />

            </a>

            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1753376514430!6m8!1m7!1swBvhKSvjV9-vPkFOXfsUNg!2m2!1d49.22099229371065!2d16.58570901944036!3f288.1310200136147!4f10.543438187295223!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

        </div>
    );
};

export default MapLocation;
