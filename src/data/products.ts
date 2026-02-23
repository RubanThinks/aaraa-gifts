export interface Product {
    id: string;
    title: string;
    subtitle?: string;
    img: string;
    category: string;
    tag?: string;
    href: string;
}

export const allProducts: Product[] = [
    // Wedding Products
    { id: "wed-1", title: "The Royal Brass Chest", img: "/assets/images/products/wedding/wed1.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },
    { id: "wed-2", title: "Silver Inlay Thali Set", img: "/assets/images/products/wedding/wed3.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },
    { id: "wed-3", title: "Moroccan Tea Lantern Suite", img: "/assets/images/products/wedding/wed4.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },
    { id: "wed-4", title: "Zardozi Handcrafted Pouch", img: "/assets/images/products/wedding/wed5.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },
    { id: "wed-5", title: "Heritage Sweet Box", img: "/assets/images/products/wedding/wed6.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },
    { id: "wed-6", title: "Copper Hammered Tumblers", img: "/assets/images/categories/wedding.jpg", category: "Wedding Return Gifts", href: "/collections/wedding" },

    // Women's Day Products
    { id: "wd-4", title: "The Silk Bloom Box", img: "/assets/images/products/womens/w2.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-5", title: "Rose Quartz Wellness Kit", img: "/assets/images/products/womens/w3.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-6", title: "Midnight Jasmine Suite", img: "/assets/images/products/womens/w5.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-1", title: "Botanical Gold Chest", img: "/assets/images/insta/2.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-2", title: "Lavender & Lace Hamper", img: "/assets/images/insta/3.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },
    { id: "wd-3", title: "Organic Tea Crate", img: "/assets/images/insta/4.jpg", category: "Women's Day Gifts", href: "/collections/womens-day" },

    // Corporate Products
    { id: "corp-1", title: "Executive Gift Combo", subtitle: "Branded combo set with pen, diary & bottle", img: "/assets/images/corporate/combo1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-2", title: "Premium Desk Combo", subtitle: "Complete desk essentials gift set", img: "/assets/images/corporate/combo2.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-3", title: "Signature Combo Box", subtitle: "Curated corporate combo package", img: "/assets/images/corporate/combo3.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-4", title: "Deluxe Gift Combo", subtitle: "All-inclusive executive combo set", img: "/assets/images/corporate/combo4.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-5", title: "Classic Leather Journal Set", subtitle: "Premium diary with branded pen", img: "/assets/images/corporate/handbook&pen1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-6", title: "Executive Notebook Duo", img: "/assets/images/corporate/handbook&pen2.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-9", title: "Compact Notes Set", img: "/assets/images/corporate/handbook&pen5.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-13", title: "CEO Signature Series", img: "/assets/images/corporate/handbook&pen9.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-16", title: "Signature Brass Pen", img: "/assets/images/corporate/pen1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-18", title: "Thermal Insulated Flask", img: "/assets/images/corporate/flask1.jpeg", category: "Corporate Studio", href: "/corporate" },
    { id: "corp-19", title: "Corporate Tote Bag", img: "/assets/images/corporate/bag1.jpeg", category: "Corporate Studio", href: "/corporate" },
];
