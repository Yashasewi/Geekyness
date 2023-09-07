import {
    CurrencyDollarIcon,
    GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

export const footerNavigation = {
    products: [
        { name: "Bags", href: "#" },
        { name: "Tees", href: "#" },
        { name: "Objects", href: "#" },
        { name: "Home Goods", href: "#" },
        { name: "Accessories", href: "#" },
    ],
    company: [
        { name: "Who we are", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy", href: "#" },
    ],
    customerService: [
        { name: "Contact", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Secure Payments", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Find a store", href: "#" },
    ],
};

export const product = {
    name: "Basic Tee",
    price: "$35",
    href: "#",
    breadcrumbs: [
        { id: 1, name: "Women", href: "#" },
        { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
        {
            id: 1,
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            imageAlt: "Back of women's Basic Tee in black.",
            primary: true,
        },
        {
            id: 2,
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
            imageAlt: "Side profile of women's Basic Tee in black.",
            primary: false,
        },
        {
            id: 3,
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
            imageAlt: "Front of women's Basic Tee in black.",
            primary: false,
        },
    ],
    colors: [
        {
            name: "Black",
            bgColor: "bg-gray-900",
            selectedColor: "ring-gray-900",
        },
        {
            name: "Heather Grey",
            bgColor: "bg-gray-400",
            selectedColor: "ring-gray-400",
        },
    ],
    sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: false },
    ],
    description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
    details: [
        "Only the best materials",
        "Ethically and locally made",
        "Pre-washed and pre-shrunk",
        "Machine wash cold with similar colors",
    ],
};

export const policies = [
    {
        name: "International delivery",
        icon: GlobeAmericasIcon,
        description: "Get your order in 2 years",
    },
    {
        name: "Loyalty rewards",
        icon: CurrencyDollarIcon,
        description: "Don't look at other tees",
    },
];


export const relatedProducts = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
        imageAlt: "Front of men's Basic Tee in white.",
        price: "$35",
        color: "Aspen White",
    },
    {
        id: 2,
        name: "Classic Hoodie",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Classic Hoodie in gray.",
        price: "$65",
        color: "Gray",
    },
    {
        id: 3,
        name: "Crewneck Sweatshirt",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
        imageAlt: "Front of men's Crewneck Sweatshirt in navy.",
        price: "$45",
        color: "Navy",
    },
    {
        id: 4,
        name: "Slim Fit Jeans",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        imageAlt: "Front of men's Slim Fit Jeans in blue.",
        price: "$75",
        color: "Blue",
    },
    {
        id: 5,
        name: "Classic Leather Belt",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",

        imageAlt: "Front of men's Classic Leather Belt in brown.",
        price: "$45",
        color: "Brown",
    },
    {
        id: 6,
        name: "Leather Wallet",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
        imageAlt: "Front of men's Leather Wallet in brown.",
        price: "$35",
        color: "Brown",
    },
    {
        id: 7,
        name: "Leather Key Ring",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        imageAlt: "Front of men's Leather Key Ring in brown.",
        price: "$15",
        color: "Brown",
    },
    {
        id: 8,
        name: "Classic Watch",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Classic Watch in black.",
        price: "$125",
        color: "Black",
    },
    {
        id: 9,
        name: "Leather Messenger Bag",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        imageAlt: "Front of men's Leather Messenger Bag in brown.",
        price: "$225",
        color: "Brown",
    },
    {
        id: 10,
        name: "Leather Duffle Bag",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Leather Duffle Bag in brown.",
        price: "$325",
        color: "Brown",
    },
];