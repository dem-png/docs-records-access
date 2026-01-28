import React, { useState } from "react";
import { Search, User, Upload, X, LayoutDashboard, FileText, Users, Calendar, Megaphone, Award, GraduationCap, HandHeart, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DocumentRequestForm() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFiles([...uploadedFiles, file]);
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const menu = [
    { label: "Dashboard", icon: LayoutDashboard, onClick: () => {} },
    { label: "Directory & Networking", icon: Users, onClick: () => {} },
    { label: "Career & Job Opportunities", icon: FileText, onClick: () => {} },
    { label: "Training & Learnings", icon: GraduationCap, onClick: () => {} },
    { label: "Achievements & Recognition", icon: Award, onClick: () => {} },
    { label: "Events & Community Engagement", icon: Calendar, onClick: () => {} },
    { label: "Announcements", icon: Megaphone, onClick: () => {} },
    { label: "Mentorship & Volunteer Programs", icon: HandHeart, onClick: () => {} },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f3f3f3] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[280px] shrink-0 flex-col bg-[#5a5a5a] text-white">
        <div className="p-5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#f4c20d] text-[#111] grid place-items-center font-black">
              H
            </div>
            <div>
              <div className="font-black tracking-wide leading-none">HSI</div>
              <div className="text-[11px] text-white/70">Alumni Portal</div>
            </div>
          </div>

          <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/60">
            Main
          </div>

          {/* Menu */}
          <nav className="mt-3 space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === "Documents & Records"; // not used here, but kept for pattern
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  type="button"
                  className="w-full text-left px-3 py-2 rounded-xl text-[13px] text-white/85 hover:bg-white/10 transition flex items-center gap-2"
                >
                  <Icon className="w-4 h-4 opacity-90" />
                  {item.label}
                </button>
              );
            })}

            {/* Active Page */}
            <button
              className="w-full text-left px-3 py-2 rounded-xl text-[13px] bg-[#f4c20d] text-[#111] font-extrabold shadow-sm flex items-center gap-2"
              type="button"
            >
              <FileText className="w-4 h-4" />
              Documents & Records
            </button>
          </nav>

          <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/60">
            Others
          </div>

          <button
            className="mt-3 w-full text-left px-3 py-2 rounded-xl text-[13px] text-white/85 hover:bg-white/10 transition flex items-center gap-2"
            type="button"
          >
            <UserCircle className="w-4 h-4 opacity-90" />
            Profile
          </button>
        </div>

        {/* Tip card */}
        <div className="mt-auto p-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold text-white/70">Tip</div>
            <div className="mt-1 text-sm font-bold">Keep your documents updated.</div>
            <div className="mt-2 text-xs text-white/70">
              Upload certificates & records anytime.
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded bg-white text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-white text-sm">
              <div className="font-semibold">MARK ZUCKERBERG</div>
              <div className="text-xs opacity-90">Co-Founder / CEO</div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Request Documents</h1>

            {/* Info Banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <span className="text-yellow-600 text-xl"></span>
              <p className="text-sm text-yellow-800">
                Fill out the form below to request different documents
              </p>
            </div>

            {/* Requestor Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold">MARK ZUCKERBERG</div>
                <div className="text-sm text-gray-600">Co-Founder / CEO</div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>0-01 Onboarding Certificate</option>
                    <option>0-02 Employment Contract</option>
                    <option>0-03 Job Offer Letter</option>
                    <option>0-04 Certificate of Employment</option>
                    <option>0-05 Training Completion Certificate</option>
                    <option>0-06 Internship Completion Certificate</option>
                    <option>0-07 Promotion Notice</option>
                    <option>0-08 Termination Notice</option>
                    <option>0-09 Clearance Certificate</option>
                    <option>0-10 NDA / Confidentiality Agreement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Unleash E-commerce and Marketing Department</option>
                    <option>System Administration Department</option>
                    <option>Graphics Design Department</option>
                    <option>Web Development Department</option>
                    <option>QA Department</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Request</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Employment Application</option>
                    <option>Onboarding Requirements Submission</option>
                    <option>Document Request</option>
                    <option>Contract Signing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>N/A</option>
                    <option>System Administration Department</option>
                    <option>Web Development Department</option>
                    <option>QA Department</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Option</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Digital Copy (Email - PDF)</option>
                    <option>Digital Copy (Portal Download)</option>
                    <option>Printed Copy (Office Pickup)</option>
                    <option>Both Digital and Printed Copy</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">
                  Upload Documents for Signing <span className="text-gray-400 text-sm">(Optional)</span>
                </h3>
                <label className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800">
                  Add Document ⊕
                  <input type="file" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-2 mb-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
                          <span className="text-yellow-600"></span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">{file.name}</div>
                          <div className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</div>
                        </div>
                      </div>
                      <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-500 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Title</label>
                <input
                  type="text"
                  placeholder="Onboarding Certificate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                <textarea
                  placeholder="I am requesting this document to support my employment/boarding application..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-24 resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button className="px-6 py-2 bg-yellow-500 text-white rounded-md text-sm font-medium hover:bg-yellow-600">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
