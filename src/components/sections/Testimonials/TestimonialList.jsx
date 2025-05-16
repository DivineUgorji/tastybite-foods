import Testimonial from "./Testimonial";
function TestimonialList({ testimonials }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {testimonials.map((test) => (
        <Testimonial test={test} key={test.key} />
      ))}
    </ul>
  );
}

export default TestimonialList;
