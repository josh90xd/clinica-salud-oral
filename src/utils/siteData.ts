import {
  Building2,
  CalendarCheck,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  MonitorCheck,
  Radio,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaXTwitter } from "react-icons/fa6";
import type { Doctor, FeatureCard, LinkItem, Specialty } from "../types/site";

export const contact = {
  phone: "(605) 335 4172",
  mobileOne: "3012327415",
  mobileTwo: "3205421743",
  email: "Clinicsaludoral23@hotmail.com",
  address: "Carrera 48 #69-06, Barranquilla",
  instagram: "@clinicasaludoral23",
  whatsappUrl: "https://wa.me/573012327415",
  appointmentUrl:
    "https://wa.me/573012327415?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Cl%C3%ADnica%20Salud%20Oral.%20%C2%BFMe%20pueden%20ayudar%3F",
  instagramUrl: "https://instagram.com/clinicasaludoral23",
};

export const navItems: LinkItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export const socials = [
  { label: "Instagram", href: contact.instagramUrl, icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
];

export const stats = [
  { value: 25, suffix: "+", label: "años de experiencia" },
  { value: 13, suffix: "", label: "unidades odontológicas" },
  { value: 180, suffix: "+", label: "pacientes diarios" },
];

export const specialties: Specialty[] = [
  {
    name: "Ortodoncia craneomandibular",
    description: "Servicio especializado con énfasis institucional en ortodoncia y manejo integral de la oclusión.",
    details: ["Valoración de la posición dental y relación mandibular.", "Planeación de tratamientos para alinear la sonrisa y mejorar la función.", "Seguimiento según las necesidades específicas de cada paciente."],
    idealFor: "Pacientes que buscan corregir la posición dental, la mordida o mejorar la armonía funcional de su sonrisa.",
    image: "/specialties/ortodoncia.png",
  },
  {
    name: "Ortopedia maxilofacial",
    description: "Atención orientada al desarrollo y equilibrio funcional maxilofacial.",
    details: ["Evaluación del crecimiento y desarrollo maxilofacial.", "Orientación de alteraciones funcionales desde etapas tempranas.", "Apoyo especializado dentro del área de ortodoncia y ortopedia maxilofacial."],
    idealFor: "Niños, jóvenes o pacientes que requieren orientar el desarrollo de maxilares y estructuras faciales.",
    image: "/specialties/ortopedia-maxilofacial.png",
  },
  {
    name: "Manejo del dolor orofacial",
    description: "Valoración y tratamiento de molestias asociadas a la región oral y facial.",
    details: ["Análisis de molestias en boca, cara y estructuras relacionadas.", "Identificación oportuna de posibles causas del dolor.", "Plan de manejo de acuerdo con la condición y evolución del paciente."],
    idealFor: "Pacientes con dolor facial, molestias al masticar o sensibilidad persistente que requieren valoración especializada.",
    image: "/specialties/manejo-dolor-orofacial.png",
  },
  {
    name: "Manejo de la ATM",
    description: "Atención de alteraciones relacionadas con la articulación temporomandibular.",
    details: ["Valoración de la articulación temporomandibular y sus síntomas.", "Orientación para dolor, tensión, chasquidos o limitación de movimiento.", "Tratamiento ajustado al caso específico de cada paciente."],
    idealFor: "Personas con molestias mandibulares, chasquidos, bloqueo o incomodidad al abrir y cerrar la boca.",
    image: "/specialties/manejo-atm.png",
  },
  {
    name: "Diseño de sonrisa",
    description: "Tratamientos estéticos y funcionales para armonizar la sonrisa.",
    details: ["Análisis estético y funcional de la sonrisa.", "Planeación de procedimientos para mejorar forma, color y armonía dental.", "Tratamientos apoyados en tecnología adecuada y criterio profesional."],
    idealFor: "Pacientes que desean mejorar la apariencia de su sonrisa conservando equilibrio y naturalidad.",
    image: "/specialties/estetica-dental.png",
  },
  {
    name: "Blanqueamiento dental",
    description: "Procedimientos estéticos para mejorar la apariencia del color dental.",
    details: ["Valoración previa del estado oral antes del procedimiento.", "Tratamiento estético orientado a mejorar el tono dental.", "Recomendaciones de cuidado para mantener el resultado."],
    idealFor: "Pacientes que desean una sonrisa más luminosa mediante un procedimiento estético supervisado.",
    image: "/specialties/blanqueamiento-dental.png",
  },
  {
    name: "Implantología oral",
    description: "Tratamientos implantológicos dentro del portafolio de odontología especializada.",
    details: ["Valoración para reemplazo de dientes perdidos.", "Procedimientos realizados dentro del área especializada y sala de cirugía.", "Planeación enfocada en función, estética y comodidad del paciente."],
    idealFor: "Personas con ausencia dental que buscan una alternativa funcional y estable de rehabilitación.",
    image: "/specialties/implantologia-oral.png",
  },
  {
    name: "Estomatología y cirugía oral",
    description: "Atención quirúrgica y especializada de condiciones orales.",
    details: ["Valoración de condiciones orales que requieren manejo especializado.", "Procedimientos en área quirúrgica con enfoque seguro y organizado.", "Acompañamiento antes y después del procedimiento según el caso."],
    idealFor: "Pacientes que necesitan valoración quirúrgica oral o manejo especializado de tejidos y estructuras bucales.",
    image: "/specialties/cirugia-oral.png",
  },
  {
    name: "Odontopediatría",
    description: "Atención odontológica para pacientes pediátricos.",
    details: ["Atención adaptada a niños y pacientes en crecimiento.", "Promoción de hábitos saludables desde edades tempranas.", "Valoración preventiva y manejo oportuno de necesidades pediátricas."],
    idealFor: "Niños y familias que buscan una experiencia cercana, preventiva y orientada al bienestar oral infantil.",
    image: "/specialties/odontopediatria.png",
  },
  {
    name: "Periodoncia",
    description: "Cuidado de encías y tejidos de soporte dental.",
    details: ["Valoración de encías y tejidos que sostienen los dientes.", "Manejo de inflamación, sangrado o signos de enfermedad periodontal.", "Apoyo al mantenimiento de la salud oral a largo plazo."],
    idealFor: "Pacientes con sangrado de encías, movilidad dental, inflamación o necesidad de control periodontal.",
    image: "/specialties/periodoncia.png",
  },
  {
    name: "Endodoncia",
    description: "Tratamientos enfocados en conservar piezas dentales afectadas.",
    details: ["Diagnóstico de piezas dentales con dolor o compromiso interno.", "Tratamientos orientados a conservar el diente cuando es viable.", "Seguimiento para recuperar función y bienestar."],
    idealFor: "Pacientes con dolor dental intenso, sensibilidad prolongada o dientes afectados que pueden requerir tratamiento de conducto.",
    image: "/specialties/endodoncia.png",
  },
  {
    name: "Rehabilitación oral",
    description: "Recuperación funcional y estética mediante tratamientos restaurativos.",
    details: ["Planeación para recuperar función, estética y comodidad oral.", "Tratamientos restaurativos según diagnóstico y necesidad del paciente.", "Integración con otras especialidades cuando el caso lo requiere."],
    idealFor: "Pacientes que necesitan restaurar dientes, recuperar mordida o mejorar función y apariencia de la sonrisa.",
    image: "/specialties/rehabilitacion-dental.png",
  },
  {
    name: "Odontología general",
    description: "Atención base para diagnóstico, tratamiento y mantenimiento de la salud oral.",
    details: ["Primera valoración, diagnóstico y orientación de tratamiento.", "Atención de necesidades odontológicas generales y controles periódicos.", "Derivación a especialidades cuando el caso lo requiere."],
    idealFor: "Pacientes que desean iniciar su proceso, resolver molestias generales o mantener controles preventivos.",
    image: "/specialties/odontologia-general.png",
  },
  {
    name: "Promoción y prevención",
    description: "Actividades orientadas a fomentar hábitos para una buena salud bucal a largo plazo.",
    details: ["Educación para crear hábitos que contribuyan a mantener buena salud oral.", "Actividades de prevención y detección oportuna de patologías orales.", "Apoyo mediante unidad portátil para jornadas de promoción y prevención."],
    idealFor: "Familias, empresas e instituciones interesadas en prevenir enfermedades orales y fortalecer habitos saludables.",
    image: "/specialties/promocion-prevencion.png",
  },
];

export const technologies: FeatureCard[] = [
  { title: "Métodos eficientes de diagnóstico", description: "El portafolio destaca la aplicación de diagnósticos oportunos para identificar patologías orales.", icon: ScanFace },
  { title: "Tratamientos funcionales y estéticos", description: "La clínica brinda tratamientos apoyados en tecnología adecuada y accesible.", icon: Sparkles },
  { title: "Vanguardia técnico-científica", description: "La visión institucional proyecta mantenerse a la vanguardia del sector odontológico.", icon: MonitorCheck },
  { title: "Promoción y prevención", description: "Cuenta con área y unidad portátil para actividades de promoción y prevención.", icon: Radio },
  { title: "Atención especializada", description: "Unidades destinadas a odontología general, odontología especializada, ortodoncia y ortopedia maxilofacial.", icon: Microscope },
];

export const whyChoose: FeatureCard[] = [
  { title: "25 años de trayectoria", description: "Proyecto creado en 2000 y constituido como Clínica Salud Oral en septiembre de 2001.", icon: ShieldCheck },
  { title: "Enfoque humano y social", description: "La clínica nació para brindar salud oral con calidad, calidez y bienestar para la comunidad.", icon: Users },
  { title: "Vanguardia tecnológica", description: "Su visión 2033 declara mantenerse a la vanguardia en avances tecnológicos y técnico-científicos.", icon: MonitorCheck },
  { title: "Atención profesional", description: "Servicios orientados a satisfacer necesidades y superar expectativas de los pacientes.", icon: HeartPulse },
  { title: "Infraestructura adecuada", description: "Edificación de tres plantas con áreas funcionales para una atención organizada, segura y cómoda.", icon: Building2 },
  { title: "Calidad y ética", description: "Valores institucionales: cultura del servicio, calidad, eficiencia, responsabilidad y ética.", icon: ClipboardCheck },
];

export const infrastructure = [
  "Recepción",
  "Sala de espera",
  "Consultorios",
  "Área quirúrgica",
  "Esterilización",
  "Promoción y prevención",
  "Área administrativa",
  "Archivo clínico",
];

export const capacity = [
  { value: 13, suffix: "", label: "unidades odontológicas" },
  { value: 1, suffix: "", label: "sala de cirugía" },
  { value: 180, suffix: "+", label: "pacientes diarios" },
  { value: 14, suffix: "", label: "especialidades" },
];

export const doctors: Doctor[] = [
  { name: "Humberto Salleg Brango", specialty: "Ortodoncista", experience: "Talento humano especializado", image: "/team/humberto-salleg-brango.png", gallery: ["/team/humberto-salleg-brango-atencion.png"] },
  { name: "Lina Blanco", specialty: "Cirujano oral", experience: "Talento humano especializado", image: "/team/lina-blanco.png", gallery: ["/team/lina-blanco-atencion.png"] },
  { name: "Humberto Salleg Blanco", specialty: "Ortodoncista", experience: "Talento humano especializado", image: "/team/humberto-salleg-blanco.png" },
  { name: "Rosmary Páez", specialty: "Rehabilitadora oral", experience: "Talento humano especializado", image: "/team/rosmary-paez.jpg" },
  { name: "Mirleth González", specialty: "Estética dental", experience: "Talento humano especializado", image: "/team/mirleth-gonzales.png" },
  { name: "Karolynne Muñoz", specialty: "Endodoncista", experience: "Talento humano especializado", image: "/team/karolynne-munoz.png" },
  { name: "Juan Pablo Salleg", specialty: "Administrador", experience: "Talento humano especializado", image: "/team/juan-pablo-salleg.png" },
  { name: "Campo Elías", specialty: "Estética dental", experience: "Talento humano especializado", image: "/team/campo-elias.jpg" },
];

export const about = {
  history:
    "En el año 2000, los doctores Humberto Salleg Brango, ortodoncista, y Lina Blanco, cirujano oral, tuvieron la inquietud de crear una clínica odontológica que ofreciera odontología integral y especializada, con un enfoque humano y social.",
  founding:
    "El proyecto tomó forma en septiembre de 2001, dando origen a Clínica Salud Oral como una institución orientada a brindar atención odontológica integral y especializada.",
  mission:
    "Brindar servicios de odontología general y especializada enfocados en satisfacer las necesidades de nuestros pacientes y superar sus expectativas, a través de una atención profesional, una infraestructura adecuada y un equipo humano comprometido, calificado y con alto sentido humano.",
  vision:
    "Para el año 2033, ser reconocidos en el mercado local como una Institución Prestadora de Servicios Odontológicos acreditada, con énfasis en ortodoncia, destacándonos por mantenernos a la vanguardia en avances tecnológicos y técnico-científicos del sector.",
  values: ["Cultura del servicio", "Calidad", "Eficiencia", "Responsabilidad", "Ética"],
  objectives: [
    "Promover la salud oral y la prevención, fomentando hábitos y actitudes que ayuden a mantener una buena salud bucal a largo plazo.",
    "Aplicar métodos eficientes de diagnóstico y tratamiento para identificar y tratar oportunamente las patologías orales.",
    "Brindar tratamientos funcionales y estéticos, apoyados en tecnología adecuada y accesibles para personas de diferentes niveles socioeconómicos.",
  ],
  talent:
    "Nuestro equipo está conformado por profesionales con amplia experiencia clínica y docente, comprometidos con brindar una atención en salud oral basada en el respeto, la ética y el sentido humano.",
};

export const processSteps = [
  { title: "Agenda tu cita", icon: CalendarCheck },
  { title: "Valoración", icon: Stethoscope },
  { title: "Diagnóstico", icon: ClipboardCheck },
  { title: "Tratamiento", icon: Syringe },
  { title: "Seguimiento", icon: HeartPulse },
];

export const testimonials = [
  { name: "Paciente Salud Oral", comment: "La atención fue clara, puntual y muy humana durante todo el proceso.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
  { name: "Paciente de Barranquilla", comment: "Me explicaron cada paso del tratamiento y sentí mucha confianza.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
  { name: "Familia paciente", comment: "Instalaciones cómodas, equipo profesional y seguimiento muy cercano.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" },
];

export const posts = [
  { title: "Cómo preparar tu primera valoración odontológica", category: "Prevención", date: "30 Jul 2026", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80" },
  { title: "Tecnología digital aplicada al diagnóstico oral", category: "Tecnología", date: "30 Jul 2026", image: "https://images.unsplash.com/photo-1581093458791-9d42cc0304d5?auto=format&fit=crop&w=900&q=80" },
  { title: "Señales para consultar a un especialista", category: "Salud oral", date: "30 Jul 2026", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80" },
];

export const floatingLinks = [
  { label: "WhatsApp", href: contact.whatsappUrl, icon: FaWhatsapp },
  { label: "Instagram", href: contact.instagramUrl, icon: FaInstagram },
];
