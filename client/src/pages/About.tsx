import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import logo from "@assets/Pokecut_1764771943910_1764772013748.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Why should I train in Europe instead of India?", answer: "European flight training offers EASA-approved licenses recognized globally, modern aircraft fleets, favorable weather conditions, and often more cost-effective programs compared to training in India." },
  { question: "What are the eligibility requirements for pilot training?", answer: "Generally, you need to be at least 17 years old, have completed 10+2 with Physics and Mathematics, hold a valid Class 1 Medical Certificate, and have a valid passport." },
  { question: "How much does pilot training in Europe typically cost?", answer: "Costs vary by country and program, but integrated ATPL programs typically range from EUR 70,000 to EUR 120,000, which is often more affordable than equivalent training in India." },
  { question: "How long does the entire process take?", answer: "The complete journey from application to obtaining your Commercial Pilot License typically takes 14-18 months for integrated programs, depending on weather conditions and individual progress." },
  { question: "Which European countries do you work with for training?", answer: "We partner with academies in Spain, Poland, Lithuania, Czech Republic, Slovenia, and several other EU countries with EASA-approved training organizations." },
  { question: "Can I work in India after getting an EASA license?", answer: "Yes, EASA licenses can be converted to DGCA licenses through a conversion process, allowing you to work with Indian airlines after completing the required procedures." },
  { question: "What support do you provide after I start training?", answer: "We provide continuous support including accommodation assistance, local orientation, progress monitoring, and help with any challenges you may face during your training." },
  { question: "What if my visa application gets rejected?", answer: "We have a high visa success rate due to thorough preparation. In rare cases of rejection, we help analyze the reasons and assist with reapplication or alternative options." },
  { question: "Do you help with financing or education loans?", answer: "Yes, we can guide you through education loan options available from various banks and financial institutions that support aviation training abroad." },
  { question: "How do I get started with Aeuro Aviators?", answer: "Simply fill out our enquiry form or contact us directly. We'll schedule a free consultation to understand your goals and guide you through the next steps." }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 pt-20">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">About <span className="text-primary">Aeuro Aviators</span></h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Aeuro Aviators is the bridge between ambitious Indian students and the world's most prestigious European flight academies. We believe that your dream is your identity, and we are dedicated to helping you achieve your wings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                With countless hours spent above the clouds, one guiding truth has shaped every step of our journey: In aviation, Honesty isn't just a principle; it's a foundation for trust. It's a lifeline. The sky teaches you how clarity, discipline, and integrity together keep a pilot safe. Those same principles are the foundation of our pilot training consulting agency.
              </p>
              <p>
                Over the years, we've watched young aviators grow into confident professionals when they receive the right guidance—not shortcuts, not empty promises, but real mentorship backed by experience. That is the purpose behind this agency: to build a space where every student is supported, empowered with clarity, and guided with sincerity from day one.
              </p>
              <p>
                We believe excellence comes from transparency and consistent effort. Every consultation we offer, every decision we help you make, and every piece of advice we give is grounded in real aviation knowledge. Our goal isn't just to help you clear exams. Our goal is to help you become a capable, disciplined pilot who understands the responsibility of commanding an aircraft.
              </p>
              <p>
                Our mission is simple: to help you rise with the same strength and purpose that carried us through the skies. When you begin your journey with truth and professionalism, the horizon opens wider than you can imagine. And through every stage of your training, we stand with you—<span className="text-primary font-bold">EVERY STEP, EVERY FLIGHT, EVERY TAKEOFF, EVERY LANDING</span>—as you rise toward your dream of becoming a professional pilot.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
             <img src={logo} alt="Aeuro Logo" className="h-48 drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-slate-300 text-lg">Get answers to the most common questions about pilot training in Europe.</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-white hover:text-primary text-left py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
