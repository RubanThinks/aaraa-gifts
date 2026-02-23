import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorporateSection from "@/components/CorporateSection";
import ContactSection from "@/components/ContactSection";

export default function CorporatePage() {
    return (
        <main className="relative bg-brand-ivory min-h-screen pt-40">
            <Navbar />
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-serif text-brand-brown mb-8 tracking-tight">The Institutional <br /> <span className="italic">Standard.</span></h1>
                <p className="text-brand-espresso/60 text-lg max-w-3xl mx-auto mb-20 italic font-light leading-relaxed">
                    "Elevating corporate culture through the medium of extraordinary gifting. We are the partners to world-class organizations seeking to celebrate their teams and clients with absolute precision."
                </p>
            </div>
            <CorporateSection />

            <div className="bg-brand-brown py-40 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-8 block">Project Planning</span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Planned Weightages <br /> & <span className="italic">Volume Control.</span></h2>
                            <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                                For large scale deployments, we provide detailed weightage logs and structural prototypes. Every corporate hamper is stress-tested to ensure that its aesthetics never compromise its structural integrity during global shipping.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { t: "Load Balancing", d: "Center-of-gravity engineering for safer transit." },
                                    { t: "Material Stress Tests", d: "B-Flute reinforcement for 5kg+ shipments." },
                                    { t: "Batch Consistency", d: "Color-matching benchmarks at 99.9% precision." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-copper mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="block font-serif text-xl mb-1">{item.t}</span>
                                            <span className="text-sm text-white/30 font-light">{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                            <div className="aspect-square bg-white/5 rounded-3xl p-12 border border-white/10 flex flex-col justify-center">
                                <span className="text-4xl font-serif text-brand-copper mb-4">500+</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Enterprises Served</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-3xl p-12 border border-white/10 flex flex-col justify-center mt-12">
                                <span className="text-4xl font-serif text-brand-copper mb-4">12kg</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Max Load Capacity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-40">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-espresso mb-12">Bulk Orders & <span className="italic">Custom Branding</span></h2>
                    <p className="text-brand-espresso/50 text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                        From logo integration to custom-poured candles and branded wood-fired boxes, we offer end-to-end personalization for your brand. Our technical team handles all blueprinting and branding mockups.
                    </p>
                    <div className="flex justify-center flex-wrap gap-8">
                        <button className="px-12 py-5 bg-brand-brown text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-brand-copper transition-all duration-500 shadow-2xl">
                            Inquire for Bulk
                        </button>
                        <button className="px-12 py-5 border border-brand-brown text-brand-brown uppercase text-xs tracking-[0.3em] font-bold hover:bg-brand-brown hover:text-white transition-all duration-500">
                            Download Catalog
                        </button>
                    </div>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </main>
    );
}
