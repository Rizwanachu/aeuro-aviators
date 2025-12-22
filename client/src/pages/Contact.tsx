import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main>
        <div className="container mx-auto px-6 py-12 text-center">
           <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact <span className="text-primary">Us</span></h1>
           <p className="text-slate-300 max-w-2xl mx-auto mb-12">We are here to answer any questions you may have about your aviation journey.</p>
        </div>
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
