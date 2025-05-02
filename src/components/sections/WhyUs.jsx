import ChefHat from "../icons/ChefHat";
import Flame from "../icons/Flame";
import Truck from "../icons/Truck";
import Wallet from "../icons/Wallet";

function WhyUs() {
  return (
    <section className="bg-primary-75 mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-20 py-12 md:py-24">
      <div>
        <div className="text-center">
          <h2>What Makes Us Different</h2>
          <p>Here are a few reasons why our customers love us so much</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-6 items-stretch">
          <div className="flex flex-col px-4 py-6 rounded-2xl shadow h-full">
            <div className="flex justify-center mb-4">
              <ChefHat />
            </div>
            <h4 className="text-center font-semibold text-lg mb-2">
              Unmatched Taste & Quality
            </h4>
            <p className="flex-grow text-center text-sm">
              We craft every shawarma, burger, and pastry with fresh,
              top-quality ingredients for a flavor you won’t find anywhere else.
            </p>
          </div>

          <div className="flex flex-col px-4 py-6 rounded-2xl shadow h-full">
            <div className="flex justify-center mb-4">
              <Wallet />
            </div>
            <h4 className="text-center font-semibold text-lg mb-2">
              Big Portions, Fair Prices
            </h4>
            <p className="flex-grow text-center text-sm">
              We believe in giving real value — you get generous, satisfying
              servings that fill you up, all without breaking your wallet.
            </p>
          </div>

          <div className="flex flex-col px-4 py-6 rounded-2xl shadow h-full">
            <div className="flex justify-center mb-4">
              <Truck />
            </div>
            <h4 className="text-center font-semibold text-lg mb-2">
              Fast, Friendly Service
            </h4>
            <p className="flex-grow text-center text-sm">
              We value your time — whether you pick up or get home delivery, we
              prepare your food quickly and ensure it’s fresh and satisfying.
            </p>
          </div>

          <div className="flex flex-col px-4 py-6 rounded-2xl shadow h-full">
            <div className="flex justify-center mb-4">
              <Flame />
            </div>
            <h4 className="text-center font-semibold text-lg mb-2">
              Consistent Quality
            </h4>
            <p className="flex-grow text-center text-sm">
              We don’t just impress once — every bite, every order, every visit
              delivers the same high standards you can count on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
