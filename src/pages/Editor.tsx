import { useState, useCallback, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered,
  Code, Link as LinkIcon, Image, Table, Quote, Minus, Download,
  Plus, Search, Trash2, FileText, Maximize, Minimize,
  ChevronLeft, ChevronRight, AlignLeft,
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
  createdAt: number;
}

const DEFAULT_CONTENT = `# Welcome to PMNT

Start writing your markdown here. Use the toolbar above or keyboard shortcuts:

- **Bold**: Ctrl+B
- *Italic*: Ctrl+I
- [Links](https://example.com)
- \`inline code\`

## Features

1. Live split preview
2. Auto-save to local storage
3. Export as .md file
4. Zen mode for distraction-free writing

> "The scariest moment is always just before you start." — Stephen King

Happy writing! ✍️
`;

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem("pmnt-notes");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes: Note[]) {
  localStorage.setItem("pmnt-notes", JSON.stringify(notes));
}

const toolbarActions = [
  { icon: Bold, label: "Bold", prefix: "**", suffix: "**", shortcut: "b" },
  { icon: Italic, label: "Italic", prefix: "*", suffix: "*", shortcut: "i" },
  { icon: Heading1, label: "H1", prefix: "# ", suffix: "", shortcut: "1" },
  { icon: Heading2, label: "H2", prefix: "## ", suffix: "", shortcut: "2" },
  { icon: Heading3, label: "H3", prefix: "### ", suffix: "", shortcut: "3" },
  { icon: List, label: "Bullet List", prefix: "- ", suffix: "", shortcut: "" },
  { icon: ListOrdered, label: "Numbered List", prefix: "1. ", suffix: "", shortcut: "" },
  { icon: Quote, label: "Quote", prefix: "> ", suffix: "", shortcut: "" },
  { icon: Code, label: "Code", prefix: "`", suffix: "`", shortcut: "" },
  { icon: LinkIcon, label: "Link", prefix: "[", suffix: "](url)", shortcut: "k" },
  { icon: Image, label: "Image", prefix: "![alt](", suffix: ")", shortcut: "" },
  { icon: Table, label: "Table", prefix: "\n| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n", suffix: "", shortcut: "" },
  { icon: Minus, label: "Divider", prefix: "\n---\n", suffix: "", shortcut: "" },
];

