import Reveal from "./reveal";

type StatItem = {
  value: string;
  label: string;
  description: string;
};

const STATS: StatItem[] = [
  {
    value: "México",
    label: "Cobertura",
    description: "Operación en todo el país con coordinación por ruta y destino.",
  },
  {
    value: "Pesada",
    label: "Carga",
    description: "Enfoque en movimientos especializados y logística operativa.",
  },
  {
    value: "Sencillo / Full",
    label: "Modalidad",
    description: "Servicios flexibles según el tipo de operación y requerimiento.",
  },
  {
    value: "Personalizada",
    label: "Atención",
    description: "Asesoría y seguimiento con un equipo comprometido.",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative scroll-mt-28 overflow-hidden bg-zinc-50 py-20 dark:bg-black sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-14rem] h-[30rem] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.14] dark:opacity-[0.08]" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-700 dark:text-zinc-300">
              ORCA en resumen
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Enfoque operativo, servicio real
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item, index) => (
            <Reveal
              key={item.label}
              className="group rounded-3xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              delayMs={80 + index * 90}
              as="article"
            >
              <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{item.label}</p>
                <span className="inline-flex h-7 items-center rounded-full bg-blue-500/10 px-3 text-xs font-semibold text-blue-700 ring-1 ring-blue-500/15 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
                  {item.value}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
