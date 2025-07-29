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
                src="https://www.google.com/maps/embed?pb=!4v1753818435149!6m8!1m7!1s-yNpSISCbCEXp8I9EhD9zQ!2m2!1d49.22082581934399!2d16.58581168017686!3f224.89!4f-11.819999999999993!5f0.7820865974627469!5m2!1scs!2scz"
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
