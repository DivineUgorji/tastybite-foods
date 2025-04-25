import HeroImg from "../../assets/graphics/hero-img.png";
import { reviews } from "../../utils/contents";
import Play from "../icons/Play";
function Hero() {
  return (
    <div className="bg-primary-50 w-full mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-20 py-12 md:py-24 grid grid-cols-1 gap-y-9 md:grid-cols-[5fr_4fr] md:gap-x-9">
      <div className="">
        {/* Text content */}
        <h1 className="text-primary-base-500 font-bold text-3xl/8 tracking-tighter md:text-5xl/14 mb-6 md:mb-10">
          Freshly Made <span className="text-primary-accent-100">Burgers.</span>{" "}
          <br /> To Satisfy Every Craving
        </h1>
        <p className="text-primary-base-200 text-sm/normal md:text-lg/normal mb-6 md:mb-10">
          From crispy shawarma to sweet cupcakes, <br /> Tasty Bite is the best
          plug for your fresh, flavor-packed pastries,
          <br /> crafted with love and care right here in FUTO and Owerri.
        </p>

        <div className="flex gap-x-4 mb-6 md:mb-10 max-[21.25rem]:flex-col max-[23.5rem]:gap-y-4">
          <button className="bg-primary-accent-100 border-primary-accent-100  text-primary-100 rounded-full border-2 text-sm px-8 py-2 md:px-12 md:py-3 hover:bg-primary-75 hover:border-primary-accent-100 hover:text-primary-base-200 transition-properties font-medium md:text-base box-border cursor-pointer shadow-xl ">
            Order Now
          </button>
          <button className="flex gap-x-1 items-center bg-primary-75 text-primary-base-200 box-border cursor-pointer rounded-full border-2 md:px-6 md:py-3 font-medium md:text-base hover:bg-primary-accent-100 hover:text-primary-100 shadow-xl text-sm px-3 py-2 justify-center">
            <Play />
            <p>Watch Demo</p>
          </button>
        </div>

        <div className="flex flex-wrap gap-x-4 items-center ">
          <ul className="flex">
            {reviews.map((review) => (
              <li key={review.id} className="-mr-4 last:mr-0">
                <img
                  src={review.src}
                  alt={review.alt}
                  className="rounded-full border-2 border-primary-accent-75 h-10 md:h-12"
                />
              </li>
            ))}
          </ul>
          <p className="text-base/loose text-primary-base-75 md:text-base/loose">
            Trusted by over{" "}
            <span className="font-bold text-primary-accent-100 tracking-tight">
              {" "}
              250+{" "}
            </span>{" "}
            food lovers.
          </p>
        </div>
      </div>

      <div>
        <img
          src={HeroImg}
          alt=""
          className="max-h-[20rem] md:max-h-[30rem] justify-self-center md:justify-self-end"
        />
      </div>
    </div>
  );
}

export default Hero;
