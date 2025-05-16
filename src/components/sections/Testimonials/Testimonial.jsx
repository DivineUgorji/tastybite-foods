import { motion } from "motion/react";
import Star from "../../icons/Star";

function Testimonial({ test }) {
  return (
    <motion.li
      className="flex flex-col justify-between h-full rounded-2xl px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 40 }}
      viewport={{ once: false, amount: "100%" }}
      transition={{ opacity: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="flex gap-x-1 pb-6">
        {Array.from({ length: test.rating }).map((_, i) => (
          <Star
            alt="rating star icon"
            className="fill-primary-accent-100 stroke-primary-accent-100"
            key={i}
          />
        ))}
        {Array.from({ length: 5 - test.rating }).map((_, i) => (
          <Star
            className="fill-primary-100 stroke-primary-accent-100"
            alt="star rating icon"
            key={i}
          />
        ))}
      </div>
      <p className="text-primary-base-500 text-base/loose sm:text-lg/loose font-light pb-8 sm:pb-12 flex-grow">
        {test.description}
      </p>

      <div className="mt-auto flex gap-x-4 items-center">
        <img
          className="h-12 w-12 sm:w-14 sm:h-14 rounded-full object-cover"
          src={test.src}
          alt={test.title}
        />
        <div>
          <p className="text-primary-base-500  tracking-tighter font-medium sm:font-semibold sm:tracking-tight text-xl/8 sm:text-lg/8">
            {test.name}
          </p>
          <p className="text-primary-base-75 text-sm sm:text-lg/normal tracking-tight">
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default Testimonial;
