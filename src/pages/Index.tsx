import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Split, Keyboard, Download, FolderOpen, Zap, Check,
  ArrowRight, Star, Pen, Shield, Tag, Pin, Archive,
  Command, FileText, Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const features = [
  {
    icon: Split,
    title: "Live Split Preview",
    description: "Write markdown on the left, see it rendered beautifully on the right.",
  },
  {
    icon: Keyboard,
    title: "Keyboard-First",
    description: "Ctrl+B, Ctrl+I, and dozens more. Your fingers never leave the keyboard.",
  },
  {
    icon: FolderOpen,
    title: "Folders & Organization",
    description: "Drag-and-drop notes into folders. Rename, nest, and reorganize effortlessly.",
  },
  {
    icon: Tag,
    title: "Tags & Filters",
    description: "Color-coded tags to categorize. Filter your sidebar instantly.",
  },
  {
    icon: Pin,
    title: "Pin & Favorites",
    description: "Pin important notes to the top. Never lose track of what matters.",
  },
  {
    icon: Command,
    title: "Command Palette",
    description: "Ctrl+K to search notes, switch folders, and trigger any action.",
  },
  {
    icon: Archive,
    title: "Trash & Restore",
    description: "Soft-delete with a recoverable trash bin. Nothing is lost forever.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download as .md, .html, or print to PDF. Your data is always yours.",
  },
  {
    icon: Zap,
    title: "Zen Mode",
    description: "Distraction-free fullscreen. Just you and a beautiful writing canvas.",
  },
  {
    icon: Pen,
    title: "Rich Formatting",
    description: "Tables, code blocks, task lists, blockquotes — full GFM support.",
  },
  {
    icon: FileText,
    title: "Templates",
    description: "Meeting notes, journal, project plan — start from pre-built templates.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Everything lives in your browser. No accounts, no cloud, no tracking.",
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

const stats = [
  { value: "12+", label: "Power features" },
  { value: "0", label: "Accounts needed" },
  { value: "∞", label: "Notes allowed" },
  { value: "100%", label: "Free & open source" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      {/* Ambient background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[150px]" />
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[40%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[130px]" />
      </div>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative pt-36 pb-8 md:pt-48 md:pb-16 px-6 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent tracking-wide">Free & Open Source</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.03] tracking-[-0.02em] mb-6"
          >
            Your thoughts,
            <br />
            <span className="italic text-accent">beautifully</span> organized.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            A premium markdown editor crafted for focus. Write, preview, and organize
            your notes with an interface that stays out of your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
          >
            <Link to="/editor">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-sm font-medium rounded-xl shadow-lg shadow-foreground/10 group">
                Start Writing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link to="/tutorial">
              <Button size="lg" variant="outline" className="px-8 h-12 text-sm font-medium rounded-xl border-border/60">
                Learn Markdown
              </Button>
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">{s.value}</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ EDITOR PREVIEW ═══ */}
      <section className="px-6 pb-20 md:pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-accent/[0.08] blur-[60px] scale-[1.05]" />
            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-[0_30px_80px_-20px] shadow-foreground/[0.1]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-muted-foreground font-mono px-3 py-0.5 rounded-md bg-foreground/[0.04]">meeting-notes.md</span>
                </div>
                <div className="w-[54px]" />
              </div>
              {/* Editor content */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
                <div className="p-6 md:p-7 font-mono text-[12px] md:text-[13px] text-muted-foreground leading-[1.9]">
                  <p className="text-foreground/80"># Meeting Notes</p>
                  <p className="mt-3">## Key Decisions</p>
                  <p className="mt-2">- Launch date set for **March 15th**</p>
                  <p>- Budget approved for Q2 campaign</p>
                  <p>- New hire starts *next Monday*</p>
                  <p className="mt-3">## Action Items</p>
                  <p className="mt-2">1. Finalize design mockups</p>
                  <p>2. Review analytics dashboard</p>
                  <p>3. Schedule team retrospective</p>
                  <p className="mt-3">{"> Great meeting, team! 🎉"}</p>
                </div>
                <div className="p-6 md:p-7 text-[12px] md:text-[13px] leading-[1.9]">
                  <h1 className="font-serif text-xl md:text-2xl font-bold mb-4 text-foreground">Meeting Notes</h1>
                  <h2 className="font-serif text-sm md:text-base font-bold mb-2 text-foreground/90">Key Decisions</h2>
                  <ul className="list-disc pl-5 mb-4 space-y-1 text-foreground/80">
                    <li>Launch date set for <strong className="text-foreground">March 15th</strong></li>
                    <li>Budget approved for Q2 campaign</li>
                    <li>New hire starts <em>next Monday</em></li>
                  </ul>
                  <h2 className="font-serif text-sm md:text-base font-bold mb-2 text-foreground/90">Action Items</h2>
                  <ol className="list-decimal pl-5 mb-4 space-y-1 text-foreground/80">
                    <li>Finalize design mockups</li>
                    <li>Review analytics dashboard</li>
                    <li>Schedule team retrospective</li>
                  </ol>
                  <blockquote className="border-l-[3px] border-accent pl-4 italic text-muted-foreground">
                    Great meeting, team! 🎉
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ FEATURES — Bento Grid ═══ */}
      <section className="px-6 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase mb-4">
              Features
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-5 tracking-[-0.01em]">
              Everything you need,
              <br className="hidden md:block" />
              <span className="italic"> nothing you don't</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Built for writers who demand precision and elegance in their tools.
            </motion.p>
          </motion.div>

          {/* Bento layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature, i) => {
              // Make first two cards span wider on large screens
              const isHero = i < 2;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  custom={i}
                  className={`group relative p-6 md:p-7 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden
                    hover:border-accent/30 hover:shadow-xl hover:shadow-accent/[0.06] transition-all duration-500
                    ${isHero ? "lg:col-span-1" : ""}
                  `}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="h-[18px] w-[18px] text-accent" />
                    </div>
                    <h3 className="font-serif text-base font-semibold mb-2 tracking-[-0.01em]">{feature.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ WORKFLOW SHOWCASE ═══ */}
      <section className="px-6 py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase mb-4">
              Workflow
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em]">
              Three steps to clarity
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Open & Write",
                desc: "No sign-up. No setup. Just open the editor and start typing markdown. Auto-save handles the rest.",
              },
              {
                step: "02",
                title: "Organize & Tag",
                desc: "Create folders, drag notes around, add colored tags. Find anything instantly with search or Ctrl+K.",
              },
              {
                step: "03",
                title: "Export & Share",
                desc: "Download as Markdown, HTML, or print to PDF. Your notes are always portable and yours to keep.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative p-8 rounded-2xl border border-border/40 bg-card/40 group hover:border-accent/20 transition-all duration-500"
              >
                <span className="font-serif text-6xl font-bold text-foreground/[0.04] absolute top-4 right-6 group-hover:text-accent/10 transition-colors duration-500">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-semibold text-accent tracking-[0.15em] uppercase mb-4">Step {item.step}</span>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em]">
              Loved by writers
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-7 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.04] transition-all duration-500"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-[1.7] mb-6 text-foreground/85 font-light italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OPEN SOURCE BANNER ═══ */}
      <section className="px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] via-background to-primary/[0.04] overflow-hidden p-10 md:p-16"
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/[0.06] blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-primary/[0.04] blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.p variants={fadeUp} custom={0} className="text-[11px] font-semibold text-accent tracking-[0.2em] uppercase mb-4">
                Open Source
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl font-semibold mb-5 tracking-[-0.01em]">
                100% free. Forever.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                No accounts, no subscriptions, no tracking. Your notes stay on your device — private by default.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-foreground/70">
                {["Unlimited notes", "All features included", "No account required", "Privacy-first", "Works offline"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 py-16 md:py-24 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-[-0.02em]">
            Ready to write?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-base mb-10 max-w-md mx-auto leading-relaxed">
            No sign-up required. Open the editor and start writing immediately.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/editor">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-10 h-12 text-sm font-medium rounded-xl shadow-lg shadow-foreground/10 group">
                Open Editor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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
