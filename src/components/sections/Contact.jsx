import Clock from "../icons/Clock";
import LocationPin from "../icons/LocationPin";
import Phone from "../icons/Phone";

function Contact() {
  return (
    <div className="w-full mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-20 flex flex-col items-center sm:flex-row sm:justify-center gap-y-10 sm:gap-x-8 md:gap-x-16 pb-12 md:pb-24 text-center">
      <div className="flex flex-col items-center gap-y-2">
        <Clock className="text-primary-accent-100" width={2} />
        <p className="text-primary-base-200">Everyday, 10am - 10pm</p>
        <p className="text-primary-base-75 text-sm">working time</p>
      </div>

      <div className="hidden sm:block sm:border-l sm:border-primary-base-100 sm:h-24 ">
        {/* pipe 1 */}
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <LocationPin className="text-primary-accent-100" width={2} />
        <p className="text-primary-base-200">Eismann Junction, Futo backgate</p>
        <p className="text-primary-base-75 text-sm">our location</p>
      </div>

      <div className="hidden sm:block sm:border-l sm:border-primary-base-100 sm:h-24   ">
        {/* pipe 2 */}
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <Phone className="text-primary-accent-100 " width={2} />
        <p className="text-primary-base-200">+234 916 168 1691</p>
        <p className="text-primary-base-75 text-sm">Phone number</p>
      </div>
    </div>
  );
}

export default Contact;
