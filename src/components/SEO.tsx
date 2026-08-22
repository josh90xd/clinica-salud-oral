import { Helmet } from "react-helmet-async";
import { contact } from "../utils/siteData";

export function SEO() {
  const title = "Clínica Salud Oral | Odontología premium en Barranquilla";
  const description =
    "Clínica Salud Oral en Barranquilla: atención odontológica integral, tecnología moderna, especialistas y trato humano.";
  const url = "https://clinicasaludoral.com/";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clínica Salud Oral",
    url,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 48 #69-06",
      addressLocality: "Barranquilla",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
    ],
    sameAs: [contact.instagramUrl],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="es_CO" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
