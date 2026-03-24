import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Split, Keyboard, Download, FolderOpen, Zap, Check,
  ArrowRight, Pen, Shield, Tag, Pin, Archive,
  Command, FileText, Sparkles, ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  { icon: Split, title: "Live Split Preview", description: "Write markdown on the left, see it rendered beautifully on the right." },
  { icon: Keyboard, title: "Keyboard-First", description: "Ctrl+B, Ctrl+I, and dozens more. Your fingers never leave the keyboard." },
  { icon: FolderOpen, title: "Folders & Organization", description: "Drag-and-drop notes into folders. Rename, nest, and reorganize." },
  { icon: Tag, title: "Tags & Filters", description: "Color-coded tags to categorize. Filter your sidebar instantly." },
  { icon: Pin, title: "Pin & Favorites", description: "Pin important notes to the top. Never lose track of what matters." },
  { icon: Command, title: "Command Palette", description: "Ctrl+K to search notes, switch folders, and trigger any action." },
  { icon: Archive, title: "Trash & Restore", description: "Soft-delete with a recoverable trash bin. Nothing is lost forever." },
  { icon: Download, title: "Export Anywhere", description: "Download as .md, .html, or print to PDF. Your data is always yours." },
  { icon: Zap, title: "Zen Mode", description: "Distraction-free fullscreen. Just you and a beautiful writing canvas." },
  { icon: Pen, title: "Rich Formatting", description: "Tables, code blocks, task lists, blockquotes — full GFM support." },
  { icon: FileText, title: "Templates", description: "Meeting notes, journal, project plan — start from pre-built templates." },
  { icon: Shield, title: "Privacy-First", description: "Everything lives in your browser. No accounts, no cloud, no tracking." },
];