const Editor = () => {
  const [notes, setNotes] = useState<Note[]>(loadNotes);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [zenMode, setZenMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initialize with default note if empty
  useEffect(() => {
    if (notes.length === 0) {
      const first: Note = {
        id: generateId(),
        title: "Welcome",
        content: DEFAULT_CONTENT,
        updatedAt: Date.now(),
        createdAt: Date.now(),
      };
      setNotes([first]);
      setActiveId(first.id);
    } else if (!activeId) {
      setActiveId(notes[0].id);
    }
  }, []);

  const activeNote = notes.find((n) => n.id === activeId);

  const updateNote = useCallback(
    (updates: Partial<Note>) => {
      setNotes((prev) => {
        const next = prev.map((n) =>
          n.id === activeId ? { ...n, ...updates, updatedAt: Date.now() } : n
        );
        saveNotes(next);
        return next;
      });
    },
    [activeId]
  );

  const createNote = useCallback(() => {
    const note: Note = {
      id: generateId(),
      title: "Untitled",
      content: "",
      updatedAt: Date.now(),
      createdAt: Date.now(),
    };
    setNotes((prev) => {
      const next = [note, ...prev];
      saveNotes(next);
      return next;
    });
    setActiveId(note.id);
  }, []);

  const deleteNote = useCallback(
    (id: string) => {
      setNotes((prev) => {
        const next = prev.filter((n) => n.id !== id);
        saveNotes(next);
        if (activeId === id) {
          setActiveId(next[0]?.id || null);
        }
        return next;
      });
    },
    [activeId]
  );

  const exportNote = useCallback(() => {
    if (!activeNote) return;
    const blob = new Blob([activeNote.content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeNote.title.replace(/[^a-z0-9]/gi, "_")}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeNote]);

  const insertMarkdown = useCallback(
    (prefix: string, suffix: string) => {
      const ta = textareaRef.current;
      if (!ta || !activeNote) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = activeNote.content.slice(start, end);
      const replacement = prefix + (selected || "text") + suffix;
      const newContent =
        activeNote.content.slice(0, start) + replacement + activeNote.content.slice(end);
      updateNote({ content: newContent });
      setTimeout(() => {
        ta.focus();
        ta.setSelectionRange(start + prefix.length, start + prefix.length + (selected || "text").length);
      }, 0);
    },
    [activeNote, updateNote]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      const action = toolbarActions.find((a) => a.shortcut === e.key);
      if (action) {
        e.preventDefault();
        insertMarkdown(action.prefix, action.suffix);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [insertMarkdown]);

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const wordCount = activeNote?.content.trim().split(/\s+/).filter(Boolean).length || 0;
  const charCount = activeNote?.content.length || 0;

  return (
    <div className="h-screen flex flex-col bg-background">
      {!zenMode && <Navbar />}

      <div className={`flex flex-1 overflow-hidden ${!zenMode ? "pt-16" : ""}`}>
        {/* Sidebar */}
        {!zenMode && sidebarOpen && (
          <div className="w-64 border-r border-border bg-card flex flex-col shrink-0">
            <div className="p-3 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={createNote}>
                  <Plus className="h-3 w-3 mr-1" /> New Note
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setSidebarOpen(false)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search notes..."
                  className="pl-8 h-8 text-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => setActiveId(note.id)}
                  className={`px-3 py-3 border-b border-border/50 cursor-pointer transition-colors group ${
                    note.id === activeId ? "bg-accent/10" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        <p className="text-sm font-medium truncate">{note.title}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {note.content.slice(0, 60).replace(/[#*_`]/g, "") || "Empty note"}
                      </p>
                      <p className="text-[10px] text-muted-foreground/70 mt-1">
                        {new Date(note.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNote(note.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:text-destructive transition-all"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Toolbar */}
          <div className="border-b border-border bg-card px-3 py-2 flex items-center gap-1 flex-wrap">
            {!sidebarOpen && !zenMode && (
              <Button size="sm" variant="ghost" className="mr-1" onClick={() => setSidebarOpen(true)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}

            {activeNote && (
              <>
                <input
                  value={activeNote.title}
                  onChange={(e) => updateNote({ title: e.target.value })}
                  className="bg-transparent border-none outline-none font-medium text-sm mr-4 w-40"
                  placeholder="Note title..."
                />

                <div className="h-5 w-px bg-border mx-1" />

                {toolbarActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => insertMarkdown(action.prefix, action.suffix)}
                    className="p-1.5 rounded hover:bg-muted transition-colors"
                    title={action.label + (action.shortcut ? ` (Ctrl+${action.shortcut.toUpperCase()})` : "")}
                  >
                    <action.icon className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}

                <div className="flex-1" />

                <Button size="sm" variant="ghost" onClick={exportNote} title="Export as .md">
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setZenMode(!zenMode)}
                  title={zenMode ? "Exit Zen Mode" : "Zen Mode"}
                >
                  {zenMode ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                </Button>
              </>
            )}
          </div>

          {/* Editor + Preview */}
          {activeNote ? (
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 flex flex-col min-w-0">
                <textarea
                  ref={textareaRef}
                  value={activeNote.content}
                  onChange={(e) => updateNote({ content: e.target.value })}
                  className="flex-1 resize-none bg-background p-6 font-mono text-sm leading-relaxed outline-none custom-scrollbar"
                  placeholder="Start writing markdown..."
                  spellCheck={false}
                />
              </div>

              <div className="w-px bg-border" />

              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar markdown-preview">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {activeNote.content}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <AlignLeft className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="font-serif text-xl mb-2">No note selected</p>
                <Button onClick={createNote} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Create a note
                </Button>
              </div>
            </div>
          )}

          {/* Status Bar */}
          <div className="border-t border-border bg-card px-4 py-1.5 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>{wordCount} words</span>
              <span>{charCount} characters</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Markdown</span>
              {zenMode && (
                <button onClick={() => setZenMode(false)} className="hover:text-foreground transition-colors">
                  Exit Zen Mode (Esc)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
