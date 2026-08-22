import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CalendarDays, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { contact, navItems } from "../utils/siteData";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
        <div className="h-full bg-gradient-to-r from-[#6EC8B5] to-[#61C7F2]" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden border-b border-[#EEF6F8] bg-[#F7FAFC] text-[#2D5F8B] lg:block">
        <div className="section-shell flex min-h-11 items-center justify-between gap-5 text-xs font-bold">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Phone size={14} /> {contact.phone}</span>
            <span className="flex items-center gap-2"><Phone size={14} /> {contact.mobileOne} | {contact.mobileTwo}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {contact.email}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> {contact.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Clock size={14} /> Lun-Vie 8:00-12:00 / 2:00-6:00 · Sab 8:00-1:00</span>
            <a className="focus-ring" href={contact.instagramUrl} aria-label="Instagram"><FaInstagram /></a>
            <a className="focus-ring" href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="border-b border-[#EEF6F8] bg-[#F7FAFC] text-[#2D5F8B] lg:hidden">
        <div className="mx-auto flex min-h-12 w-[calc(100%-28px)] items-center justify-between text-xs font-bold">
          <span className="flex items-center gap-2"><Phone size={14} /> {contact.mobileOne}</span>
          <a className="btn-primary min-h-8 px-4 text-xs" href={contact.appointmentUrl} target="_blank" rel="noreferrer"><CalendarDays size={14} /> Agendar</a>
        </div>
      </div>

      <header className={`sticky top-0 z-[60] transition-all duration-300 ${scrolled ? "glass" : "border-b border-[#EEF6F8] bg-white/90"}`}>
        <nav className="section-shell flex h-24 items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" className="focus-ring flex items-center" aria-label="Clínica Salud Oral inicio">
            <span className="flex h-16 items-center gap-3">
              <img src="/portfolio/logo-salud-oral-transparente.png" alt="Clínica Salud Oral" className="h-full w-32 object-contain object-left" />
              <img src="/portfolio/logo-25-aniversario-dorado.png" alt="25 años aniversario Salud Oral" className="h-14 w-16 object-contain" />
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-[#EEF6F8] bg-white px-2 py-2 shadow-[0_16px_44px_rgba(45,95,139,0.08)] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring group relative rounded-full px-4 py-2 text-sm font-bold text-[#2D5F8B]/80 transition duration-300 hover:bg-[#EEF6F8] hover:text-[#2D5F8B]">
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 bg-[#6EC8B5] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <a className="btn-primary hidden lg:inline-flex" href={contact.appointmentUrl} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Agendar Cita</a>
          <button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-[#EEF6F8] text-[#2D5F8B] lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <Menu />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-[80] bg-[#2D5F8B]/40 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.aside className="ml-auto h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3 }}>
              <div className="flex items-center justify-between">
                <div className="flex h-16 items-center gap-3">
                  <img src="/portfolio/logo-salud-oral-transparente.png" alt="Clínica Salud Oral" className="h-full w-32 object-contain object-left" />
                  <img src="/portfolio/logo-25-aniversario-dorado.png" alt="25 años aniversario Salud Oral" className="h-14 w-16 object-contain" />
                </div>
                <button className="focus-ring grid h-10 w-10 place-items-center rounded-full border" onClick={() => setOpen(false)} aria-label="Cerrar menú"><X /></button>
              </div>
              <div className="mt-10 grid gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring rounded-2xl px-2 py-3 text-lg font-bold text-[#2D5F8B]">{item.label}</a>
                ))}
                <a className="btn-primary mt-4" href={contact.appointmentUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Agendar Cita</a>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}

      <button
        className="focus-ring fixed bottom-6 right-6 z-50 hidden h-12 w-12 place-items-center rounded-full bg-[#2D5F8B] text-white shadow-xl md:grid"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
