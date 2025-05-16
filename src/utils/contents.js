import Cake from "../components/icons/Cake";
import Croissant from "../components/icons/Croissant";
import Flame from "../components/icons/Flame";
import Leaf from "../components/icons/Leaf";
import Truck from "../components/icons/Truck";
import Phone from "../components/icons/Phone";
import Clock from "../components/icons/Clock";
import LocationPin from "../components/icons/LocationPin";
import Utensils from "../components/icons/Utensils";
import PartyPopper from "../components/icons/PartyPopper";
import CustomizeSliders from "../components/icons/CustomizeSliders";
import VegetarianCarrot from "../components/icons/VegetarianCarrot";
import Spice from "../components/icons/Spice";
import ChefHat from "../components/icons/ChefHat";
import Wallet from "../components/icons/Wallet";

const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "Menu",
    href: "#",
  },
  {
    id: 3,
    link: "Service",
    href: "#",
  },
  {
    id: 4,
    link: "Testimonial",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-3.png", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-2.png", import.meta.url),
    alt: "Micheal Reins",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-16.png", import.meta.url),
    alt: "Josh Kim",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-12.png", import.meta.url),
    alt: "Rita Leo",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-13.png", import.meta.url),
    alt: "Sussan Tina",
  },
];

const menu = [
  {
    id: 1,
    src: new URL("../assets/menu/beef.jpg", import.meta.url),
    title: "Beef Shawarma",
    description:
      "Marinated spiced beef wrapped in flatbread with veggies & sauces.",
    price: "2,900",
  },

  {
    id: 2,
    src: new URL("../assets/menu/chicken.jpg", import.meta.url),
    title: "Chicken Shawarma",
    description: "Spiced grilled chicken wrap with toppings & creamy sauce.",
    price: "3,200",
  },

  {
    id: 3,
    src: new URL("../assets/menu/mixed.jpeg", import.meta.url),
    title: "Mixed Shawarma",
    description:
      "Beef & chicken shawarma wrapped with fresh veggies and sauces.",
    price: "3,800",
  },

  {
    id: 4,
    src: new URL("../assets/menu/beef-sausage.jpeg", import.meta.url),
    title: "Beef With Sausage",
    description:
      "Juicy beef shawarma loaded with flavorful sausage and tasty fillings.",
    price: "3,600",
  },

  {
    id: 5,
    src: new URL("../assets/menu/chicken-sausage.jpeg", import.meta.url),
    title: "Chicken With Sausage",
    description:
      "Tender chicken shawarma paired with sausage for a hearty, flavorful wrap.",
    price: "3,900",
  },

  {
    id: 6,
    src: new URL("../assets/menu/mixed-sausage.jpeg", import.meta.url),
    title: "Mixed With Sausage",
    description:
      "Beef & chicken shawarma with sausage for a rich, satisfying bite.",
    price: "4,500",
  },

  {
    id: 7,
    src: new URL("../assets/menu/beef-extra.jpeg", import.meta.url),
    title: "Beef Extra Padding",
    description:
      "Beef shawarma with extra meat and fillings for a fuller, heavier wrap.",
    price: "4,100",
  },

  {
    id: 8,
    src: new URL("../assets/menu/extra-chicken.jpeg", import.meta.url),
    title: "Chicken Extra Padding",
    description:
      "Chicken shawarma packed with extra layers of chicken and toppings.",
    price: "4,400",
  },

  {
    id: 9,
    src: new URL("../assets/menu/mixed-extra.jpeg", import.meta.url),
    title: "Mixed Extra Padding",
    description:
      "Extra-loaded beef & chicken shawarma for ultimate satisfaction.",
    price: "5,000",
  },

  {
    id: 10,
    src: new URL("../assets/menu/beef-special.jpg", import.meta.url),
    title: "Beef Shawarma Special",
    description:
      "Premium beef shawarma with special sauces and extra stuffing.",
    price: "4,800",
  },

  {
    id: 11,
    src: new URL("../assets/menu/chicken-special.jpg", import.meta.url),
    title: "Chicken Shawarma Special",
    description:
      "Special chicken shawarma featuring extra flavors and hearty toppings.",
    price: "5,100",
  },

  {
    id: 12,
    src: new URL("../assets/menu/mixed-special.jpeg", import.meta.url),
    title: "Mixed Shawarma Special",
    description:
      "A special blend of beef and chicken shawarma, fully loaded with sauces.",
    price: "2,900",
  },

  {
    id: 13,
    src: new URL("../assets/menu/burger.jpg", import.meta.url),
    title: "Burger",
    description: "Classic juicy beef burger served in fresh veggies and sauce.",
    price: "4,000",
  },

  {
    id: 14,
    src: new URL("../assets/menu/chicken-chips.jpg", import.meta.url),
    title: "Chicken And Chips",
    description:
      "Crispy fried chicken served with golden, crunchy chips (fries).",
    price: "7,000",
  },

  {
    id: 15,
    src: new URL("../assets/menu/burger-chips.jpg", import.meta.url),
    title: "Burger And Chips",
    description:
      "Tasty beef burger paired with a side of crispy chips (fries).",
    price: "6,500",
  },

  {
    id: 16,
    src: new URL("../assets/menu/meatpie.jpg", import.meta.url),
    title: "Meat Pie",
    description:
      "Flaky pastry stuffed with seasoned minced meat and savory fillings.",
    price: "800",
  },

  {
    id: 17,
    src: new URL("../assets/menu/super-roll.jpg", import.meta.url),
    title: "Super Roll",
    description:
      "Big, flavorful pastry roll packed with seasoned meat and spices.",
    price: "800",
  },

  {
    id: 18,
    src: new URL("../assets/menu/drinks.jpeg", import.meta.url),
    title: "Drinks",
    description:
      "A refreshing selection of soft drinks to enjoy with your meal.",
    price: "500",
  },
];

