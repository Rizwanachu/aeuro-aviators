import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().optional(),
});

export default function Enquiry() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Construct mailto link
    const subject = encodeURIComponent(`New Enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone}\n` +
      `Interested In: ${values.interest}\n` +
      `Message: ${values.message || "N/A"}`
    );
    
    window.location.href = `mailto:aeuroaviator@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Please send the pre-filled email to complete your enquiry.",
    });
    form.reset();
  }

  return (
    <section id="enquiry" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50 z-0" />
      <div className="absolute -right-40 top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -left-40 bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Start Your <span className="text-accent">Journey</span></h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Ready to take the first step towards the cockpit? Fill out the form and our admission counselors will guide you through the process.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Contact Info</h4>
                  <p className="text-slate-400">Call Us: +91 7994903362</p>
                  <p className="text-slate-400">Whatsapp Enquiry: +48 795742776</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-slate-400">aeuroaviator@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <h3 className="text-2xl font-bold text-white mb-6">Enquiry Form</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-black/20 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-black/20 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 ..." {...field} className="bg-black/20 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Interested In</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" className="bg-slate-900">Select Program</option>
                          <option value="integrated" className="bg-slate-900">Integrated ATPL</option>
                          <option value="modular" className="bg-slate-900">Modular CPL/IR</option>
                          <option value="individual" className="bg-slate-900">Individual Course Training</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific questions?" 
                          {...field} 
                          className="bg-black/20 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20 min-h-[100px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 rounded-lg group">
                  Send Enquiry
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
