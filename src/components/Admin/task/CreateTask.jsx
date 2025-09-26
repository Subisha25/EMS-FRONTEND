import React, { useState } from "react";

// File: createtask.jsx
// A single-file React + Tailwind task creation form
// Features: validation, priority & status selectors, responsive layout

export default function CreateTask({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    assignee: "",
    priority: "Medium",
    status: "Open",
    due: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.assignee.trim()) errs.assignee = "Assignee is required";
    if (!formData.due) errs.due = "Due date is required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (onSubmit) onSubmit(formData);
    alert("Task created successfully! (connect API here)");
    setFormData({
      title: "",
      assignee: "",
      priority: "Medium",
      status: "Open",
      due: "",
      description: "",
    });
    setErrors({});
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded p-4 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter task title"
          />
          {errors.title && <div className="text-sm text-red-600">{errors.title}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium">Assignee</label>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Assign to (e.g. John Doe)"
          />
          {errors.assignee && (
            <div className="text-sm text-red-600">{errors.assignee}</div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Blocked</option>
              <option>Done</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            name="due"
            value={formData.due}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.due && <div className="text-sm text-red-600">{errors.due}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 h-24"
            placeholder="Enter task description"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Task
          </button>
          <button
            type="reset"
            onClick={() => setFormData({
              title: "",
              assignee: "",
              priority: "Medium",
              status: "Open",
              due: "",
              description: "",
            })}
            className="px-4 py-2 border rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
