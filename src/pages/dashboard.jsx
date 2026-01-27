import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const documentsSeed = [
  { id: 1, name: "Professional_Experience_Summary.pdf", size: "7.1 MB", date: "1 day ago", star: false, category: "Document" },
  { id: 2, name: "Employment_Verification_Letter.pdf", size: "6.8 MB", date: "13 days ago", star: false, category: "Document" },
  { id: 3, name: "Program_Completion_Record_MZ.pdf", size: "4.9 MB", date: "1 day ago", star: false, category: "Document" },
  { id: 4, name: "Outstanding_Performance_Certificate.pdf", size: "4.4 MB", date: "1 week ago", star: true, category: "Certificate" },
  { id: 5, name: "WebDev_Cert_MZ.pdf", size: "1.8 MB", date: "1 day ago", star: true, category: "Certificate" },
  { id: 6, name: "Cybersec_Cert_MZ.pdf", size: "2.9 MB", date: "2 days ago", star: true, category: "Certificate" },
  { id: 7, name: "Community_Cert_MZ.pdf", size: "3.6 MB", date: "3 days ago", star: true, category: "Certificate" },
  { id: 8, name: "Service_Record_MZ.pdf", size: "3.4 MB", date: "2 days ago", star: false, category: "Document" },
  { id: 9, name: "Performance_Report_MZ.pdf", size: "2.4 MB", date: "2 days ago", star: false, category: "Document" },
  { id: 10, name: "Internship_Cert_MZ.pdf", size: "2.1 MB", date: "6 days ago", star: true, category: "Certificate" },
  { id: 11, name: "Professional_Endorsement_Letter_MZ.pdf", size: "4.0 MB", date: "2 weeks ago", star: false, category: "Document" },
  { id: 12, name: "Training_Record_2026.pdf", size: "1.2 MB", date: "3 weeks ago", star: false, category: "Document" },
];

const recentSeed = [
  { id: 101, name: "Mark_Zuckerberg_Resume.pdf", size: "3.8 MB", date: "1 hour ago" },
  { id: 102, name: "Mark_Zuckerberg_Certificate.pdf", size: "1.5 MB", date: "1 day ago" },
  { id: 103, name: "Mark_Zuckerberg_OJT.pdf", size: "5.5 MB", date: "2 days ago" },
];

const requestDocs = [
  { id: 1, title: "Employment Verification Letter", status: "Pending" },
  { id: 2, title: "Employment Verification Letter", status: "Pending" },
  { id: 3, title: "Employment Verification Letter", status: "Pending" },
  { id: 4, title: "Employment Verification Letter", status: "Pending" },
  { id: 5, title: "Employment Verification Letter", status: "Approved" },
];

function StatCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl bg-[#fbf4d5] grid place-items-center text-lg">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-gray-500">{title}</div>
        <div className="text-lg font-black text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [documents, setDocuments] = useState(documentsSeed);
  const [recentDocs, setRecentDocs] = useState(recentSeed);

  const [topSearch, setTopSearch] = useState("");
  const [docSearch, setDocSearch] = useState("");
  const [sortMode, setSortMode] = useState("Newest");

  const certCount = useMemo(
    () => documents.filter((d) => d.category === "Certificate").length,
    [documents]
  );

  const filteredDocs = useMemo(() => {
    const qTop = topSearch.trim().toLowerCase();
    const qDoc = docSearch.trim().toLowerCase();

    const base = documents.filter((d) => {
      const name = d.name.toLowerCase();
      return name.includes(qTop) && name.includes(qDoc);
    });

    if (sortMode === "Largest") {
      // demo sort: not real MB parsing accurate; good enough for UI
      return [...base].sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    }
    // Newest: keep original order (assuming latest first), otherwise sort by id desc
    return [...base].sort((a, b) => b.id - a.id);
  }, [documents, topSearch, docSearch, sortMode]);

  function openPicker() {
    fileRef.current?.click();
  }

  function onPickFiles(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const uploaded = files.map((f, idx) => ({
      id: Date.now() + idx,
      name: f.name,
      size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
      date: "Just now",
      star: false,
      category: "Document",
    }));

    setDocuments((prev) => [...uploaded, ...prev]);
    setRecentDocs((prev) => [
      ...uploaded.slice(0, 3).map((d) => ({ id: d.id + 10000, name: d.name, size: d.size, date: d.date })),
      ...prev,
    ].slice(0, 6));

    e.target.value = "";
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f3f3f3]">
      <div className="h-full flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-[280px] shrink-0 flex-col bg-[#5a5a5a] text-white">
          <div className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#f4c20d] text-[#111] grid place-items-center font-black">
                H
              </div>
              <div>
                <div className="font-black tracking-wide leading-none">HSI</div>
                <div className="text-[11px] text-white/70">Alumni Portal</div>
              </div>
            </div>

            <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/60">Main</div>

            <nav className="mt-3 space-y-1">
              {[
                "Dashboard",
                "Directory & Networking",
                "Career & Job Opportunities",
                "Training & Learnings",
                "Achievements & Recognition",
                "Events & Community Engagement",
                "Announcements",
                "Mentorship & Volunteer Programs",
              ].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-3 py-2 rounded-xl text-[13px] text-white/85 hover:bg-white/10 transition"
                  type="button"
                >
                  {item}
                </button>
              ))}

              <button
                className="w-full text-left px-3 py-2 rounded-xl text-[13px] bg-[#f4c20d] text-[#111] font-extrabold shadow-sm"
                type="button"
              >
                Documents & Records
              </button>
            </nav>

            <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/60">Others</div>
            <button
              className="mt-3 w-full text-left px-3 py-2 rounded-xl text-[13px] text-white/85 hover:bg-white/10 transition"
              type="button"
            >
              Profile
            </button>
          </div>

          <div className="mt-auto p-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/70">Tip</div>
              <div className="mt-1 text-sm font-bold">Keep your documents updated.</div>
              <div className="mt-2 text-xs text-white/70">Upload certificates & records anytime.</div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 h-full flex flex-col overflow-hidden">
          {/* Topbar */}
          <header className="h-[72px] shrink-0 bg-[#6b5f1e]">
            <div className="h-full px-5 md:px-7 flex items-center gap-4">
              <div className="text-white font-extrabold text-sm tracking-wide whitespace-nowrap">
                Documents Dashboard
              </div>

              {/* Top Search */}
              <div className="flex-1 max-w-[560px] relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                <input
                  className="w-full h-10 rounded-xl bg-white/95 border border-white/30 outline-none pl-10 pr-3 text-sm
                             focus:ring-2 focus:ring-[#f4c20d]/50 focus:border-[#f4c20d]/40 transition"
                  placeholder="Search anything…"
                  value={topSearch}
                  onChange={(e) => setTopSearch(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-3 text-white">
                <div className="h-10 w-10 rounded-full bg-white/15 grid place-items-center font-black">MZ</div>
                <div className="leading-tight hidden sm:block">
                  <div className="text-xs font-black">MARK ZUCKERBERG</div>
                  <div className="text-[11px] text-white/75">Co-Founder / CEO</div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-5 md:p-7">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h1 className="text-[22px] md:text-[26px] font-black text-gray-900">
                    My Documents & Records
                  </h1>
                  <p className="mt-1 text-sm text-gray-600">
                    View, request, and download your official documents in one place.
                  </p>
                </div>

                <button
                  className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm font-extrabold text-gray-800
                             hover:bg-gray-50 shadow-sm transition"
                  onClick={() => navigate("/documents")}
                >
                  Open Masterlist →
                </button>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="📄" title="Total Documents" value={documents.length} />
                <StatCard icon="⭐" title="Certifications" value={certCount} />
                <StatCard icon="📨" title="Requested Documents" value="5" />
                <div className="hidden lg:block" />
              </div>

              {/* Grid */}
              <div className="mt-5 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-5">
                {/* Left column */}
                <div className="min-w-0 space-y-5">
                  {/* Upload */}
                  <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50/60 p-7 text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-[#fbf4d5] grid place-items-center text-lg">
                        ⬆
                      </div>
                      <div className="mt-2 font-black text-gray-900">Upload New Document</div>
                      <div className="mt-1 text-xs text-gray-500">
                        Drag and drop your files here, or click to browse
                      </div>

                      <button
                        className="mt-4 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full
                                   bg-[#f4c20d] text-[#111] font-extrabold shadow-sm hover:brightness-95 transition"
                        onClick={openPicker}
                      >
                        + Choose Files
                      </button>

                      <input
                        ref={fileRef}
                        type="file"
                        hidden
                        multiple
                        onChange={onPickFiles}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-black text-gray-900">Documents</div>
                        <div className="text-xs text-gray-500">Quick access to your latest files</div>
                      </div>

                      <button
                        className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold
                                   hover:bg-gray-50 transition"
                        onClick={() => navigate("/documents")}
                      >
                        View All
                      </button>
                    </div>

                    {/* Search + Filter (NO OVERLAP) */}
                    <div className="mt-4 flex items-center gap-3 w-full">
                      <div className="flex-1 min-w-0 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                        <input
                          className="w-full h-10 rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm
                                     outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
                          placeholder="Search documents…"
                          value={docSearch}
                          onChange={(e) => setDocSearch(e.target.value)}
                        />
                      </div>

                      <select
                        className="shrink-0 w-[140px] h-10 rounded-xl border border-gray-200 bg-white px-2 text-sm
                                   outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
                        value={sortMode}
                        onChange={(e) => setSortMode(e.target.value)}
                      >
                        <option>Newest</option>
                        <option>Largest</option>
                      </select>
                    </div>

                    {/* List */}
                    <div className="mt-4 divide-y divide-gray-100">
                      {filteredDocs.slice(0, 6).map((doc) => (
                        <button
                          key={doc.id}
                          type="button"
                          className="w-full text-left py-3 px-2 rounded-xl hover:bg-gray-50 transition flex items-center justify-between"
                          onClick={() => navigate("/documents")}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-10 w-10 rounded-xl bg-gray-100 grid place-items-center shrink-0 text-lg">
                              {doc.star ? "⭐" : "📄"}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-extrabold text-gray-900 truncate">{doc.name}</div>
                              <div className="text-xs text-gray-500">{doc.size} • {doc.date}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="hidden sm:inline-flex text-[11px] font-bold px-2 py-1 rounded-md border border-gray-200 bg-white">
                              {doc.category}
                            </span>
                            <span className="h-9 w-9 rounded-xl border border-gray-200 bg-white grid place-items-center text-gray-600">
                              ⋮
                            </span>
                          </div>
                        </button>
                      ))}

                      {filteredDocs.length === 0 && (
                        <div className="py-10 text-center text-sm text-gray-500">
                          No documents found.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="min-w-0 space-y-5">
                  {/* Recent */}
                  <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-black text-gray-900">Recent Documents</div>
                        <div className="text-xs text-gray-500">Most recently uploaded files</div>
                      </div>
                      <button
                        className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold hover:bg-gray-50 transition"
                        onClick={() => navigate("/documents")}
                      >
                        View
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {recentDocs
                        .filter((d) => d.name.toLowerCase().includes(topSearch.toLowerCase()))
                        .slice(0, 3)
                        .map((doc) => (
                          <div
                            key={doc.id}
                            className="rounded-2xl bg-[#fbf4d5] p-4 flex items-center justify-between shadow-sm"
                          >
                            <div className="min-w-0">
                              <div className="text-sm font-extrabold text-gray-900 truncate">{doc.name}</div>
                              <div className="text-xs text-gray-700/70">{doc.size} • {doc.date}</div>
                            </div>

                            <button
                              className="h-10 w-10 rounded-xl bg-[#f4c20d] grid place-items-center font-black text-[#111] hover:brightness-95 transition"
                              type="button"
                              title="Download (demo)"
                            >
                              ⬇
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Requests */}
                  <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-black text-gray-900">Document Request</div>
                        <div className="text-xs text-gray-500">Track your requests</div>
                      </div>
                      <button className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold hover:bg-gray-50 transition">
                        View All
                      </button>
                    </div>

                    <button
                      className="mt-4 w-full h-11 rounded-xl bg-[#f4c20d] text-[#111] font-extrabold shadow-sm hover:brightness-95 transition"
                      onClick={() => navigate("/request-document")}
                      type="button"
                    >
                      Request a Document
                    </button>

                    <div className="mt-4 space-y-3">
                      {requestDocs.map((req) => {
                        const approved = req.status === "Approved";
                        return (
                          <div
                            key={req.id}
                            className={`rounded-2xl p-4 border shadow-sm ${
                              approved
                                ? "bg-green-50 border-green-200"
                                : "bg-[#fff7e6] border-[#f4d58a]"
                            }`}
                          >
                            <div className="text-sm font-extrabold text-gray-900">{req.title}</div>
                            <div className={`text-xs font-bold ${approved ? "text-green-700" : "text-orange-700"}`}>
                              {req.status}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