const whyUs = [
  {
    id: 1,
    Icon: ChefHat,
    alt: "Chef hat icon",
    title: "Unmatched Taste",
    description:
      "We craft every shawarma, burger, and pastry with fresh,top-quality ingredients for a flavor you won’t find anywhere else.",
  },

  {
    id: 2,
    Icon: Wallet,
    alt: "wallet icon",
    title: "Big Portions, Fair Prices",
    description:
      "We believe in giving real value — you get generous, satisfying servings that fill you up, all without breaking your wallet",
  },

  {
    id: 3,
    Icon: Truck,
    alt: "delivery truck icon",
    title: "Fast, Friendly Service",
    description:
      "We value your time — whether you pick up or get home delivery, we prepare your food quickly and ensure it’s fresh and satisfying.",
  },

  {
    id: 4,
    Icon: Flame,
    alt: "delivery truck icon",
    title: "Consistent Quality",
    description:
      "We don’t just impress once — every bite, every order, every visit delivers the same high standards you can count on.",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "Menu",
    id: 1,
    questions: [
      {
        id: 1,
        Icon: Croissant,
        alt: "Croissant pastry icon",
        question: "What types of shawarma do you offer?",
        answer:
          " We offer classic chicken shawarma, beef shawarma, \
            and special combos with extra fillings like cheese, \
             sausage, or spicy sauces.",
      },

      {
        id: 2,
        Icon: Cake,
        alt: "Cup cake icon",
        question: "Are your cakes made fresh daily?",
        answer:
          "Yes! All our cup cakes are baked fresh every day \
            using high-quality ingredients to ensure rich flavor \
            and perfect texture.",
      },

      {
        id: 3,
        Icon: Leaf,
        alt: "leaf icon",
        question: "Do your pastries contain preservatives?",
        answer:
          "No, our super roll pastries and other baked \
            items are made without artificial preservatives. \
            We focus on freshness and flavor.",
      },

      {
        id: 4,
        Icon: Flame,
        alt: "flame icon",
        question: "Are your burgers grilled or fried?",
        answer:
          "Our burgers are flame-grilled to lock in juicyflavor,  then layered with fresh veggies and sauces for asatisfying bite.",
      },
    ],
  },

  {
    category: "Delivery",
    id: 2,
    questions: [
      {
        id: 5,
        Icon: Truck,
        alt: "Delivery truck icon",
        question: "Do you offer delivery services within FUTO?",
        answer:
          "Yes, we offer fast delivery across FUTO campus and \
            surrounding areas. Just place your order and \
            we’ll bring it to you hot and fresh.",
      },

      {
        id: 6,
        Icon: Phone,
        alt: "Phone icon",
        question:
          "You can order directly through our WhatsApp line or call 09161681691, social media pages, or by visiting our store.\
            Online ordering through our website is coming soon!",
      },

      {
        id: 7,
        Icon: Clock,
        alt: "Cup cake icon",
        question: "What are your delivery hours?",
        answer:
          "We deliver daily between 10AM and 9PM. Orders outside this window can be scheduled in advance.",
      },

      {
        id: 8,
        Icon: Clock,
        alt: "clock icon",
        question: "How long does delivery usually take?",
        answer:
          "Delivery within FUTO typically takes 20–40 minutes, depending on your location and order size.",
      },
    ],
  },

  {
    category: "Hours",
    id: 3,
    questions: [
      {
        id: 9,
        Icon: Clock,
        question: "What are your opening hours?",
        answer:
          "We’re open every day from 9AM to 9PM,including weekends and public holidays, except on Sundays when we open by 2PM.",
      },

      {
        id: 10,
        Icon: LocationPin,
        question: "Where is Tasty Bite Foods located in FUTO?",
        answer:
          "We’re located at Eismann junction, FUTO back gate, making us easily accessible from anywhere on campus.",
      },

      {
        id: 11,
        Icon: Utensils,
        question: "Can I visit Tasty Bite for dine-in or is it takeout only?",
        answer: "At the moment we only offer convenient takeout and delivery.",
      },

      {
        id: 12,
        Icon: PartyPopper,
        question: "Do you cater for events or bulk orders?",
        answer:
          "Absolutely! We cater for birthdays, meetings, and special occasions. Bulk orders should be placed at least 24 hours in advance.",
      },
    ],
  },

  {
    category: "Customizations",
    id: 4,
    questions: [
      {
        id: 13,
        Icon: CustomizeSliders,
        question: "Can I customize my shawarma or burger?",
        answer:
          "Yes! You can choose your preferred fillings, spice level, and sauces to make it just the way you like it.",
      },

      {
        id: 14,
        Icon: Cake,
        question: "Do you make custom cakes for birthdays or events?",
        answer:
          "Not at all. We only make cup cakes at the moment and do not make cakes for birthdays or events.",
      },

      {
        id: 15,
        Icon: VegetarianCarrot,
        question: "Are there vegetarian or non-meat options available?",
        answer:
          "We’re working on expanding our vegetarian menu. Currently, we offer veggie pastries and are happy to customize certain items on request.",
      },

      {
        id: 16,
        Icon: Spice,
        question: "Can I request less spicy food?",
        answer:
          "Definitely! Just let us know your spice preference when ordering, and we’ll adjust accordingly.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    description:
      "This is hands down the best shawarma I’ve tried. It’s fresh and perfectly made. The flavor is rich and satisfying. Shawarma lovers shouldn’t miss it.",
    src: new URL("../assets/headshots/img-1.png", import.meta.url),
    name: "Victor Dominion",
    title: "customer",
  },
  {
    id: 2,
    rating: 5,
    description:
      "One of the best shawarma spots in Owerri, no doubt. I’ve had it multiple times since school resumed, and it’s always good. Delivery is quick, and the staff are super friendly. Truly, great taste in every bite.",
    src: new URL("../assets/headshots/img-2.png", import.meta.url),
    name: "Mzee Abia",
    title: "customer",
  },
  {
    id: 3,
    rating: 5,
    description:
      "I absolutely loved the shawarma—it was worth the trip from Onitsha. It lived up to the hype completely. The staff were kind and welcoming. The whole experience was top-notch.",
    src: new URL("../assets/headshots/img-17.png", import.meta.url),
    name: "Emmanuel Ekeh",
    title: "customer",
  },

  {
    id: 4,
    rating: 5,
    description:
      "This shawarma was a pleasant surprise after a bad first try elsewhere. The staff are friendly and welcoming. I brought my friends, and now we’re regulars. They’ve truly earned it.",
    src: new URL("../assets/headshots/img-4.png", import.meta.url),
    name: "Michael Onyema",
    title: "customer",
  },

  {
    id: 5,
    rating: 5,
    description:
      "TastyBite’s shawarma was loaded and full of flavor. No cabbage overload—just real meat. I couldn’t even finish it in one sitting. My babe loves it too, so we’ll be back for sure.",
    src: new URL("../assets/headshots/img-5.png", import.meta.url),
    name: "Danosman",
    title: "customer",
  },

  {
    id: 6,
    rating: 5,
    description:
      "Omorrh! The beef is just amazing—so flavorful! I love how they spice and sauce their shawarma at TastyBite. No doubt, I strongly recommend it to everyone. The sharwarma sweet me joor!! No caps.. twale!!! I respect una!!",
    src: new URL("../assets/headshots/img-6.png", import.meta.url),
    name: "Iheanyi emmanuel",
    title: "customer",
  },

  {
    id: 7,
    rating: 5,
    description:
      "I’ve been to a lot of shawarma spots in Owerri, but this one stands out. The service is always warm and quick. The taste is rich, and you can tell they care about quality. I keep coming back because they never disappoint.",
    src: new URL("../assets/headshots/img-7.png", import.meta.url),
    name: "Ace Shadow",
    title: "customer",
  },

  {
    id: 8,
    rating: 4,
    description:
      "It’s a solid place to fill your stomach when you’re hungry. They’re always quick to attend to customers, and that means a lot. The food tastes good and leaves you satisfied. Plus, the prices are fair for anyone, no matter your budget.",
    src: new URL("../assets/headshots/img-8.png", import.meta.url),
    name: "Eluwa Ikechukwu",
    title: "customer",
  },

  {
    id: 9,
    rating: 5,
    description:
      "The shawarma is really sweet and plenty—just the way I like it. Whether it's beef or chicken, they don’t hold back. It’s tasty, delicious, and full of flavor. Honestly, you start craving it the moment you see it.",
    src: new URL("../assets/headshots/img-3.png", import.meta.url),
    name: "Victor Chika",
    title: "customer",
  },

  {
    id: 10,
    rating: 5,
    description:
      "Their shawarma is honestly so good. From the first bite, you can tell it’s made right. The flavor, the texture, everything just hits. I always look forward to getting one again.",
    src: new URL("../assets/headshots/img-9.png", import.meta.url),
    name: "Young Victor",
    title: "customer",
  },

  {
    id: 11,
    rating: 5,
    description:
      "It’s just awesome—no other way to put it. The taste is something you don’t forget easily. Every bite is full of flavor. If you love good food, you’ll love this.",
    src: new URL("../assets/headshots/img-10.png", import.meta.url),
    name: "Emma Uchechukwu",
    title: "customer",
  },
  {
    id: 12,
    rating: 5,
    description:
      "The taste is really something else—so good. It’s the kind of food that makes you pause and enjoy every bite. You can tell they put care into it. I’ll definitely keep coming back for more.",
    src: new URL("../assets/headshots/img-16.png", import.meta.url),
    name: "Angel Emerole",
    title: "customer",
  },

  {
    id: 13,
    rating: 4,
    description:
      "The shawarma is really nice—I enjoy every bite. It has a great balance of flavors that feels just right. It’s simple but satisfying every time. I always feel good grabbing one here.",
    src: new URL("../assets/headshots/img-12.png", import.meta.url),
    name: "Chiedo Chigoziem",
    title: "customer",
  },

  {
    id: 14,
    rating: 4,
    description:
      "The taste is great every single time. The staff are friendly and make you feel welcome. It’s a nice experience from start to finish. I always leave happy and satisfied.",
    src: new URL("../assets/headshots/img-15.png", import.meta.url),
    name: "Blessing Iwu",
    title: "customer",
  },

  {
    id: 15,
    rating: 5,
    description:
      "It was really nice, and I enjoyed every bit of it. The whole experience made me want to come back again. They know how to keep customers happy. I’ll definitely keep patronizing this place.",
    src: new URL("../assets/headshots/img-13.png", import.meta.url),
    name: "Freedom Okechukwu",
    title: "customer",
  },

  {
    id: 16,
    rating: 5,
    description:
      "I wasn’t expecting much, but wow—this shawarma blew me away. It’s juicy, tasty, and really satisfying. The staff were polite and quick to attend to me. I’ll definitely be stopping by again soon.",
    src: new URL("../assets/headshots/img-18.jpg", import.meta.url),
    name: "Adaora Nnenna",
    title: "customer",
  },

  {
    id: 17,
    rating: 4,
    description:
      "That first bite had me hooked right away. You can taste the effort they put into every wrap. It’s now my go-to spot after work. I’d recommend it to anyone who wants real value for their money.",
    src: new URL("../assets/headshots/img-19.jpg", import.meta.url),
    name: "Tunde Adeyemi",
    title: "customer",
  },

  {
    id: 18,
    rating: 5,
    description:
      "This is honestly one of the best food spots I’ve tried in a while. The shawarma was fresh, well-spiced, and super filling. I also loved how clean and organized the place was. Can’t wait to bring my sister here.",
    src: new URL("../assets/headshots/img-20.jpg", import.meta.url),
    name: "Chiamaka Oge",
    title: "customer",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["Menu", "About Us", "Our Story", "Testimonials"],
  },

  {
    id: 2,
    category: "Menu",
    links: ["Shawarma", "Burgers", "Cakes", "Pastries"],
  },

  {
    id: 3,
    category: "Service",
    links: ["Delivery Info", "Custom Orders", "Bulk Orders", "Operating Hours"],
  },

  {
    id: 4,
    category: "Contact Us",
    links: ["WhatsApp", "Instagram", "Location", "Send a Message"],
  },
];

export {
  navigationLinks,
  reviews,
  menu,
  whyUs,
  testimonials,
  frequentlyAskedQuestions,
  footerCols,
};
