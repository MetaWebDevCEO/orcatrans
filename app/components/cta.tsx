import Reveal from "./reveal";

export default function Cta() {
  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-20 dark:bg-black sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-500/25 via-sky-500/10 to-transparent p-px">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-950/10 bg-zinc-50 px-6 py-12 text-center shadow-sm dark:border-white/15 dark:bg-white/5 sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-[-10rem] h-[22rem] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.14] dark:opacity-[0.08]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
            </div>

            <div className="relative">
            <Reveal delayMs={0}>
              <p className="text-xs font-semibold tracking-widest text-zinc-700 dark:text-zinc-300">
                Contacto
              </p>
            </Reveal>
            <Reveal delayMs={120}>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                ¿Listo para mover tu carga?
              </h2>
            </Reveal>
            <Reveal delayMs={220}>
              <p className="mt-6 mx-auto max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Escríbenos y descubre por qué cada vez más empresas confían en ORCA para movimientos de
                carga pesada y especializada en todo México.
              </p>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:contacto@transportesorca.com"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  contacto@transportesorca.com
                </a>
                <a
                  href="tel:+522291521772"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-950/15 bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white/5"
                >
                  +52 229 152 1772
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={420}>
              <address className="mt-10 not-italic text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <div>Carretera Veracruz - Cardel km 2.4</div>
                <div>Col. Renacimiento C.P. 91808</div>
                <div>Veracruz, Veracruz. México</div>
              </address>
            </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
