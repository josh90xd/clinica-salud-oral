import { contact, socials, specialties } from "../utils/siteData";

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

export function Footer() {
  const whatsappMessage = encodeURIComponent("Hola, quiero comunicarme con Clínica Salud Oral. ¿Me pueden ayudar?");
  const whatsappHref = `${contact.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#2D5F8B] py-16 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img src="/portfolio/logo-salud-oral-transparente.png" alt="Clínica Salud Oral" className="h-24 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Sitio corporativo para atención odontológica integral en Barranquilla, con enfoque en tecnología, experiencia clínica y trato humano.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href={item.href} aria-label={item.label} key={item.label}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title="Especialidades" items={specialties.slice(0, 6).map((item) => ({ label: item.name, href: "#especialidades" }))} />
        <FooterColumn
          title="Clínica"
          items={[
            { label: "Quiénes somos", href: "#quienes-somos" },
            { label: "Misión", href: "#mision" },
            { label: "Visión", href: "#vision" },
            { label: "Valores", href: "#valores" },
            { label: "Objetivos", href: "#objetivos" },
            { label: "Talento humano", href: "#talento-humano" },
            { label: "Tecnología", href: "#tecnologia" },
            { label: "Equipo", href: "#equipo" },
            { label: "Contacto", href: whatsappHref, external: true },
          ]}
        />

        <div>
          <h3 className="mb-4 text-base font-extrabold">Contacto</h3>
          <div className="grid gap-3 text-sm text-white/72">
            <span>{contact.address}</span>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>{contact.phone}</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">{contact.mobileOne} - {contact.mobileTwo}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <h3 className="mb-4 mt-8 text-base font-extrabold">Información legal</h3>
          <div className="grid gap-2 text-sm text-white/72">
            <a href="#politica">Política</a>
            <a href="#cookies">Cookies</a>
            <a href="#terminos">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-extrabold">{title}</h3>
      <div className="grid gap-2 text-sm text-white/72">
        {items.map((item) => (
          <a href={item.href} key={item.label} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