const stats = [
  { value: "12+", label: "Power features" },
  { value: "0", label: "Accounts needed" },
  { value: "∞", label: "Notes allowed" },
  { value: "100%", label: "Open source" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.07] blur-[200px]" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-accent/[0.04] blur-[100px]" />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[8%] w-20 h-20 rounded-2xl border border-accent/10 bg-accent/[0.03] backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[25%] right-[12%] w-14 h-14 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[22%] right-[8%] w-16 h-16 rounded-full border border-accent/10 bg-accent/[0.02] hidden lg:block"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/20 bg-accent/[0.06] backdrop-blur-sm mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent tracking-wide">Free & Open Source</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold leading-[1.02] tracking-[-0.03em] mb-8"
          >
            Your thoughts,
            <br />
            <span className="relative">
              <span className="italic text-accent">beautifully</span>
              {/* Underline decoration */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/30 origin-left rounded-full"
              />
            </span>{" "}
            organized.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            A premium markdown editor crafted for focus. Write, preview, and organize
            your notes with an interface that stays out of your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-20"
          >
            <Link to="/editor">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-9 h-13 text-sm font-medium rounded-2xl shadow-xl shadow-foreground/10 group">
                Start Writing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/tutorial">
              <Button size="lg" variant="outline" className="px-9 h-13 text-sm font-medium rounded-2xl border-border/60 hover:border-foreground/20">
                Learn Markdown
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="inline-flex items-center gap-8 md:gap-12 px-8 py-5 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="text-center flex items-center gap-8">
                <div>
                  <p className="text-xl md:text-2xl font-serif font-bold text-foreground">{s.value}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-border/40" />}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-foreground/15 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-foreground/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ EDITOR PREVIEW ═══ */}
      <section className="px-6 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Layered shadow/glow */}
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-b from-accent/[0.08] to-primary/[0.03] blur-3xl" />
            <div className="absolute -inset-1 -z-10 rounded-[24px] bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />

            <div className="rounded-2xl border border-border/50 bg-card overflow-hidden shadow-[0_40px_100px_-30px] shadow-foreground/[0.12]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/50 bg-gradient-to-r from-muted/40 to-muted/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-foreground/[0.07] ring-1 ring-foreground/[0.05]" />
                  <div className="w-3 h-3 rounded-full bg-foreground/[0.07] ring-1 ring-foreground/[0.05]" />
                  <div className="w-3 h-3 rounded-full bg-foreground/[0.07] ring-1 ring-foreground/[0.05]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] text-muted-foreground font-mono px-4 py-1 rounded-lg bg-foreground/[0.03] border border-border/30">
                    meeting-notes.md
                  </span>
                </div>
                <div className="w-[54px]" />
              </div>
              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
                <div className="p-6 md:p-8 font-mono text-[12px] md:text-[13px] text-muted-foreground leading-[2] bg-gradient-to-b from-background to-card/50">
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
                <div className="p-6 md:p-8 text-[12px] md:text-[13px] leading-[2] bg-gradient-to-b from-card/80 to-card/30">
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
      <section className="px-6 py-16 md:py-28 relative">
        {/* Section background */}
        <div className="absolute inset-0 bg-foreground/[0.02]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/15 bg-accent/[0.04] mb-6">
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold text-accent tracking-[0.15em] uppercase">Features</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-5 tracking-[-0.02em]">
              Everything you need,
              <br className="hidden md:block" />
              <span className="italic text-accent/80"> nothing you don't</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Built for writers who demand precision and elegance.
            </motion.p>
          </motion.div>

          {/* Bento grid with varied sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              // First row: 2 wide cards. Rest: regular
              const isWide = i < 2;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm overflow-hidden
                    hover:border-accent/30 transition-all duration-500
                    ${isWide ? "lg:col-span-2 p-8" : "p-6"}
                  `}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className={`${isWide ? "w-12 h-12" : "w-10 h-10"} rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-500`}>
                      <feature.icon className={`${isWide ? "h-5 w-5" : "h-[18px] w-[18px]"} text-accent`} />
                    </div>
                    <h3 className={`font-serif ${isWide ? "text-lg" : "text-base"} font-semibold mb-2 tracking-[-0.01em]`}>{feature.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOW ═══ */}
      <section className="px-6 py-16 md:py-28 relative overflow-hidden">
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/15 bg-accent/[0.04] mb-6">
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold text-accent tracking-[0.15em] uppercase">Workflow</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              Three steps to clarity
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Open & Write",
                desc: "No sign-up. No setup. Just open the editor and start typing. Auto-save handles the rest.",
                gradient: "from-accent/[0.06] to-transparent",
              },
              {
                step: "02",
                title: "Organize & Tag",
                desc: "Create folders, drag notes around, add colored tags. Find anything with search or Ctrl+K.",
                gradient: "from-primary/[0.04] to-transparent",
              },
              {
                step: "03",
                title: "Export & Share",
                desc: "Download as Markdown, HTML, or print to PDF. Your notes are always portable.",
                gradient: "from-accent/[0.05] to-transparent",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-border/40 overflow-hidden hover:border-accent/25 transition-all duration-500"
              >
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} />

                <div className="relative z-10 p-8 md:p-10">
                  {/* Big step number */}
                  <span className="font-serif text-[5rem] md:text-[6rem] font-bold leading-none text-foreground/[0.03] group-hover:text-accent/[0.08] transition-colors duration-700 block -mb-6">
                    {item.step}
                  </span>
                  <span className="inline-block text-[10px] font-semibold text-accent tracking-[0.15em] uppercase mb-3">Step {item.step}</span>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">{item.desc}</p>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Dark card bg */}
            <div className="absolute inset-0 bg-foreground" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `radial-gradient(hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }} />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-[80px]" />

            <div className="relative z-10 p-10 md:p-16 text-background text-center">
              <p className="text-[10px] font-semibold text-accent tracking-[0.2em] uppercase mb-5">Open Source</p>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-5 tracking-[-0.02em]">
                100% free. Forever.
              </h2>
              <p className="text-background/50 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                No accounts, no subscriptions, no tracking. Your notes stay on your device — private by default.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-background/60">
                {["Unlimited notes", "All features", "No account", "Privacy-first", "Works offline"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 py-20 md:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[150px]" />
        </div>

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
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-10 h-13 text-sm font-medium rounded-2xl shadow-xl shadow-foreground/10 group">
                Open Editor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
