import Reveal from "./reveal";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/especializado.jpg')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(14,165,233,0.25),transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08]" />
        <div className="absolute inset-x-0 top-[-8rem] h-[22rem] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl [animation-duration:10s] animate-pulse" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <Reveal delayMs={0} className="w-full">
          <p className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-semibold tracking-widest text-white/90 shadow-sm backdrop-blur">
            Cobertura nacional en México
          </p>
        </Reveal>

        <Reveal delayMs={120} className="w-full">
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-6xl">
            ORCA Transportes
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </Reveal>

        <Reveal delayMs={220} className="w-full">
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/85">
            Tu aliado en transporte de carga{" "}
            <span className="inline-grid h-[1.2em] overflow-hidden align-bottom">
              <span className="animate-wordcycle grid leading-[1.2]">
                <span className="text-white">especializada</span>
                <span className="text-white">sobredimensionada</span>
                <span className="text-white">regulada</span>
              </span>
            </span>{" "}
            en todo México, con seguridad, puntualidad y atención operativa.
          </p>
        </Reveal>

        <Reveal delayMs={320} className="w-full">
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contacto@transportesorca.com"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-black" />
    </section>
  );
}
