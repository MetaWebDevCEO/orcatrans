import Link from "next/link";
import Reveal from "./reveal";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
  { label: "Resumen", href: "#stats" },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-950/10 bg-white py-14 dark:border-white/15 dark:bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-10rem] h-[22rem] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.10] dark:opacity-[0.06]" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal as="div" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-base font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
              ORCA Transportes
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Especialistas en transporte de carga pesada y especializada en todo México. Seguridad,
              puntualidad y eficiencia en cada envío.
            </p>
            <div className="mt-5">
              <a
                href="https://www.instagram.com/transportesorca/"
                className="text-sm font-semibold text-zinc-950 hover:underline dark:text-zinc-50"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @transportesorca
              </a>
            </div>
          </div>

          <nav aria-label="Navegación" className="sm:justify-self-end lg:justify-self-start">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Secciones</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:justify-self-end">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Contacto</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <a className="block hover:underline" href="mailto:contacto@transportesorca.com">
                contacto@transportesorca.com
              </a>
              <a className="block hover:underline" href="tel:+522291521772">
                +52 229 152 1772
              </a>
              <div>Veracruz, Veracruz. México</div>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="div"
          delayMs={120}
          className="mt-12 flex flex-col gap-4 border-t border-zinc-950/10 pt-8 text-xs text-zinc-600 dark:border-white/15 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} Transportes ORCA. Todos los derechos reservados. Creado por
            {" "}
            <a
              href="https://metawebdevsolutions.com.mx/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-zinc-950 hover:underline dark:text-zinc-50"
            >
              MetaWeb Dev Solutions
            </a>
            .
          </p>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacidad">
              Privacidad
            </Link>
            <Link className="hover:underline" href="/terminos">
              Términos
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
  
}
