// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "features",
    href: "features",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const hero = {
  title: "Transform Your Home with Creative Comfort",
  subtitle:
    "Discover furniture that blends style, innovation, and smart AR previews — experience luxury like never before.",
  buttonText: "Explore Collection",
};

export const stats = [
  { value: "7", text: "Years of Expertise" },
  { value: "2", text: "Stores Nationwide" },
  { value: "10k+", text: "Delighted Customers" },
  { value: "260+", text: "Furniture Variants" },
];

export const features = {
  image: <Features1Img />,
  title: "Designing Aesthetic Living Spaces",
  subtitle:
    "Furniture Power is your all-in-one solution for modern interior transformation and seamless space management.",
  buttonText: "Explore Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Smart Valuation Tools",
      subtitle:
        "Get instant furniture estimates with intelligent design insights for your space.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Crafting Custom Furniture Models",
      subtitle:
        "Tailored furniture prototypes designed digitally to fit your vision and space.",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "Your Trusted Luxury Furniture Partner",
    subtitle:
      "Furniture Power blends cutting-edge design and technology, perfect for businesses managing multiple home & office spaces. Discover the future of smart furnishing with us.",
  },
};

export const newInStore = {
  title: "Just Arrived!",
  subtitle: "Browse the newest arrivals at special launch prices",
  link: "View Collection",
  icon: <IoIosArrowRoundForward />,
  products: [
    { name: "chair", image: <ChairImg /> },
    { name: "bed", image: <BedImg /> },
    { name: "cupboard", image: <CupboardImg /> },
    { name: "lighting", image: <LightingImg /> },
  ],
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 3499,
          oldPrice: 4199,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Modern Oak Chair",
          price: 4299,
          oldPrice: 4999,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Eco Paperboard Cupboard",
          price: 8999,
          oldPrice: 9999,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Mattress",
          price: 7599,
          oldPrice: 8499,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Elite Sofa 911",
          price: 18999,
          oldPrice: 20999,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Slender Modular Sofa",
          price: 5499,
          oldPrice: 5999,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA Executive Corner Desk",
          price: 15999,
          oldPrice: 16999,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Walnut Shelf",
          price: 12499,
          oldPrice: 13499,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Eco Paperboard Cupboard",
          price: 8999,
          oldPrice: 9999,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Mattress",
          price: 7599,
          oldPrice: 8499,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 3499,
          oldPrice: 4199,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Modern Oak Chair",
          price: 4299,
          oldPrice: 4999,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Eco Paperboard Cupboard",
          price: 8999,
          oldPrice: 9999,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Mattress",
          price: 7599,
          oldPrice: 8499,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Elite Sofa 911",
          price: 18999,
          oldPrice: 20999,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Slender Modular Sofa",
          price: 5499,
          oldPrice: 5999,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA Executive Corner Desk",
          price: 15999,
          oldPrice: 16999,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Walnut Shelf",
          price: 12499,
          oldPrice: 13499,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Eco Paperboard Cupboard",
          price: 8999,
          oldPrice: 9999,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Mattress",
          price: 7599,
          oldPrice: 8499,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Aarav Mehta",
      occupation: "Architect, Mumbai",
      message:
        "“The AR feature let me place the sofa virtually in my living room—it fit perfectly. Super impressed!”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Sneha Kapoor",
      occupation: "Interior Designer, Bangalore",
      message:
        "“I loved the range of modern furniture. Great quality and fast delivery too!”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Rohan Verma",
      occupation: "Software Engineer, Pune",
      message:
        "“Ordering was smooth and the AR try-on saved me from making a wrong purchase. Highly recommend.”",
    },
  ],
};

export const newsletter = {
  title: "Unlock Exclusive Deals & Discounts",
  subtitle: "Subscribe and stay updated on premium launches",
  placeholder: "Enter your email",
  buttonText: "Join & Save",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "Luxurious Creation © 2025 - All Rights Reserved.",
};
