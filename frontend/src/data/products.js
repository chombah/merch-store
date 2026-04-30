const products = [
  {
    id: 1,
    name: "4 Christ Tee",
    slug: "4-christ-tee",
    price: 1500,
    category: "Apparel",
    subCategory: "T-Shirts",
    featured: true,
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 15,
    description: "Premium heavyweight cotton tee with the signature 4 Christ puff print. Designed for comfort and durability."
  },
  {
    id: 2,
    name: "4 Christ Trucker Hat",
    slug: "4-christ-trucker",
    price: 800,
    category: "Headwear",
    subCategory: "Caps",
    featured: true,
    images: [
      "/assets/pink_cap.jpeg",
      "/assets/black_cap.jpeg",
      "/assets/blue_cap.jpeg"
    ],
    colors: ["Pink", "Black", "Blue"],
    sizes: ["One Size"],
    stock: 10,
    description: "Breathable mesh back with adjustable snap closure. Features high-definition embroidery."
  },
  {
    id: 3,
    name: "Drip4Who Hoodie",
    slug: "drip4who-hoodie",
    price: 3500,
    category: "Apparel",
    subCategory: "Hoodies",
    featured: false,
    colors: ["Grey", "Black"],
    sizes: ["M", "L", "XL"],
    stock: 5,
    description: "Fleece-lined interior for maximum warmth. Oversized fit."
  }
];

export default products;