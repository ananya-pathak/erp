import { motion, useScroll, useTransform } from "motion/react";
import {
  Building2,
  Users,
  BarChart3,
  ShieldCheck,
  LayoutDashboard,
  MessageSquare,
  Wallet,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Star,
  Play,
  Globe,
  Zap,
  Clock,
  Smartphone,
  Layers,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import landingBg from "./assets/landingpage-bg.png";
import landingBg1 from "./assets/landing-bg1.png"
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-500/10 blur-[150px] rounded-full" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#3b82f6 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-600 dark:bg-white/5 dark:border-white/10 dark:text-brand-400 text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              <Zap size={14} fill="currentColor" />
              Next-Gen Ad Tech
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-slate-900 dark:text-white">
              Scale <span className="text-gradient">Profits</span> <br />
              <span className="text-slate-500 dark:text-slate-400">
                Faster.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              The world's most advanced traffic monetization platform. Built for
              advertisers who demand performance and publishers who want more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 dark:bg-brand-600 text-white rounded-full font-black text-sm hover:bg-blue-500 dark:hover:bg-brand-500 transition-all shadow-[0_12px_30px_rgba(37,99,235,0.35)] active:scale-95 uppercase tracking-widest">
                Start Advertising
              </button>
              <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-black text-sm hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest">
                Monetize Traffic
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative w-full aspect-square max-w-[650px] mx-auto">
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotateZ: [0, 3, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-[95%] aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-transparent">
                    <img
                      src={landingBg}
                      alt="Anquest Performance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#050505]/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Floating Dynamic Nodes */}
                {[
                  {
                    top: "5%",
                    left: "15%",
                    delay: 0,
                    icon: <TrendingUp size={24} />,
                    label: "ROI +450%",
                    color: "bg-pink-500 dark:bg-brand-600",
                  },
                  {
                    top: "15%",
                    right: "5%",
                    delay: 1,
                    icon: <Globe size={24} />,
                    label: "Global Reach",
                    color: "bg-accent-500",
                  },
                  {
                    bottom: "10%",
                    left: "10%",
                    delay: 2,
                    icon: <ShieldCheck size={24} />,
                    label: "Fraud Free",
                    color: "bg-emerald-600",
                  },
                  {
                    bottom: "20%",
                    right: "15%",
                    delay: 1.5,
                    icon: <Zap size={24} />,
                    label: "Instant Delivery",
                    color: "bg-amber-500",
                  },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.2 + node.delay,
                      duration: 0.8,
                      type: "spring",
                    }}
                    className={`absolute z-20`}
                    style={{
                      top: node.top,
                      bottom: node.bottom,
                      left: node.left,
                      right: node.right,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`${node.color} text-slate-900 dark:text-white p-5 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col items-center gap-2 border border-white/20`}
                    >
                      {node.icon}
                      <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        {node.label}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Central Branding */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white text-black px-10 py-4 rounded-full font-black text-2xl shadow-[0_0_60px_rgba(255,255,255,0.3)] uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-3"
                >
                  <Building2 size={28} />
                  Anquest
                </motion.div>
              </div>
            </div>

            {/* Dramatic background glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#080808] border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-16">
          Powering the world's leading brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-70 dark:opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {["AdRoll", "Taboola", "Outbrain", "Criteo", "Propeller"].map(
            (brand) => (
              <div key={brand} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-slate-700 dark:text-white font-black text-xs border border-slate-200 dark:border-white/10">
                  {brand[0]}
                </div>
                <span className="text-2xl font-black font-display text-slate-900 dark:text-white tracking-tighter uppercase italic">
                  {brand}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      label: "Active Advertisers",
      value: "25K+",
      icon: <Users className="text-brand-400" size={24} />,
    },
    {
      label: "Premium Publishers",
      value: "10K+",
      icon: <Globe className="text-accent-500" size={24} />,
    },
    {
      label: "Daily Impressions",
      value: "2B+",
      icon: <BarChart3 className="text-emerald-400" size={24} />,
    },
    {
      label: "Global Reach",
      value: "190+",
      icon: <Zap className="text-amber-400" size={24} />,
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-5 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-md shadow-slate-200/80 dark:shadow-2xl dark:shadow-black">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard className="text-brand-400" />,
      title: "Real-time Analytics",
      description:
        "Comprehensive overview of your campaign performance, conversion rates, and ROI at a glance.",
    },
    {
      icon: <Users className="text-accent-500" />,
      title: "Publisher Portal",
      description:
        "Advanced tools for publishers to manage ad zones, track earnings, and optimize traffic monetization.",
    },
    {
      icon: <Wallet className="text-emerald-400" />,
      title: "Automated Payouts",
      description:
        "Fast and reliable automated payment systems supporting multiple methods and currencies globally.",
    },
    {
      icon: <ShieldCheck className="text-amber-400" />,
      title: "Fraud Protection",
      description:
        "Enterprise-grade anti-fraud systems to ensure high-quality traffic and protect your ad spend.",
    },
    {
      icon: <MessageSquare className="text-pink-400" />,
      title: "Advertiser Tools",
      description:
        "Powerful self-service platform to launch, manage, and scale your advertising campaigns efficiently.",
    },
    {
      icon: <BarChart3 className="text-brand-500" />,
      title: "Smart Targeting",
      description:
        "Advanced targeting options including GEO, device, OS, browser, and interest-based segments.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-slate-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-4">
            Powerful Features
          </h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
            Everything you need to{" "}
            <span className="text-gradient">scale faster</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed">
            Our platform is engineered for high-performance advertising and
            traffic monetization at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.15)] dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h4 className="text-lg font-black mb-3 text-slate-900 dark:text-white uppercase tracking-tight">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Go to Services Page",
      description:
        "Quick sign-up process and seamless integration with our easy-to-use platform.",
    },
    {
      title: "Click to Access ERP Login",
      description: "This is for ERP login access.",
    },
    {
      title: "LOGIN or REGISTER to Dashboard",
      description:
        "Access your personalized dashboard to manage and optimize your advertising campaigns.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-4">
              How it Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white leading-tight">
              From setup to <span className="text-gradient">success</span>{" "}
              <br /> in 3 steps
            </h3>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-[16px] bg-blue-600 dark:bg-brand-600 text-white dark:text-white font-black flex items-center justify-center text-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 px-8 py-4 bg-blue-600 dark:bg-brand-600 text-white rounded-full font-black text-sm hover:bg-blue-700 dark:hover:bg-brand-700 hover:text-white transition-all flex items-center gap-2 shadow-[0_18px_40px_rgba(37,99,235,0.4)] uppercase tracking-widest">
              Start Your Journey
              <ChevronRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[80px] overflow-hidden shadow-[0_80px_150px_-40px_rgba(0,0,0,0.8)] border border-white/10">
              <img
                src={landingBg1}
                alt="Growth Success"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 rounded-[40px] shadow-2xl max-w-sm border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-emerald-500 dark:text-emerald-400 font-black mb-4 text-xl">
                <CheckCircle2 size={28} />
                <span>99.9% Smooth Operations </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Smart internal management solutions designed to streamline real
                estate operations, agent coordination, and property sales
                workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
            Trusted by Industry <span className="text-gradient">Leaders</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Thompson",
              role: "Founder, AdVantage Agency",
              text: "Anquest has completely transformed our media buying strategy. The traffic quality is exceptional and the ROI is consistently high.",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            },
            {
              name: "Maria Chen",
              role: "Publisher, TechWorld Media",
              text: "The monetization tools are incredible. We've seen a 45% increase in our ad revenue since switching to this platform.",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
            },
            {
              name: "James Wilson",
              role: "Marketing Director, Global Brands",
              text: "The dedicated support team is world-class. They helped us optimize our campaigns and achieve our targets in record time.",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.08] transition-all duration-500 shadow-lg shadow-slate-200/70 dark:shadow-[0_16px_35px_rgba(0,0,0,0.55)]"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-8 flex-grow text-sm font-medium leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-brand-500 shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small agencies managing up to 50 units.",
      features: [
        "Up to 50 Units",
        "Basic CRM",
        "Maintenance Tracking",
        "Standard Reports",
        "Email Support",
      ],
      button: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing property management firms.",
      features: [
        "Up to 250 Units",
        "Advanced CRM",
        "Financial Automation",
        "Custom Reporting",
        "Priority Support",
        "Mobile App Access",
      ],
      button: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale developers.",
      features: [
        "Unlimited Units",
        "Full ERP Suite",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations",
        "On-site Training",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-4">
            Pricing Plans
          </h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base font-medium">
            Choose the plan that fits your current needs and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[40px] flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? "bg-brand-50 text-slate-900 border border-brand-200 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.35)] md:scale-105 z-10 dark:bg-brand-600 dark:text-white dark:border-transparent"
                  : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)] dark:hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]"
              }`}
            >
              <div className="mb-8">
                <h4
                  className={`text-xl font-black mb-3 uppercase tracking-tight ${
                    plan.highlight
                      ? "text-brand-600 dark:text-white"
                      : "text-brand-600"
                  }`}
                >
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? "text-brand-200" : "text-slate-500"}`}
                    >
                      /month
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed font-medium ${
                    plan.highlight
                      ? "text-slate-800 dark:text-slate-100"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2
                      size={18}
                      className={
                        plan.highlight
                          ? "text-black dark:text-white"
                          : "text-brand-500"
                      }
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-black dark:text-white"
                          : "text-slate-700 dark:text-slate-100"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-black text-sm transition-all uppercase tracking-widest ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-slate-900 shadow-xl shadow-slate-700/40 dark:bg-white dark:text-brand-500 dark:hover:bg-brand-50"
                    : "bg-blue-600 dark:bg-brand-600 text-white hover:bg-blue-500 dark:hover:bg-brand-500 shadow-xl shadow-brand-600/20"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[60px] bg-brand-500 overflow-hidden p-12 lg:p-24 text-center text-white shadow-[0_50px_100px_-30px_rgba(37,99,235,0.4)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-white blur-[150px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-white blur-[150px] rounded-full" />
          </div>

          <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10 tracking-tighter leading-[1]">
            Ready to maximize your <br className="hidden md:block" /> traffic
            potential?
          </h3>
          <p className="text-lg text-slate-100 mb-12 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
            Join 500+ companies already using Anquest to scale their advertising
            and maximize their returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-10 py-4 bg-white text-brand-500 rounded-full font-black text-sm hover:bg-slate-100 transition-all shadow-2xl active:scale-95 uppercase tracking-widest">
              Get Started Now
            </button>
            <button className="px-10 py-4 bg-transparent text-white border-2 border-white/70 rounded-full font-black text-sm hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      {/* <Stats /> */}
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CTA />
    </div>
  );
}