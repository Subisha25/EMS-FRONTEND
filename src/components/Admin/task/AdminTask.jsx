import React, { useMemo, useState } from "react";

// File: tanskmanagement.jsx
// A single-file React + Tailwind task management table (advanced UI)
// - Search, filter, sort, pagination
// - Row selection + bulk actions
// - Responsive layout
// - Sample data included — replace with your API data

export default function TanskManagement() {
  // sample tasks
  const initialTasks = [
    {
      id: "T-1001",
      title: "Redesign landing page hero",
      assignee: "Anita Rao",
      priority: "High",
      status: "In Progress",
      due: "2025-10-02",
      progress: 60,
    },
    {
      id: "T-1002",
      title: "Fix login edge-case on mobile",
      assignee: "Ravi Kumar",
      priority: "Medium",
      status: "Open",
      due: "2025-09-30",
      progress: 10,
    },
    {
      id: "T-1003",
      title: "Database backup cron setup",
      assignee: "Priya Singh",
      priority: "Low",
      status: "Blocked",
      due: "2025-10-10",
      progress: 0,
    },
    {
      id: "T-1004",
      title: "Implement analytics events",
      assignee: "Aakash",
      priority: "High",
      status: "Open",
      due: "2025-09-27",
      progress: 25,
    },
    {
      id: "T-1005",
      title: "Write onboarding docs",
      assignee: "Leena",
      priority: "Medium",
      status: "Done",
      due: "2025-09-20",
      progress: 100,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortBy, setSortBy] = useState({ key: "due", dir: "asc" });
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // derived filtered + sorted tasks
  const filtered = useMemo(() => {
    let arr = tasks.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      arr = arr.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.assignee.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== "All") arr = arr.filter((t) => t.status === statusFilter);
    if (priorityFilter !== "All") arr = arr.filter((t) => t.priority === priorityFilter);

    arr.sort((a, b) => {
      const key = sortBy.key;
      let v1 = a[key];
      let v2 = b[key];
      // special handling for date and numeric
      if (key === "due") {
        v1 = new Date(v1);
        v2 = new Date(v2);
      }
      if (key === "progress") {
        v1 = Number(v1);
        v2 = Number(v2);
      }
      if (v1 < v2) return sortBy.dir === "asc" ? -1 : 1;
      if (v1 > v2) return sortBy.dir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [tasks, search, statusFilter, priorityFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  function toggleSort(key) {
    setSortBy((s) => {
      if (s.key === key) return { key, dir: s.dir === "asc" ? "desc" : "asc" };
      return { key, dir: "asc" };
    });
  }

  function toggleSelect(id) {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  }

  function selectAllVisible() {
    const copy = new Set(selected);
    pageData.forEach((t) => copy.add(t.id));
    setSelected(copy);
  }
  function clearSelection() {
    setSelected(new Set());
  }

  function bulkMarkComplete() {
    if (selected.size === 0) return;
    setTasks((prev) =>
      prev.map((t) => (selected.has(t.id) ? { ...t, status: "Done", progress: 100 } : t))
    );
    clearSelection();
  }

  function bulkDelete() {
    if (selected.size === 0) return;
    setTasks((prev) => prev.filter((t) => !selected.has(t.id)));
    clearSelection();
  }

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Done", progress: 100 } : t))
    );
    setSelected((s) => {
      const copy = new Set(s);
      copy.delete(id);
      return copy;
    });
  }

  // small helpers for badges
  function PriorityBadge({ p }) {
    const base = "px-2 py-0.5 rounded-full text-xs font-semibold";
    if (p === "High") return <span className={`${base} bg-red-100 text-red-800`}>High</span>;
    if (p === "Medium") return <span className={`${base} bg-yellow-100 text-amber-800`}>Medium</span>;
    return <span className={`${base} bg-green-100 text-green-800`}>Low</span>;
  }

  function StatusBadge({ s }) {
    const base = "px-2 py-0.5 rounded text-xs font-medium";
    if (s === "Open") return <span className={`${base} bg-blue-50 text-blue-700`}>Open</span>;
    if (s === "In Progress") return <span className={`${base} bg-indigo-50 text-indigo-700`}>In Progress</span>;
    if (s === "Blocked") return <span className={`${base} bg-rose-50 text-rose-700`}>Blocked</span>;
    return <span className={`${base} bg-slate-50 text-slate-700`}>Done</span>;
  }

  return (
    <div className="p-4 max-w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h2 className="text-xl font-bold">Task Management</h2>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks, assignee or ID..."
              className="w-full md:w-72 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded px-2 py-2"
          >
            <option>All</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Blocked</option>
            <option>Done</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border rounded px-2 py-2"
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
              setPriorityFilter("All");
            }}
            className="px-3 py-2 border rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-2">
            <button onClick={selectAllVisible} className="text-sm px-2 py-1 border rounded">
              Select page
            </button>
            <button onClick={clearSelection} className="text-sm px-2 py-1 border rounded">
              Clear
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={bulkMarkComplete}
                className="text-sm px-2 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                disabled={selected.size === 0}
              >
                Mark Complete
              </button>
              <button
                onClick={bulkDelete}
                className="text-sm px-2 py-1 bg-rose-600 text-white rounded disabled:opacity-50"
                disabled={selected.size === 0}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="text-sm text-slate-600">Showing {filtered.length} tasks</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="text-slate-600 text-left text-sm">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    onChange={(e) => (e.target.checked ? selectAllVisible() : clearSelection())}
                    checked={pageData.every((t) => selected.has(t.id)) && pageData.length > 0}
                  />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("title")}>Title</th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("assignee")}>Assignee</th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("priority")}>Priority</th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("status")}>Status</th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("due")}>Due</th>
                <th className="p-3 cursor-pointer" onClick={() => toggleSort("progress")}>Progress</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageData.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-sm text-slate-500">
                    No tasks found.
                  </td>
                </tr>
              )}

              {pageData.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50">
                  <td className="p-3 align-top">
                    <input
                      type="checkbox"
                      checked={selected.has(t.id)}
                      onChange={() => toggleSelect(t.id)}
                    />
                  </td>
                  <td className="p-3 align-top">
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{t.id}</div>
                  </td>
                  <td className="p-3 align-top flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold">
                      {t.assignee.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="text-sm">{t.assignee}</div>
                  </td>
                  <td className="p-3 align-top">
                    <PriorityBadge p={t.priority} />
                  </td>
                  <td className="p-3 align-top">
                    <StatusBadge s={t.status} />
                  </td>
                  <td className="p-3 align-top">
                    <div className="text-sm">{new Date(t.due).toLocaleDateString()}</div>
                  </td>
                  <td className="p-3 align-top">
                    <div className="w-32">
                      <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          style={{ width: `${t.progress}%` }}
                          className={`h-2 rounded-full ${t.progress === 100 ? "bg-green-500" : "bg-indigo-500"}`}
                        />
                      </div>
                      <div className="text-xs mt-1">{t.progress}%</div>
                    </div>
                  </td>
                  <td className="p-3 align-top">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleComplete(t.id)}
                        className="text-xs px-3 py-1 rounded border"
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => alert(`Open edit UI for ${t.id} (implement modal or route)`)}
                        className="text-xs px-3 py-1 rounded border"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm text-slate-600">Page {page} of {totalPages}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 border rounded"
              disabled={page === 1}
            >
              Prev
            </button>
            <div className="flex items-center gap-1 px-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-2 py-1 rounded ${page === i + 1 ? "bg-slate-200" : ""}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 border rounded"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* small responsive help */}
      <div className="mt-3 text-xs text-slate-500">
        Tip: click column headers to sort. Replace <code>initialTasks</code> with your API data and
        connect actions to your backend (edit / delete / mark complete).
      </div>
    </div>
  );
}
