import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main>
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Admission <span className="text-primary">Process</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto">Your step-by-step guide to joining the elite ranks of European aviation.</p>
        </div>
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
