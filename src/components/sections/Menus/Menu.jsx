import { motion } from "framer-motion";

function Menu({ tastyMenu }) {
  return (
    <motion.li
      className="flex flex-col px-6 py-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 40 }}
      viewport={{ once: false, amount: "100% " }}
      transition={{ opacity: { duration: 0.75, ease: "easeInOut" } }}
    >
      <img
        className="h-48 w-full object-cover rounded-xl"
        src={tastyMenu.src}
        alt={tastyMenu.title || "Menu item"}
      />
      <div className="bg-primary-90 flex flex-col gap-y-4 flex-1 mt-4">
        <h4 className="font-semibold text-xl tracking-tight text-primary-base-500">
          {tastyMenu.title}
        </h4>
        <p className="text-primary-base-200 text-base md:text-lg flex-grow">
          {tastyMenu.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-primary-base-75">
            Price: <span className="font-semibold">{tastyMenu.price}</span>
          </p>
          <button className="bg-primary-accent-100 text-primary-100 px-3 py-2 border-2 rounded-xl sm:font-medium md:text-base text-sm">
            Order Now
          </button>
        </div>
      </div>
    </motion.li>
  );
}

export default Menu;
