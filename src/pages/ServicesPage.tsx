import { motion } from "motion/react";
import { 
  Search, 
  Key, 
  FileText, 
  TrendingUp, 
  Headphones, 
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import serviceBg1 from "../assets/service-bg1.png";
import serviceBg2 from "../assets/service-bg2.png";
import serviceBg3 from "../assets/service-bg3.png";
import serviceBg4 from "../assets/service-bg4.png";

const services = [
  {
    icon: <Search className="text-brand-600" />,
    title: "Traffic Analysis",
    description: "AI-powered traffic analysis tools that provide accurate audience estimates based on real-time data and historical trends.",
    features: ["Audience Insights", "GEO Breakdown", "Quality Scoring"]
  },
  {
    icon: <Key className="text-accent-500" />,
    title: "Campaign Management",
    description: "End-to-end digital campaign management from setup to scaling, including automated optimization and creative testing.",
    features: ["Smart Bidding", "Automated Scaling", "A/B Testing"]
  },
  {
    icon: <FileText className="text-emerald-600" />,
    title: "Ad Creative Studio",
    description: "Generate high-converting ad creatives automatically using pre-approved templates and smart dynamic mapping.",
    features: ["Dynamic Creatives", "Bulk Uploads", "Performance Tracking"]
  },
  {
    icon: <TrendingUp className="text-brand-500" />,
    title: "Revenue Optimization",
    description: "Detailed ROI tracking and portfolio optimization tools to help you make data-driven monetization decisions.",
    features: ["Yield Management", "EPC Tracking", "Smart Refresh"]
  },
  {
    icon: <Headphones className="text-accent-500" />,
    title: "Dedicated Account Managers",
    description: "Expert support and strategic advice to help you scale your campaigns and maximize your returns.",
    features: ["Strategic Planning", "24/7 Support", "Performance Reviews"]
  },
  {
    icon: <Shield className="text-brand-500" />,
    title: "Anti-Fraud System",
    description: "Enterprise-grade security for your ad spend and automated fraud detection to ensure high-quality traffic.",
    features: ["Bot Detection", "Click Validation", "Compliance Monitoring"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-[#050505] dark:text-slate-300 selection:bg-brand-100 selection:text-brand-900 dark:selection:bg-brand-500/30 dark:selection:text-white">
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden bg-white dark:bg-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-600 dark:bg-white/5 dark:border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                Our Expertise
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-[1]"
            >
              Premium <span className="text-gradient">Ad-Tech</span> Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Comprehensive advertising and monetization tools engineered for high-performance digital growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/login"
                className="border border-slate-300 dark:border-white/60 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition text-sm font-semibold"
              >
                Access ERP Login
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-50 dark:bg-[#080808] relative">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-brand-500/30 shadow-sm shadow-slate-200/80 dark:bg-white/5 dark:border-white/5 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-3xl group-hover:bg-brand-500/10 transition-all duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-500">
                    {/* Re-coloring icons to match theme */}
                    {idx === 0 && <Search size={20} className="text-brand-400" />}
                    {idx === 1 && <Key size={20} className="text-indigo-400" />}
                    {idx === 2 && <FileText size={20} className="text-emerald-400" />}
                    {idx === 3 && <TrendingUp size={20} className="text-brand-400" />}
                    {idx === 4 && <Headphones size={20} className="text-indigo-400" />}
                    {idx === 5 && <Shield size={20} className="text-brand-400" />}
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 size={16} className="text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-black group/btn text-[10px] uppercase tracking-widest">
                    Explore Service
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-[1] tracking-tighter">
                  Need a <span className="text-gradient">Custom</span> Solution?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                  We understand that every digital business is unique. Our engineering team can build custom ad formats and deep integrations tailored to your specific traffic needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-blue-600 dark:bg-brand-500 text-white rounded-2xl font-black hover:bg-blue-500 dark:hover:bg-brand-600 transition-all shadow-xl shadow-blue-600/30 dark:shadow-brand-500/20 uppercase tracking-widest text-xs">
                    Book a Consultation
                  </button>
                  <Link
                    to="/"
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[serviceBg1, serviceBg2, serviceBg3, serviceBg4].map((url, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                    className="aspect-square rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                  >
                    <img 
                      src={url} 
                      alt="Service" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}