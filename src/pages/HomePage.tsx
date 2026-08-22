import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { z } from "zod";
import "swiper/css";
import "swiper/css/pagination";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { FloatingChat } from "../components/FloatingChat";
import { Footer } from "../components/Footer";
import { SectionHeader } from "../components/SectionHeader";
import {
  about,
  capacity,
  contact,
  doctors,
  infrastructure,
  processSteps,
  specialties,
  stats,
  technologies,
  testimonials,
  whyChoose,
} from "../utils/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const schema = z.object({
  specialty: z.string().min(1, "Selecciona una especialidad"),
});

type FormValues = z.infer<typeof schema>;

export function HomePage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<(typeof specialties)[number] | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof doctors)[number] | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const handleContactSubmit = (values: FormValues) => {
    const message = [
      "Hola, quiero agendar una cita en Clínica Salud Oral.",
      `Especialidad: ${values.specialty}`,
      "¿Me pueden ayudar con más información y disponibilidad?",
    ].join("\n");

    window.open(`https://wa.me/57${contact.mobileOne}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const getAppointmentUrl = (specialty: string) => {
    const message = [
      "Hola, quiero agendar una cita en Clínica Salud Oral.",
      `Especialidad: ${specialty}`,
      "¿Me pueden ayudar con más información y disponibilidad?",
    ].join("\n");

    return `https://wa.me/57${contact.mobileOne}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      <section id="inicio" className="relative isolate overflow-hidden bg-[#F7FAFC] py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-32 bg-[#EEF6F8]" aria-hidden="true" />
        <div className="absolute right-0 top-24 h-[560px] w-[42%] bg-[radial-gradient(circle_at_center,rgba(110,200,181,0.2),rgba(238,246,248,0.48)_45%,transparent_72%)]" aria-hidden="true" />
        <div className="absolute left-[-12%] top-40 h-80 w-80 rounded-full bg-[#6EC8B5]/12 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[8%] top-44 h-96 w-96 rounded-full bg-[#61C7F2]/10 blur-3xl" aria-hidden="true" />
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7 }}>
            <p className="eyebrow">Clínica odontológica en Barranquilla</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,4.8rem)] font-extrabold leading-[1.02] text-[#2D5F8B]">
              Cuidamos tu sonrisa con tecnología, <span className="text-[#42B8A3]">25 años de experiencia</span> y trato humano.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#2D5F8B]/75">
              Atención odontológica integral con especialistas, tecnología moderna y procesos pensados para una experiencia clara, segura y cercana.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#6EC8B5]/45 bg-white/85 px-5 py-3 text-sm font-extrabold text-[#2D5F8B] shadow-[0_18px_42px_rgba(110,200,181,0.18)]">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#6EC8B5] text-white">25</span>
              años acompañando sonrisas en Barranquilla
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={contact.appointmentUrl} target="_blank" rel="noreferrer">Agendar Cita <ArrowRight size={18} /></a>
              <a className="btn-secondary" href="#especialidades">Ver Especialidades</a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((item) => (
                <div className="glass rounded-[24px] p-5 first:border-[#6EC8B5]/60 first:bg-[#6EC8B5]/12" key={item.label}>
                  <strong className="block text-2xl text-[#2D5F8B]"><AnimatedCounter value={item.value} suffix={item.suffix} /></strong>
                  <span className="text-xs font-bold uppercase text-[#2D5F8B]/65">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="image-zoom overflow-hidden rounded-[24px] border border-white bg-white p-2 shadow-[0_34px_90px_rgba(45,95,139,0.16)]">
              <img loading="eager" src="/portfolio/hero-equipo-clinica.jpg" alt="Equipo de Clínica Salud Oral" className="h-[620px] w-full rounded-[20px] object-cover object-center" />
            </div>
            <div className="glass absolute -bottom-6 left-6 rounded-[24px] p-5">
              <strong className="text-2xl text-[#2D5F8B]">Calidad</strong>
              <p className="text-sm font-bold text-[#2D5F8B]/70">calidez y bienestar</p>
            </div>
            <div className="glass absolute bottom-8 right-8 hidden rounded-[24px] p-5 sm:block">
              <CheckCircle2 className="mb-2 text-[#6EC8B5]" />
              <p className="max-w-44 text-sm font-bold text-[#2D5F8B]">Atención integral y especializada</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="nosotros" className="py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Quiénes somos" title="Una clínica odontológica con origen familiar, enfoque humano y vocación social." copy={about.history} />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              { id: "quienes-somos", title: "Origen", text: about.founding },
              { id: "mision", title: "Misión", text: about.mission },
              { id: "vision", title: "Visión 2033", text: about.vision },
              { id: "talento-humano", title: "Talento humano", text: about.talent },
            ].map((item, index) => (
              <motion.article id={item.id} className="card scroll-mt-32 p-6" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <span className="text-sm font-extrabold text-[#6EC8B5]">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-extrabold text-[#2D5F8B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#2D5F8B]/75">{item.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1fr]">
            <article id="valores" className="card scroll-mt-32 p-7">
              <h3 className="text-2xl font-extrabold text-[#2D5F8B]">Valores</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {about.values.map((value) => <span className="rounded-full bg-[#EEF6F8] px-4 py-2 text-sm font-extrabold text-[#2D5F8B]" key={value}>{value}</span>)}
              </div>
            </article>
            <article id="objetivos" className="card scroll-mt-32 p-7">
              <h3 className="text-2xl font-extrabold text-[#2D5F8B]">Objetivos institucionales</h3>
              <div className="mt-5 grid gap-4">
                {about.objectives.map((objective) => <p className="flex gap-3 text-sm leading-7 text-[#2D5F8B]/75" key={objective}><CheckCircle2 className="mt-1 shrink-0 text-[#6EC8B5]" size={18} /> {objective}</p>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <SectionHeader centered eyebrow="Proceso de atención" title="Cinco pasos claros para una experiencia tranquila." />
          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div className="card p-6 text-center" key={step.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#EEF6F8] text-[#2D5F8B]"><Icon /></span>
                  <strong className="mt-5 block text-sm text-[#6EC8B5]">0{index + 1}</strong>
                  <h3 className="mt-2 text-lg font-extrabold text-[#2D5F8B]">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Especialidades" title="Atención odontológica integral en 14 áreas." copy="Servicios organizados para orientar al paciente desde prevención y diagnóstico hasta tratamientos especializados." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item) => (
              <article className="card image-zoom overflow-hidden" key={item.name}>
                <div className="h-52 overflow-hidden"><img loading="lazy" src={item.image} alt={item.name} className="h-full w-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#2D5F8B]">{item.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#2D5F8B]/75">{item.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#2D5F8B] transition hover:text-[#61C7F2]" type="button" onClick={() => setSelectedSpecialty(item)}>Conocer más <ArrowRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologia" className="bg-[#EEF6F8] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <SectionHeader eyebrow="Tecnología" title="Herramientas digitales para diagnósticos más precisos." copy="La tecnología se presenta como apoyo clínico para mejorar planeación, documentación y experiencia del paciente." />
            <div className="mt-8 image-zoom overflow-hidden rounded-[32px] shadow-xl">
              <img loading="lazy" src="/portfolio/consultorio-atencion.png" alt="Consultorio odontológico de Clínica Salud Oral" className="h-80 w-full object-cover object-center" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((item) => {
              const Icon = item.icon;
              return <article className="card p-6" key={item.title}><Icon className="text-[#2D5F8B]" /><h3 className="mt-5 text-xl font-extrabold text-[#2D5F8B]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#2D5F8B]/75">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionHeader centered eyebrow="Por qué elegirnos" title="Excelencia clínica con una experiencia humana y organizada." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return <article className="card p-7" key={item.title}><Icon className="text-[#6EC8B5]" /><h3 className="mt-5 text-xl font-extrabold text-[#2D5F8B]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#2D5F8B]/75">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Infraestructura" title="Espacios pensados para atención cómoda y segura." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="image-zoom overflow-hidden rounded-[24px] border border-white bg-white p-2 shadow-[0_28px_76px_rgba(45,95,139,0.13)]">
              <img loading="lazy" src="/portfolio/fachada-clinica.jpeg" alt="Fachada de Clínica Salud Oral en Barranquilla" className="h-[470px] w-full rounded-[20px] object-cover object-center" />
            </div>
            <div className="grid content-between gap-6">
              <div className="card p-8">
                <p className="eyebrow">Fachada real</p>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#2D5F8B]">Edificación de tres plantas en Barranquilla.</h3>
                <p className="mt-4 text-sm leading-7 text-[#2D5F8B]/75">La infraestructura del portafolio se presenta como una experiencia organizada, segura y cómoda para cada paciente.</p>
              </div>
              <div className="image-zoom overflow-hidden rounded-[24px] shadow-[0_22px_60px_rgba(45,95,139,0.1)]">
                <img loading="lazy" src="/portfolio/equipo-clinica.jpg" alt="Equipo de Clínica Salud Oral" className="h-56 w-full object-cover object-center" />
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item) => <div className="card flex items-center gap-3 p-5" key={item}><CheckCircle2 className="text-[#6EC8B5]" /><strong className="text-[#2D5F8B]">{item}</strong></div>)}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capacity.map((item) => <div className="rounded-[24px] bg-[#2D5F8B] p-7 text-white" key={item.label}><strong className="text-4xl"><AnimatedCounter value={item.value} suffix={item.suffix} /></strong><p className="mt-2 text-sm font-bold text-white/75">{item.label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="equipo" className="py-24">
        <div className="section-shell">
          <SectionHeader centered eyebrow="Equipo médico" title="Especialistas para una atención interdisciplinaria." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {doctors.map((item) => <article className="card image-zoom overflow-hidden" key={item.name}><div className="h-[390px] overflow-hidden"><img loading="lazy" src={item.image} alt={item.name} className="h-full w-full object-cover object-top" /></div><div className="p-7"><h3 className="text-xl font-extrabold text-[#2D5F8B]">{item.name}</h3><p className="mt-2 font-bold text-[#2D5F8B]">{item.specialty}</p><p className="mt-2 text-sm text-[#2D5F8B]/75">{item.experience}</p><button className="btn-secondary mt-5" type="button" onClick={() => setSelectedDoctor(item)}>Ver perfil</button></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <SectionHeader centered eyebrow="Testimonios" title="Pacientes que valoran claridad, confianza y acompañamiento." />
          <Swiper className="mt-12 pb-12" modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 4200 }} spaceBetween={24} slidesPerView={1} breakpoints={{ 900: { slidesPerView: 2 } }}>
            {testimonials.map((item) => <SwiperSlide key={item.name}><article className="card min-h-72 p-8"><div className="flex gap-1 text-[#61C7F2]">{Array.from({ length: 5 }).map((_, index) => <Star fill="currentColor" key={index} size={18} />)}</div><p className="mt-6 text-lg leading-8 text-[#2D5F8B]/80">"{item.comment}"</p><div className="mt-8 flex items-center gap-4"><img className="h-14 w-14 rounded-full object-cover" src={item.image} alt={item.name} loading="lazy" /><strong className="text-[#2D5F8B]">{item.name}</strong></div></article></SwiperSlide>)}
          </Swiper>
        </div>
      </section>

      <section id="contacto" className="bg-[#F7FAFC] py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeader eyebrow="Contacto" title="Agenda tu valoración en Clínica Salud Oral." copy="Selecciona la especialidad que necesitas y te atenderemos por WhatsApp." />
            <form className="mt-8 grid gap-4" onSubmit={handleSubmit(handleContactSubmit)} noValidate>
              <Field label="Especialidad" error={errors.specialty?.message}><select {...register("specialty")}><option value="">Selecciona</option>{specialties.map((item) => <option key={item.name}>{item.name}</option>)}</select></Field>
              <button className="btn-primary w-fit" type="submit">Enviar solicitud</button>
              {isSubmitSuccessful ? <p className="font-bold text-[#2D5F8B]" role="status">Solicitud validada. Se abrirá WhatsApp con los datos de tu cita.</p> : null}
            </form>
          </div>
          <aside className="card overflow-hidden">
            <iframe className="h-72 w-full border-0" title="Mapa Clínica Salud Oral" loading="lazy" src="https://www.google.com/maps?q=Carrera%2048%20%2369-06%20Barranquilla&output=embed" />
            <div className="grid gap-4 p-7">
              {[contact.address, contact.phone, contact.mobileOne, contact.mobileTwo, contact.email, contact.instagram].map((item) => <p className="flex items-center gap-3 font-bold text-[#2D5F8B]" key={item}><MapPin className="shrink-0 text-[#6EC8B5]" size={18} /> {item}</p>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell rounded-[24px] bg-[#EEF6F8] p-10 text-[#2D5F8B] ring-1 ring-[#61C7F2]/30 md:p-14">
          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Tu sonrisa perfecta comienza con una consulta.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-secondary" href={contact.appointmentUrl} target="_blank" rel="noreferrer">Agendar Cita</a>
            <a className="btn-primary" href={`tel:${contact.phone.replace(/\D/g, "")}`}>Llamar Ahora</a>
          </div>
        </div>
      </section>

      {selectedSpecialty ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#2D5F8B]/35 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="specialty-dialog-title" onClick={() => setSelectedSpecialty(null)}>
          <motion.article className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[24px] bg-white shadow-[0_34px_100px_rgba(45,95,139,0.28)]" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.24 }} onClick={(event) => event.stopPropagation()}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="h-72 overflow-hidden lg:h-full">
                <img src={selectedSpecialty.image} alt={selectedSpecialty.name} className="h-full w-full object-cover" />
              </div>
              <div className="relative p-7 md:p-9">
                <button className="focus-ring absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-[#EEF6F8] text-[#2D5F8B] transition hover:bg-[#61C7F2]/20" type="button" onClick={() => setSelectedSpecialty(null)} aria-label="Cerrar informacion de especialidad">
                  <X size={18} />
                </button>
                <p className="eyebrow">Especialidad</p>
                <h3 id="specialty-dialog-title" className="mt-4 pr-10 text-3xl font-extrabold leading-tight text-[#2D5F8B] md:text-4xl">{selectedSpecialty.name}</h3>
                <p className="mt-4 text-base leading-8 text-[#2D5F8B]/75">{selectedSpecialty.description}</p>
                <div className="mt-6 rounded-[20px] bg-[#EEF6F8] p-5">
                  <strong className="text-[#2D5F8B]">Ideal para</strong>
                  <p className="mt-2 text-sm leading-7 text-[#2D5F8B]/75">{selectedSpecialty.idealFor}</p>
                </div>
                <div className="mt-6 grid gap-3">
                  {selectedSpecialty.details.map((detail) => (
                    <p className="flex gap-3 text-sm leading-7 text-[#2D5F8B]/75" key={detail}>
                      <CheckCircle2 className="mt-1 shrink-0 text-[#6EC8B5]" size={18} />
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="btn-primary" href={getAppointmentUrl(selectedSpecialty.name)} target="_blank" rel="noreferrer">Agendar esta especialidad <ArrowRight size={18} /></a>
                  <button className="btn-secondary" type="button" onClick={() => setSelectedSpecialty(null)}>Ver más servicios</button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      ) : null}

      {selectedDoctor ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#2D5F8B]/35 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="doctor-dialog-title" onClick={() => setSelectedDoctor(null)}>
          <motion.article className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[24px] bg-white shadow-[0_34px_100px_rgba(45,95,139,0.28)]" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.24 }} onClick={(event) => event.stopPropagation()}>
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="h-80 overflow-hidden lg:h-full">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="relative p-7 md:p-9">
                <button className="focus-ring absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-[#EEF6F8] text-[#2D5F8B] transition hover:bg-[#61C7F2]/20" type="button" onClick={() => setSelectedDoctor(null)} aria-label="Cerrar perfil médico">
                  <X size={18} />
                </button>
                <p className="eyebrow">Equipo médico</p>
                <h3 id="doctor-dialog-title" className="mt-4 pr-10 text-3xl font-extrabold leading-tight text-[#2D5F8B] md:text-4xl">{selectedDoctor.name}</h3>
                <p className="mt-3 text-lg font-bold text-[#2D5F8B]">{selectedDoctor.specialty}</p>
                <p className="mt-3 text-sm leading-7 text-[#2D5F8B]/75">{selectedDoctor.experience}</p>
                {selectedDoctor.gallery?.length ? (
                  <div className="mt-7">
                    <strong className="text-[#2D5F8B]">Fotos del perfil</strong>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {selectedDoctor.gallery.map((image) => (
                        <div className="image-zoom overflow-hidden rounded-[20px] bg-[#EEF6F8]" key={image}>
                          <img src={image} alt={`${selectedDoctor.name} en atención clínica`} className="h-72 w-full object-cover object-center" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="btn-primary" href={getAppointmentUrl(selectedDoctor.specialty)} target="_blank" rel="noreferrer">Agendar con el equipo <ArrowRight size={18} /></a>
                  <button className="btn-secondary" type="button" onClick={() => setSelectedDoctor(null)}>Cerrar perfil</button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      ) : null}

      <FloatingChat />
      <Footer />
    </main>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-[#2D5F8B]">
      {label}
      <span className="contents">{children}</span>
      {error ? <span className="text-xs text-[#2D5F8B]">{error}</span> : null}
    </label>
  );
}
