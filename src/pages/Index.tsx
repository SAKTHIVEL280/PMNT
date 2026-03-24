import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Split,
  Keyboard,
  Download,
  FolderOpen,
  Zap,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const features = [
  {
    icon: Split,
    title: "Live Split Preview",
    description: "Write markdown on the left, see it rendered beautifully on the right. Resize panes to your preference.",
  },
  {
    icon: Keyboard,
    title: "Keyboard-First Design",
    description: "Ctrl+B for bold, Ctrl+I for italic, and dozens more shortcuts. Your fingers never leave the keyboard.",
  },
  {
    icon: FolderOpen,
    title: "Organized Notes",
    description: "Create, search, and manage unlimited notes. Everything auto-saves locally — no account needed.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download any note as a clean .md file. Your data is always yours to keep and move.",
  },
  {
    icon: Zap,
    title: "Zen Mode",
    description: "Distraction-free fullscreen writing. Just you, your thoughts, and a beautiful canvas.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Technical Writer",
    quote: "PMNT replaced three different apps for me. The split preview alone is worth it.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Software Engineer",
    quote: "Finally, a markdown editor that feels premium without the bloat. Keyboard shortcuts are chef's kiss.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Content Strategist",
    quote: "I use PMNT daily for all my content drafts. The zen mode is incredibly productive.",
    rating: 5,
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Unlimited notes", "Split preview", "Basic shortcuts", "Local storage", "Export to .md"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious writers",
    features: ["Everything in Free", "Cloud sync", "Custom themes", "Priority support", "Advanced shortcuts", "Version history"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$24",
    period: "/month",
    description: "Collaborate beautifully",
    features: ["Everything in Pro", "Shared workspaces", "Team management", "API access", "SSO integration", "Dedicated support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent tracking-widest uppercase mb-6"
          >
            Personal Markdown Note Taker
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8"
          >
            Your thoughts,{" "}
            <span className="italic text-accent">beautifully</span>{" "}
            organized.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A premium markdown editor crafted for focus. Write, preview, and organize
            your notes with an interface that stays out of your way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/editor">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-12 text-base font-medium">
                Open Editor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/tutorial">
              <Button size="lg" variant="outline" className="px-8 h-12 text-base font-medium">
                Learn Markdown
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Editor Preview */}
      <section className="px-6 pb-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/30" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">untitled.md</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="p-6 font-mono text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground"># Meeting Notes</p>
                <p className="mt-2">## Key Decisions</p>
                <p className="mt-2">- Launch date set for **March 15th**</p>
                <p>- Budget approved for Q2 campaign</p>
                <p>- New hire starts *next Monday*</p>
                <p className="mt-2">## Action Items</p>
                <p className="mt-2">1. Finalize design mockups</p>
                <p>2. Review analytics dashboard</p>
                <p>3. Schedule team retrospective</p>
                <p className="mt-2">{"> Great meeting, team! 🎉"}</p>
              </div>
              <div className="p-6 text-sm leading-relaxed">
                <h1 className="font-serif text-2xl font-bold mb-3">Meeting Notes</h1>
                <h2 className="font-serif text-lg font-bold mb-2">Key Decisions</h2>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li>Launch date set for <strong>March 15th</strong></li>
                  <li>Budget approved for Q2 campaign</li>
                  <li>New hire starts <em>next Monday</em></li>
                </ul>
                <h2 className="font-serif text-lg font-bold mb-2">Action Items</h2>
                <ol className="list-decimal pl-5 mb-3 space-y-1">
                  <li>Finalize design mockups</li>
                  <li>Review analytics dashboard</li>
                  <li>Schedule team retrospective</li>
                </ol>
                <blockquote className="border-l-4 border-accent pl-3 italic text-muted-foreground">
                  Great meeting, team! 🎉
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 md:py-36 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Features
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Everything you need,{" "}
              <span className="italic">nothing you don't</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-xl mx-auto">
              Built for writers who demand precision and elegance in their tools.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group p-8 rounded-xl border border-border/50 bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold">
              Loved by writers
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-8 rounded-xl border border-border/50 bg-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-foreground/90">"{t.quote}"</p>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 md:py-36 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Pricing
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg">
              Start free. Upgrade when you're ready.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`p-8 rounded-xl border ${
                  tier.highlighted
                    ? "border-accent bg-background shadow-xl shadow-accent/10 relative"
                    : "border-border/50 bg-background"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <Button
                  className={`w-full mb-6 ${
                    tier.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Ready to write?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-8">
            No sign-up required. Open the editor and start writing immediately.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/editor">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-12 text-base font-medium">
                Open Editor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
