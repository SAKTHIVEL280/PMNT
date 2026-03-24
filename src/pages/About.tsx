import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Target, Sparkles, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  { icon: Target, title: "Focus", description: "We build tools that help you concentrate on what matters — your writing." },
  { icon: Sparkles, title: "Craft", description: "Every pixel, every interaction is considered. Good tools should feel invisible." },
  { icon: Heart, title: "Simplicity", description: "Powerful doesn't mean complicated. The best features are the ones you barely notice." },
  { icon: Users, title: "Community", description: "PMNT grows with its users. Your feedback shapes every update we ship." },
];

const timeline = [
  { year: "2024 Q1", event: "Idea born — frustration with bloated note apps" },
  { year: "2024 Q2", event: "First prototype built with split-pane preview" },
  { year: "2024 Q3", event: "Public beta launch — 1,000 users in first week" },
  { year: "2024 Q4", event: "Zen mode, keyboard shortcuts, and export added" },
  { year: "2025 Q1", event: "Pro tier launched with cloud sync" },
  { year: "2025 Q2", event: "Team collaboration features released" },
];

const team = [
  { name: "Alex Morgan", role: "Founder & Lead Developer", initial: "AM" },
  { name: "Jordan Lee", role: "Design Lead", initial: "JL" },
  { name: "Sam Rivera", role: "Product & Community", initial: "SR" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-sm font-medium text-accent tracking-widest uppercase mb-6"
          >
            About PMNT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
          >
            We believe writing{" "}
            <span className="italic text-accent">deserves</span>{" "}
            better tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            PMNT was born from a simple frustration: every note-taking app felt either too bloated or too basic. We set out to build the tool we wished existed.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl md:text-4xl font-semibold">
              What drives us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-5 p-6 rounded-xl border border-border/50 bg-background"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              The Team
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold">
              Small team, big ambition
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-semibold text-accent">{t.initial}</span>
                </div>
                <h3 className="font-medium text-lg">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Journey
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold">
              How we got here
            </motion.h2>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-6 py-5"
              >
                <div className="w-24 shrink-0">
                  <span className="text-sm font-mono font-medium text-accent">{t.year}</span>
                </div>
                <div className="flex-1 border-l border-border pl-6 relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent" />
                  <p className="text-sm">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Get in touch</h2>
          <p className="text-muted-foreground mb-8">
            Have feedback, ideas, or just want to say hello? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@pmnt.app"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            hello@pmnt.app
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
