import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryShowcase from "@/components/CategoryShowcase";
import CollectionShowcase from "@/components/CollectionShowcase";

export default function CollectionsPage() {
    return (
        <main className="relative bg-brand-ivory min-h-screen pt-40">
            <Navbar />
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-serif text-brand-emerald mb-8">The Catalog</h1>
                <p className="text-brand-slate/60 text-lg max-w-2xl mx-auto mb-20">
                    Explore our seasonal and signature collections, crafted for those who appreciate the finer things.
                </p>
            </div>
            <CategoryShowcase />
            <div className="py-20">
                <CollectionShowcase />
            </div>
            <Footer />
        </main>
    );
}
