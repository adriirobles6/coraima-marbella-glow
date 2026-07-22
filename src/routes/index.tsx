import { createFileRoute } from "@tanstack/react-router";
import heroSalon from "@/assets/hero-salon.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceSpa from "@/assets/service-spa.jpg";
import loungeWide from "@/assets/lounge-wide.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Coraima Hair & Beauty — Salón boutique en Marbella" },
      {
        name: "description",
        content:
          "Salón de belleza premium en Marbella. Peluquería de autor, balayage, tratamientos capilares y maquillaje profesional en un beauty lounge exclusivo.",
      },
      { property: "og:title", content: "Coraima Hair & Beauty — Marbella" },
      {
        property: "og:description",
        content:
          "Un santuario de belleza en la Milla de Oro. Alta peluquería, coloración y maquillaje profesional.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const script =
    size === "lg" ? "text-5xl" : size === "sm" ? "text-3xl" : "text-4xl";
  const label =
    size === "lg" ? "text-[11px]" : "text-[10px]";
  return (
    <div className="flex flex-col items-center leading-none">
      <span className={`font-script text-gold ${script}`}>Coraima</span>
      <span className={`${label} uppercase tracking-[0.4em] mt-1 text-deep`}>
        Hair &amp; Beauty
      </span>
    </div>
  );
}

const services = [
  {
    title: "Alta Peluquería",
    tag: "Cortes · Coloración · Balayage",
    body: "Cortes de autor y técnicas de color artesanales que respetan la caída natural del cabello.",
    img: serviceHair,
    alt: "Detalle de balayage sofisticado en cabello largo",
  },
  {
    title: "Maquillaje Profesional",
    tag: "Eventos · Novias · Editorial",
    body: "Un maquillaje luminoso que realza tu belleza natural para los momentos que importan.",
    img: serviceMakeup,
    alt: "Paleta de maquillaje profesional y brochas sobre mármol",
  },
  {
    title: "Belleza Integral",
    tag: "Tratamientos · Ritual · Bienestar",
    body: "Rituales capilares y estéticos diseñados para el bienestar total y el brillo natural.",
    img: serviceSpa,
    alt: "Toallas blancas y aceites en un ambiente de spa",
  },
];

function Index() {
  return (
    <div className="bg-background text-deep font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-background/85 backdrop-blur-md border-b border-nude">
        <Wordmark size="sm" />
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-medium">
          <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
          <a href="#lounge" className="hover:text-gold transition-colors">El Lounge</a>
          <a href="#galeria" className="hover:text-gold transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
        </div>
        <a
          href="#reservar"
          className="px-5 md:px-6 py-3 bg-deep text-primary-foreground text-[10px] uppercase tracking-widest hover:bg-gold transition-all"
        >
          Reservar cita
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-nude py-20 md:py-0">
        <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-12 md:gap-16">
          <div className="z-10">
            <span className="text-gold font-medium uppercase tracking-[0.4em] text-xs mb-6 block">
              Exclusive Marbella Lounge
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-script text-deep mb-8 leading-[0.95]">
              El arte de tu <br />
              transformación
            </h1>
            <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-base">
              Un santuario de elegancia donde las técnicas más actuales se
              encuentran con una visión artística. Belleza personalizada en el
              corazón de la Milla de Oro.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#reservar"
                className="bg-deep text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold transition-all"
              >
                Reservar cita
              </a>
              <a
                href="#servicios"
                className="border border-deep px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-deep hover:text-primary-foreground transition-all"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroSalon}
              alt="Interior del salón Coraima con espejos dorados"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 w-48 h-48 md:w-64 md:h-64 border border-gold/40 z-0"></div>
            <div className="absolute -top-6 -right-6 hidden md:block">
              <span className="font-script text-gold text-4xl">est. Marbella</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Nuestra carta
            </span>
            <h2 className="text-4xl md:text-5xl font-script text-gold mt-3">
              Servicios de firma
            </h2>
            <div className="h-px w-20 bg-gold/40 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {services.map((s) => (
              <article key={s.title} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] mb-6 overflow-hidden bg-nude">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  {s.tag}
                </span>
                <h3 className="text-xl uppercase tracking-widest mt-3 mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Marbella Sanctuary */}
      <section id="lounge" className="bg-deep text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={loungeWide}
                alt="Interior amplio del beauty lounge en Marbella"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                El santuario
              </span>
              <h2 className="text-4xl md:text-5xl font-script text-gold leading-tight">
                Un refugio en Marbella
              </h2>
              <p className="text-white/60 leading-relaxed">
                En el corazón de Puerto Banús, nuestro boutique lounge ofrece un
                escape privado donde cada detalle está cuidado para tu confort.
                Desde la copa de bienvenida hasta el toque final de perfume,
                garantizamos una experiencia de lujo inigualable.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-gold text-3xl font-script mt-6">
                    Personalizada
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    Atención exclusiva
                  </span>
                </div>
                <div>
                  <span className="block text-gold text-3xl font-script mt-6">
                    Boutique
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    Ambiente íntimo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="reservar" className="py-24 md:py-32 px-6 md:px-10 bg-nude">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Reserva online
          </span>
          <h2 className="text-4xl md:text-6xl font-script text-deep mt-4 mb-6">
            Tu momento Coraima
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Reserva por WhatsApp o teléfono. Nuestro equipo confirmará tu cita
            y preparará un ritual a medida.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/34600000000"
              className="bg-deep text-primary-foreground px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold transition-all"
            >
              Reservar por WhatsApp
            </a>
            <a
              href="tel:+34951000000"
              className="border border-deep px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-deep hover:text-primary-foreground transition-all"
            >
              +34 951 000 000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-background py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-gold/20 pb-16">
          <div className="col-span-2">
            <Wordmark size="lg" />
            <p className="text-muted-foreground text-sm max-w-xs mt-6 leading-relaxed">
              Referente de belleza de lujo en Marbella. Tratamientos de alta
              gama para la mujer contemporánea.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-medium mb-6">
              Conecta
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-gold cursor-pointer transition-colors">
                Instagram
              </li>
              <li className="hover:text-gold cursor-pointer transition-colors">
                Facebook
              </li>
              <li className="hover:text-gold cursor-pointer transition-colors">
                WhatsApp
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-medium mb-6">
              Visítanos
            </h4>
            <address className="text-sm text-muted-foreground not-italic leading-relaxed">
              Av. de Ricardo Soriano, 12
              <br />
              29601 Marbella, Málaga
              <br />
              España
            </address>
            <p className="text-sm text-muted-foreground mt-4">
              Lun – Sáb · 10:00 – 20:00
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>&copy; 2026 Coraima Hair &amp; Beauty</span>
          <span>Beauty Lounge · Marbella</span>
        </div>
      </footer>
    </div>
  );
}
