import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { floatingLinks } from "../utils/siteData";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div className="mb-3 grid gap-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            {floatingLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} className="glass focus-ring flex items-center gap-3 rounded-full px-4 py-3 text-sm font-extrabold text-[#2D5F8B]" href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon /> {item.label}
                </a>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button className="focus-ring grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#6EC8B5] to-[#61C7F2] text-[#2D5F8B] shadow-2xl" onClick={() => setOpen((value) => !value)} aria-label="Abrir chat flotante">
        {open ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
