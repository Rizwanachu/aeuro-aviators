import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const programs = [
  {
    title: "Integrated ATPL",
    description: "The zero-to-hero course. Go from no experience to a frozen Airline Transport Pilot License in 14-18 months.",
    features: ["CPL + IR + ME + MCC", "850 Hours Ground School", "200+ Hours Flight Time", "Airline Placement Support"]
  },
  {
    title: "Modular CPL/IR",
    description: "Flexible training for those who want to pace their learning. Ideal for working professionals.",
    features: ["Flexible Schedule", "Pay as you go", "Customizable Modules", "Convert PPL to CPL"]
  },
  {
    title: "PPL Training",
    description: "The first step in aviation. Learn the basics of flying and get your Private Pilot License.",
    features: ["45 Hours Flight Time", "Basic Navigation", "Meteorology", "Solo Flights"]
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Flight <span className="text-primary">Programs</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive training courses designed to meet EASA standards and airline requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
              <p className="text-slate-400 mb-8 h-24">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
