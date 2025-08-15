// src/App.tsx
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global notifications */}
        <Toaster />
        <Sonner />

        {/* Dark mode wrapper */}
        <div className={darkMode ? "dark" : ""}>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Dark mode toggle */}
            <button
              className="fixed top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-lg shadow-lg hover:opacity-80 transition"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>

            {/* Routes */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
