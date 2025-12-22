import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/Pokecut_1764771943910_1764772013748.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Roadmap", href: "/#roadmap" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/" ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Aeuro Aviators" 
            className={`transition-all duration-300 ${isScrolled || location !== "/" ? "h-10" : "h-14 md:h-16 filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary hover:glow-text transition-all duration-300 cursor-pointer">
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="rounded-full px-6 font-bold uppercase tracking-wider bg-primary text-background hover:bg-primary/90 hover:glow-border transition-all duration-300"
          >
            <Link href="/contact">Enquiry</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-lg font-bold text-white hover:text-primary uppercase tracking-wider" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full rounded-full bg-primary text-background font-bold uppercase tracking-wider">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Enquiry</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
