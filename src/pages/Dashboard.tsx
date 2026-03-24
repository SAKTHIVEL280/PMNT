import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText, Plus, Clock, BarChart3, Folder,
  ArrowRight, PenLine, TrendingUp,
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  folderId: string | null;
  updatedAt: number;
  createdAt: number;
  order: number;
}

interface NoteFolder {
  id: string;
  name: string;
  order: number;
}

function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [folders, setFolders] = useState<NoteFolder[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("pmnt-notes-v2");
    if (raw) setNotes(JSON.parse(raw));
    const rawF = localStorage.getItem("pmnt-folders");
    if (rawF) setFolders(JSON.parse(rawF));
  }, []);

  const recentNotes = useMemo(
    () => [...notes].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 6),
    [notes]
  );

  const stats = useMemo(() => {
    const totalWords = notes.reduce((s, n) => s + wordCount(n.content), 0);
    const totalChars = notes.reduce((s, n) => s + n.content.length, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayNotes = notes.filter((n) => n.updatedAt >= today.getTime()).length;
    return { totalWords, totalChars, totalNotes: notes.length, totalFolders: folders.length, todayNotes };
  }, [notes, folders]);

  const handleNewNote = () => {
    navigate("/editor");
  };

  const handleOpenNote = (noteId: string) => {
    navigate(`/editor?note=${noteId}`);
  };

  const getFolderName = (folderId: string | null) => {
    if (!folderId) return "Unfiled";
    return folders.find((f) => f.id === folderId)?.name ?? "Unfiled";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {stats.totalNotes === 0
                  ? "Start capturing your thoughts."
                  : `You have ${stats.totalNotes} note${stats.totalNotes === 1 ? "" : "s"} across ${stats.totalFolders} folder${stats.totalFolders === 1 ? "" : "s"}.`}
              </p>
            </div>
            <Button
              onClick={handleNewNote}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full px-6"
            >
              <Plus className="w-4 h-4" />
              New Note
            </Button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Total Notes", value: stats.totalNotes, icon: FileText },
              { label: "Total Words", value: stats.totalWords.toLocaleString(), icon: PenLine },
              { label: "Folders", value: stats.totalFolders, icon: Folder },
              { label: "Edited Today", value: stats.todayNotes, icon: TrendingUp },
            ].map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <s.icon className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{s.label}</span>
                </div>
                <span className="text-2xl font-serif font-bold text-foreground">{s.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Recent Notes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl font-semibold text-foreground">Recent Notes</h2>
              {notes.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/editor")}
                  className="text-muted-foreground hover:text-foreground gap-1 text-xs"
                >
                  View all <ArrowRight className="w-3 h-3" />
                </Button>
              )}
            </div>

            {recentNotes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
                <FileText className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm mb-4">No notes yet. Start writing!</p>
                <Button
                  onClick={handleNewNote}
                  variant="outline"
                  className="rounded-full gap-2"
                >
                  <Plus className="w-4 h-4" /> Create your first note
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentNotes.map((note, i) => (
                  <motion.button
                    key={note.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    onClick={() => handleOpenNote(note.id)}
                    className="group text-left rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-foreground text-sm truncate pr-2 group-hover:text-primary transition-colors">
                        {note.title || "Untitled"}
                      </h3>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                    </div>
                    <p className="text-muted-foreground text-xs line-clamp-3 leading-relaxed mb-4">
                      {note.content.slice(0, 140) || "Empty note"}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {timeAgo(note.updatedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        {wordCount(note.content)}w
                      </span>
                      <span className="flex items-center gap-1">
                        <Folder className="w-3 h-3" />
                        {getFolderName(note.folderId)}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            <Button
              variant="outline"
              onClick={() => navigate("/editor")}
              className="rounded-full gap-2 text-xs border-border hover:border-primary/30"
            >
              <PenLine className="w-3.5 h-3.5" /> Open Editor
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/tutorial")}
              className="rounded-full gap-2 text-xs border-border hover:border-primary/30"
            >
              <FileText className="w-3.5 h-3.5" /> Markdown Guide
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
