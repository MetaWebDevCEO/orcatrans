import Reveal from "./reveal";

type ValueItem = {
  title: string;
};

const VALUES: ValueItem[] = [
  { title: "Compromiso con cada cliente y cada entrega" },
  { title: "Honestidad como base de nuestras relaciones" },
  { title: "Responsabilidad operativa y humana" },
  { title: "Profesionalismo en cada movimiento" },
  { title: "Respeto por el tiempo, el trabajo y la carga de nuestros clientes" },
  { title: "Confianza, el resultado natural de hacer las cosas bien" },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 dark:bg-black sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-14rem] h-[30rem] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.16] dark:opacity-[0.08]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="text-center lg:text-left">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-700 dark:text-zinc-300">
                Nosotros
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                Transportes ORCA
              </h2>
              <p className="mt-6 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                En ORCA, somos especialistas en transporte de carga pesada y especializada en todo México.
                Nos respalda un enfoque riguroso en seguridad, puntualidad y eficiencia, y un compromiso
                inquebrantable con nuestros clientes.
              </p>
              <p className="mt-4 text-pretty text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                Cada envío es una responsabilidad que asumimos con profesionalismo, cuidando los detalles
                desde el punto de origen hasta el destino final.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal
              as="article"
              delayMs={120}
              className="group relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-blue-500/20 dark:border-white/15 dark:bg-white/5 dark:hover:ring-blue-400/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)]" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/15 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M12 3l2.2 4.8L19 9l-3.7 3.6.9 5.1L12 15.9 7.8 17.7l.9-5.1L5 9l4.8-1.2L12 3z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    Nuestra misión
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Ofrecer soluciones integrales en logística y transporte, superando expectativas con
                    cada servicio y construyendo relaciones de confianza a largo plazo.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal
              as="article"
              delayMs={220}
              className="group relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-blue-500/20 dark:border-white/15 dark:bg-white/5 dark:hover:ring-blue-400/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)]" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/15 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M4 12l4 4L20 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 20h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    Nuestra visión
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Ser reconocidos como la empresa líder en transporte de carga pesada en México,
                    destacando por el cuidado de nuestras unidades, la preparación de nuestro equipo y
                    un servicio centrado en las personas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal
          delayMs={140}
          className="relative mt-14 overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-50 p-6 shadow-sm dark:border-white/15 dark:bg-white/5 sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%)]" />
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Nuestros valores</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Principios que guían cada operación.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-zinc-950/10 bg-white px-4 py-3 dark:border-white/15 dark:bg-black/20"
              >
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500/80"
                  aria-hidden="true"
                />
                <span className="leading-6">{item.title}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
