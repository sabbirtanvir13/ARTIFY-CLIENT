import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "./card";

const DashboardOverview = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  const colors = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

  // helper function
  const getValue = (label) =>
    stats.find((s) => s.label === label)?.value || 0;

  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Users" value={getValue("Users")} color="#6366F1" />
        <Card title="Total Artworks" value={getValue("Artworks")} color="#EC4899" />
        <Card title="Favorites" value={getValue("Favorites")} color="#10B981" />
        <Card title="Blogs" value={getValue("Blogs")} color="#F59E0B" />
      </div>

      {/* ===== Charts ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Bar Chart */}
        <div className="p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Platform Statistics
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className=" p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Data Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats}
                dataKey="value"
                nameKey="label"
                outerRadius={110}
                label
              >
                {stats.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Table ===== */}
      <div className=" shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Statistics Table
        </h2>

        <table className="w-full border text-center">
          <thead className="">
            <tr>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Count</th>
            </tr>
          </thead>

          <tbody>
            {stats.map((item, i) => (
              <tr key={i} className="">
                <td className="p-3 border">{item.label}</td>
                <td className="p-3 border font-semibold">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DashboardOverview;
