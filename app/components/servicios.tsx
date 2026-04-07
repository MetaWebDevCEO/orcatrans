import Reveal from "./reveal";
import type { ReactElement } from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon: ReactElement;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Carga general y consolidada",
    description:
      "Movimientos confiables para carga estándar y consolidación con atención a tiempos y seguridad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 17h10M7 17a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7l3 3v7a2 2 0 0 1-2 2M7 17v2M17 17v2M9 9h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Materiales peligrosos (regulados)",
    description:
      "Operación coordinada para materiales regulados con enfoque en cumplimiento, seguridad y control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3l9 16H3l9-16z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v4M12 16h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Carga sobredimensionada",
    description:
      "Planeación y traslado de carga sobredimensionada, incluyendo coordinación de ruta y maniobras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 16V8m0 8h16M4 8h16M20 8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Contenedores refrigerados",
    description:
      "Traslado de contenedores refrigerados con cuidado operativo para mantener condiciones del envío.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 4h10v16H7V4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 8h6M9 12h6M12 16v0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Menaje de casa especializado",
    description:
      "Servicio especializado para menaje de casa, con manejo cuidadoso y logística adaptada al proyecto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 10l8-6 8 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 22V12h6v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Maniobras y resguardo",
    description:
      "Consolidación y desconsolidación, además de resguardo temporal en sitio seguro cuando se requiere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 7h16M6 7v14m12-14v14M9 10h6M9 14h6M9 18h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const UNITS = ["Camioneta de 3.5 toneladas", "Torton", "Tractocamiones quinta rueda"] as const;

const TRAILERS = [
  "Portacontenedores",
  "Plataformas",
  "Camas bajas",
  "Lowboys (con y sin rampa)",
  "Cajas secas de 53’",
] as const;

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 dark:bg-black sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-12rem] h-[26rem] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.18] dark:opacity-[0.08]" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-700 dark:text-zinc-300">
              Servicios
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Soluciones de Transporte a tu Medida
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              En ORCA no solo transportamos carga: resolvemos necesidades logísticas complejas.
              Contamos con unidades especializadas, operadores certificados y cobertura nacional para
              adaptarnos a cualquier desafío.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delayMs={80 + index * 90}
              className="group relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-blue-500/20 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:ring-blue-400/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%)]" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/15 transition-colors group-hover:bg-blue-500/15 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal
            delayMs={120}
            className="relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%)]" />
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Tipos de unidades</h3>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              {UNITS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-zinc-950/10 bg-zinc-50 px-3 py-2 dark:border-white/15 dark:bg-black/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delayMs={220}
            className="relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%)]" />
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Remolques</h3>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              {TRAILERS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-zinc-950/10 bg-zinc-50 px-3 py-2 dark:border-white/15 dark:bg-black/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
