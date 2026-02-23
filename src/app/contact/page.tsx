import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <main className="relative bg-brand-ivory min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-serif text-brand-emerald mb-8">Get in Touch</h1>
                <p className="text-brand-slate/60 text-lg max-w-2xl mx-auto mb-20 italic">
                    "Whether it's a single bespoke hamper or a global corporate rollout, our master curators are ready to bring your vision to life."
                </p>
            </div>
            <ContactSection />
            <Footer />
        </main>
    );
}
