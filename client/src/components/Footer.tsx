import { Instagram, Facebook, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import logo from "@assets/Pokecut_1764771943910_1764772013748.png";

const XIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/aeuroaviators?igsh=ZG9lc3prY2hrbzhm&utm_source=qr",
    label: "Instagram"
  },
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/share/17SmeiNp4a/?mibextid=wwXIfr",
    label: "Facebook"
  },
  { 
    icon: XIcon, 
    href: "https://x.com/aeuroaviators?s=11",
    label: "X",
    isCustom: true
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-20 border-t border-white/10 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <img src={logo} alt="Aeuro Aviators" className="h-14 md:h-20 brightness-100 drop-shadow-lg" />
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Transforming aviation dreams into reality. We connect aspiring pilots with Europe's finest academies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                >
                  {social.isCustom ? (
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                  ) : (
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-4 text-sm">
              {["Integrated ATPL", "Modular CPL", "PPL Training"].map((item) => (
                <li key={item}>
                  <Link href="/programs" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" /> 
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                  About Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/admissions" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                  Admission Process <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                  Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:text-accent transition-colors" />
                <div className="flex flex-col">
                  <span>+91 7994903362</span>
                  <span>+48 795742776 (Whatsapp)</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:text-accent transition-colors" />
                <span>aeuroaviator@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; 2025 Aeuro Aviators. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
