import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/cinematic_night_view_of_runway_with_lights.png";
import logo from "@assets/Pokecut_1764771943910_1764772013748.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <img 
             src={logo} 
             alt="Aeuro Aviators Logo" 
             className="h-32 md:h-56 drop-shadow-[0_0_30px_rgba(0,200,255,0.4)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6 tracking-tight uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Taxi On.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary animate-pulse">Holding Point.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">Take Off.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The elite pathway for Indian students to European cockpits. <br className="hidden md:block"/> Your identity is waiting in the skies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="rounded-full text-lg h-14 px-10 bg-primary text-background hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] group font-bold uppercase tracking-wider transition-all hover:scale-105 border border-primary/50">
              <a href="#enquiry">
                Start Enquiry
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg h-14 px-10 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm font-bold uppercase tracking-wider transition-all">
              <a href="#roadmap">
                View Roadmap
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">Scroll to Takeoff</span>
        <ChevronDown className="animate-bounce w-5 h-5" />
      </motion.div>
    </section>
  );
}
