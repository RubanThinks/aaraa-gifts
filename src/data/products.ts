export interface Product {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
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

    // Promotional Products
    {
        id: "promo-1",
        title: "The Vanguard Cinematic Flask Set",
        subtitle: "Matte-finish steel duo with iconic graphics",
        description: "A bold, matte-finish duo inspired by legendary narratives. Perfectly engineered for those who carry the spirit of heroism in their everyday pursuits. Featuring a high-grade insulated flask and matching ceramic mug.",
        img: "/assets/images/promotional/flask-mug.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Cinematic Edition"
    },
    {
        id: "promo-2",
        title: "The Heirloom Footprint Chronicle",
        subtitle: "Artisan wooden keepsake for newborns",
        description: "An artisan-crafted wooden keepsake that immortalizes life's most precious beginnings. A timeless piece of decor that tells the story of an angel's arrival with warmth and elegance. Custom laser-engraved on sustainable birch wood.",
        img: "/assets/images/promotional/baby-keepsake.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Handcrafted"
    },
    {
        id: "promo-3",
        title: "The Healer's Signature Chalice",
        subtitle: "3D sculpted medical tribute mug",
        description: "A meticulously sculpted vessel celebrating the dedication of medical professionals. Featuring lifelike 3D detailing of a lab coat and stethoscope, it stands as a prestigious tribute to those who serve with heart and skill.",
        img: "/assets/images/promotional/doctor-mug.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Professional Series"
    },
    {
        id: "promo-4",
        title: "The Caduceus Desktop Prestige",
        subtitle: "Obsidian & Gold medical desk suite",
        description: "A sophisticated desk accompaniment merging authority with artisanal flair. Crafted in obsidian and gold, this pen stand provides a distinguished home for a professional's most vital tool, accented by the ancient symbol of healing.",
        img: "/assets/images/promotional/pen-stand.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Executive"
    },
    {
        id: "promo-5",
        title: "The Horizon Canvas Delegate Suite",
        subtitle: "Cohesive organic event package",
        description: "A comprehensive ensemble for the modern visionary, featuring high-grade organic canvas and precision-bound stationery. Designed to offer a cohesive and elegant brand experience at every touchpoint, from meetings to retreats.",
        img: "/assets/images/promotional/canvas-set.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Bulk Ready"
    },
    {
        id: "promo-6",
        title: "The Marauder's Bronze Chronicle",
        subtitle: "Artisan bronze-finish pirate talisman",
        description: "A meticulously cast bronze-finished talisman celebrating the spirit of adventure and unyielding resolve. This handcrafted piece serves as a sophisticated tribute to the legendary path of the sea's most celebrated visionary.",
        img: "/assets/images/promotional/luffy-keyring.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Limited Edition"
    },
    {
        id: "promo-7",
        title: "The Sovereign Tuscan Portfolio",
        subtitle: "Top-grain leather executive organizer",
        description: "An exquisite zippered companion crafted from top-grain Tuscan leather, designed for the modern executive who values impeccable organization. Featuring hand-stitched details and dedicated compartments for all your professional essentials.",
        img: "/assets/images/promotional/leather-organizer.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Handcrafted"
    },
    {
        id: "promo-8",
        title: "The Terra Organic Collective",
        subtitle: "Bamboo and organic fabric eco-suite",
        description: "A curated ensemble of nature-first essentials, ranging from organic canvas carryalls to precision-crafted bamboo stationery. This collection embodies the harmony between premium utility and ecological stewardship.",
        img: "/assets/images/promotional/eco-collective.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Ecological"
    },
    {
        id: "promo-9",
        title: "The Persona Bespoke Gallery",
        subtitle: "Custom illustrated professional caricatures",
        description: "A vibrant celebration of individual identity, featuring custom-illustrated caricatures that tell a unique story on high-grade ceramic. Each piece is a personalized masterpiece designed to bring character and joy to every morning ritual.",
        img: "/assets/images/promotional/avatar-mugs.jpg",
        category: "Promotional Gifts",
        href: "/collections/promotional",
        tag: "Personalized"
    },
];
