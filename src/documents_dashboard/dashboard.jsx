import { useRef, useState } from "react";
import "./dashboard.css";




const documentsData = [
  { id: 1, name: "Professional_Experience_Summary.pdf", size: "7.1 MB", date: "1 day ago", star: false },
  { id: 2, name: "Employment_Verification_Letter.pdf", size: "6.8 MB", date: "13 days ago", star: false },
  { id: 3, name: "Program_Completion_Record_MZ.pdf", size: "4.9 MB", date: "1 day ago", star: false },
  { id: 4, name: "Outstanding_Performance_Certificate.pdf", size: "4.4 MB", date: "1 week ago", star: true },
  { id: 5, name: "WebDev_Cert_MZ.pdf", size: "1.8 MB", date: "1 day ago", star: true },
  { id: 6, name: "Cybersec_Cert_MZ.pdf", size: "2.9 MB", date: "2 days ago", star: true },
];

const recentDocs = [
  { id: 1, name: "Mark_Zuckerberg_Resume.pdf", size: "3.8 MB", date: "1 hour ago" },
  { id: 2, name: "Mark_Zuckerberg_Certificate.pdf", size: "1.5 MB", date: "1 day ago" },
  { id: 3, name: "Mark_Zuckerberg_OJT.pdf", size: "5.5 MB", date: "2 days ago" },
];

const requestDocs = [
  { id: 1, title: "Employment Verification Letter", status: "Pending" },
  { id: 2, title: "Employment Verification Letter", status: "Pending" },
  { id: 3, title: "Employment Verification Letter", status: "Pending" },
  { id: 4, title: "Employment Verification Letter", status: "Pending" },
  { id: 5, title: "Employment Verification Letter", status: "Approved" },
];


export default function Dashboard() {
  const fileInputRef = useRef(null);
  const [documents, setDocuments] = useState(documentsData);
  const [search, setSearch] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleChooseFiles() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);

    const uploaded = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      date: "Just now",
      star: false,
    }));

    setDocuments((prev) => [...uploaded, ...prev]);
  }

  return (
    <div className="dd-shell">
      <div className="dd-layout">

        
        <aside className="dd-sidebar">
          <div className="dd-sidebar-inner">
            <div className="dd-brand">
              <div className="dd-brand-badge">H</div>
              <div className="dd-brand-name">HSI</div>
            </div>

            <div className="dd-side-section">
              <div className="dd-side-title">Main</div>
              <div className="dd-side-nav">
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
                  <div key={item} className="dd-side-item">
                    <span className="dd-side-dot" /> {item}
                  </div>
                ))}

                <div className="dd-side-item dd-side-item-active">
                  <span className="dd-side-dot" /> Documents & Records
                </div>
              </div>
            </div>

            <div className="dd-side-section">
              <div className="dd-side-title">Others</div>
              <div className="dd-side-item">
                <span className="dd-side-dot" /> Profile
              </div>
            </div>
          </div>
        </aside>

        
        <main className="dd-main">

          {/* Topbar */}
          <header className="dd-topbar">
            <div className="dd-topbar-inner">
              <div className="dd-topbar-title">Documents Dashboard</div>

              <div className="dd-search">
                <span className="dd-search-icon">🔍</span>
                <input placeholder="Search" />
              </div>

              <div className="dd-user">
                <div className="dd-avatar">MZ</div>
                <div className="dd-user-info">
                  <div className="dd-user-name">MARK ZUCKERBERG</div>
                  <div className="dd-user-role">Co-Founder / CEO</div>
                </div>
              </div>
            </div>
          </header>

       
          <div className="dd-content">
            <h1 className="dd-h1">My Documents & Records</h1>
            <p className="dd-sub">
              Securely view, request, and download your official documents in one place.
            </p>

            
            <div className="dd-stats">
              <div className="dd-stat">
                <div className="dd-stat-icon">📄</div>
                <div>
                  <div className="dd-stat-title">Total Documents</div>
                  <div className="dd-stat-value">{documents.length}</div>
                </div>
              </div>

              <div className="dd-stat">
                <div className="dd-stat-icon">⭐</div>
                <div>
                  <div className="dd-stat-title">Certifications</div>
                  <div className="dd-stat-value">5</div>
                </div>
              </div>

              <div className="dd-stat">
                <div className="dd-stat-icon">📨</div>
                <div>
                  <div className="dd-stat-title">Requested Documents</div>
                  <div className="dd-stat-value">5</div>
                </div>
              </div>

              <div />
            </div>

            <div className="dd-grid">

            
              <div>

               
                <div className="dd-upload">
                  <div className="dd-upload-inner">
                    <div className="dd-upload-icon">⬆</div>
                    <div className="dd-upload-title">Upload New Document</div>
                    <div className="dd-upload-sub">
                      Drag and drop your files here, or click to browse
                    </div>

                    <button className="dd-btn-accent" onClick={handleChooseFiles}>
                      + Choose Files
                    </button>

                    <input
                      type="file"
                      multiple
                      ref={fileInputRef}
                      hidden
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                
                <div className="dd-panel" style={{ marginTop: 12 }}>
                  <div className="dd-docs-head">
                    <div className="dd-panel-title">Documents</div>
                    <button className="dd-viewall">View All</button>
                  </div>

                  <div className="dd-docs-tools">
                    <div className="dd-doc-search">
                      <span className="icon">🔍</span>
                      <input
                        placeholder="Search Documents"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <select className="dd-select">
                      <option>Largest</option>
                      <option>Newest</option>
                    </select>
                  </div>

                  <div className="dd-docs-list">
                    {filteredDocuments.map((doc) => (
                      <div key={doc.id} className="dd-doc-row">
                        <div className="dd-doc-left">
                          <div className="dd-doc-fileicon">
                            {doc.star ? "⭐" : "📄"}
                          </div>
                          <div>
                            <div className="dd-doc-name">{doc.name}</div>
                            <div className="dd-doc-meta">
                              {doc.size} • {doc.date}
                            </div>
                          </div>
                        </div>

                        <div className="dd-doc-actions">
                          <button className="dd-icon-btn">⋮</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

           
              <div>

              
                <div className="dd-panel">
                  <div className="dd-panel-title">Recent Documents</div>
                  {recentDocs.map((doc) => (
                    <div key={doc.id} className="dd-recent-item">
                      <div className="dd-recent-left">
                        <div>
                          <div className="dd-recent-title">{doc.name}</div>
                          <div className="dd-recent-meta">
                            {doc.size} • {doc.date}
                          </div>
                        </div>
                      </div>
                      <button className="dd-download">⬇</button>
                    </div>
                  ))}
                </div>

                <div className="dd-panel" style={{ marginTop: 12 }}>
                  <div className="dd-panel-actions">
                    <div className="dd-panel-title">Document Request</div>
                    <button className="dd-viewall">View All</button>
                  </div>

                  <button className="dd-request-btn">Request a Document</button>

                  {requestDocs.map((req) => (
                    <div
                      key={req.id}
                      className={`dd-request-item ${
                        req.status === "Approved" ? "dd-request-approved" : ""
                      }`}
                    >
                      <div>
                        <div className="dd-request-title">{req.title}</div>
                        <div className="dd-request-status">{req.status}</div>
                      </div>

                      {req.status === "Approved" && (
                        <button className="dd-download">⬇</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
