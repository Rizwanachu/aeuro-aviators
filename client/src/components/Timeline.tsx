import { motion } from "framer-motion";
import { CheckCircle2, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Initial consultation to understand your aviation goals and eligibility assessment."
  },
  {
    number: "02",
    title: "Selection",
    description: "Choose the right European flight academy that fits your budget and career path."
  },
  {
    number: "03",
    title: "Visa & Docs",
    description: "Complete guidance on student visa application, medicals, and documentation."
  },
  {
    number: "04",
    title: "Departure",
    description: "Pre-departure briefing and travel arrangements to your new campus in Europe."
  },
  {
    number: "05",
    title: "Wings",
    description: "Begin your flight training and earn your EASA Commercial Pilot License."
  }
];

export default function Timeline() {
  return (
    <section id="roadmap" className="py-32 bg-background relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm drop-shadow-sm">Your Flight Plan</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mt-2 mb-6 text-white uppercase tracking-tight">
            The <span className="text-primary text-stroke-sm">Roadmap</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 pl-12 md:pl-0 md:text-right w-full">
                   <div className={`${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <div className="inline-flex items-center gap-3 mb-2">
                         <span className={`text-5xl font-bold font-mono text-white/10 select-none absolute -top-8 ${index % 2 === 0 ? "left-0 md:-left-4" : "right-0 md:-right-4"}`}>{step.number}</span>
                         <h3 className="text-2xl font-bold text-white uppercase tracking-wider relative z-10">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed relative z-10">
                        {step.description}
                      </p>
                   </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center justify-center z-20">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
