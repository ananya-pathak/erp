import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Target, Rocket, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-[#050505] dark:text-slate-300 selection:bg-brand-100 selection:text-brand-900 dark:selection:bg-brand-500/30 dark:selection:text-white">
     
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden bg-white dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight"
            >
              About <span className="text-gradient">Anquest</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              We are a team of ad-tech enthusiasts dedicated to building the most transparent and efficient advertising ecosystem for the modern web.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-slate-50 dark:bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-black mb-6 text-slate-900 dark:text-white uppercase tracking-tight">Our Mission</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  At Anquest, our mission is to empower digital businesses by providing them with the tools and traffic they need to scale globally. We believe in performance-driven results and absolute transparency.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Founded in 2020, we've grown from a small startup to a global ad network serving billions of impressions daily across 190+ countries.
                </p>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users className="text-brand-500" />, title: "Expert Team" },
                  { icon: <Target className="text-indigo-500" />, title: "Precision" },
                  { icon: <Rocket className="text-emerald-500" />, title: "Growth" },
                  { icon: <Shield className="text-brand-500" />, title: "Security" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm shadow-slate-200/80 dark:bg-white/5 dark:border-white/5"
                  >
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-black mb-12 text-center text-slate-900 dark:text-white uppercase tracking-tight">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  desc: "No hidden fees, no black-box algorithms. Just pure data and performance."
                },
                {
                  title: "Innovation",
                  desc: "We constantly push the boundaries of ad-tech to provide cutting-edge solutions."
                },
                {
                  title: "Customer Success",
                  desc: "Your growth is our growth. We are committed to your long-term success."
                }
              ].map((value, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm shadow-slate-200/80 dark:bg-white/5 dark:border-white/5"
                >
                  <h3 className="text-lg font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    
    </div>
  );
}