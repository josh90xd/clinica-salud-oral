import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "./components/SEO";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid justify-items-center gap-5">
              <div className="grid h-28 w-40 place-items-center">
                <img src="/portfolio/logo-salud-oral-transparente.png" alt="Clínica Salud Oral" className="h-full w-full object-contain" />
              </div>
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#EEF6F8] border-t-[#2D5F8B]" aria-label="Cargando" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
