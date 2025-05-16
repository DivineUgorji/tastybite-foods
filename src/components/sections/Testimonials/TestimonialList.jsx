import Testimonial from "./Testimonial";
function TestimonialList({ testimonials }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 items-stretch">
      {testimonials.map((test) => (
        <Testimonial test={test} key={test.key} />
      ))}
    </ul>
  );
}

export default TestimonialList;
