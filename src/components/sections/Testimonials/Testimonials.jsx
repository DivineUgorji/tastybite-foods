import { useState } from "react";
import TestimonialList from "./TestimonialList";
import { testimonials as test } from "../../../utils/contents";
import CaretUp from "../../icons/CaretUp";

function Testimonials() {
  const [expanded, setExpanded] = useState(true);
  return (
    <section>
      <div className="w-full mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-20 py-12 md:py-24 flex flex-col items-center">
        <div className="max-w[40rem] flex flex-col items-center gap-y-6 mb-12">
          <p className="bg-primary-accent-100 text-primary-100 text-sm/loose md:text-base/8 px-6 py-2 rounded-full shadow-xl">
            Testimonials
          </p>
          <h2 className="text-primary-base-500 font-bold text-2xl/tight md:text-4xl/12 tracking-tight text-center">
            What Our Customers Are Saying About Us
          </h2>
          <p className="text-primary-base-200 text-base/normal md:text-lg/normal text-center">
            TastyBite has delighted hundreds of satisfied food lovers — here’s
            what they’re saying.
          </p>
        </div>
        <div className="mb-8 sm:mb-16 w-full">
          <TestimonialList testimonials={test.slice(0, expanded ? 6 : 3)} />
          <TestimonialList testimonials={test.slice(6, expanded ? 12 : 9)} />
          <TestimonialList testimonials={test.slice(12, expanded ? 18 : 15)} />
        </div>

        <button
          className="bg-primary-base-500 text-primary-75 border-2 border-primary-base-500 transition-properties rounded-full px-8 py-2 hover:bg-primary-75 hover:text-primary-base-500 hover:border-primary-base-500 cursor-pointer flex items-center gap-x-2 text-base/loose sm:text-lg/8"
          onClick={() => setExpanded((currValue) => !currValue)}
        >
          {expanded ? "Show less" : "Show more"}
          <CaretUp
            className={`rotate-180 transition-all duration-300 ${
              expanded && "rotate-360"
            }`}
            alt="caretup icon"
            width={2}
          />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
