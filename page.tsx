"use client";

import { useEffect, useState } from "react";
import { fetchHealthTips } from "../lib/utils"; // Make sure the path is correct
import heroImage from "../public/hero-image.jpg"; // Replace with your actual image path

type HealthTip = {
  title: string;
  content: string;
};

const Index = () => {
  const [activeView, setActiveView] = useState<"dashboard" | "other">("dashboard");
  const [tips, setTips] = useState<HealthTip[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch health tips from Supabase
  useEffect(() => {
    const getTips = async () => {
      try {
        const data = await fetchHealthTips();
        setTips(data);
      } catch (err) {
        console.error("Error fetching health tips:", err);
      } finally {
        setLoading(false);
      }
    };
    getTips();
  }, []);

  const renderDashboard = () => (
    <div>
      {/* Settings Section */}
      <div className="mb-6 p-4 border rounded bg-white shadow-sm">
        <button className="w-full mb-2 p-2 border rounded flex items-center">
          <span className="mr-2">⚙️</span> App Settings
        </button>
        <button className="w-full mb-2 p-2 border rounded flex items-center">
          <span className="mr-2">🔔</span> Notifications
        </button>
        <button className="w-full p-2 border rounded flex items-center">
          <span className="mr-2">📖</span> Health History
        </button>
        <p className="text-sm text-center mt-4 text-gray-500">
          To unlock full features including authentication, data storage, and AI responses, connect to Supabase.
        </p>
      </div>

      {/* Health Tips Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Health Tips</h2>
        {loading ? (
          <p>Loading tips...</p>
        ) : tips.length === 0 ? (
          <p>No health tips available.</p>
        ) : (
          <ul className="space-y-3">
            {tips.map((tip, idx) => (
              <li key={idx} className="p-3 border rounded shadow-sm bg-white">
                <strong>{tip.title}</strong>: {tip.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="p-4 bg-blue-600 text-white text-center font-bold text-xl">
        HealthEE Anywhere
      </header>

      {/* Hero Section */}
      {activeView === "dashboard" && (
        <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
          <img
            src={heroImage}
            alt="Healthcare AI Assistant"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80" />
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                HealthEE Anywhere
              </h1>
              <p className="text-lg opacity-90">
                Your AI-powered health companion, available offline & multilingual
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 pb-20">
        {activeView === "dashboard" ? renderDashboard() : <p>Other view content here</p>}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 border-t bg-white">
        &copy; 2025 HealthEE
      </footer>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-2 flex justify-around">
        <button
          className={activeView === "dashboard" ? "font-bold" : ""}
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeView !== "dashboard" ? "font-bold" : ""}
          onClick={() => setActiveView("other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default Index;
