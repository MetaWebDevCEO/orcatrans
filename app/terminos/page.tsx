import Link from "next/link";

export default function TerminosPage() {
  return (
    <main className="bg-white px-6 py-16 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-700 hover:underline dark:text-zinc-300"
        >
          Volver al inicio
        </Link>

        <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              1. Aceptación
            </h2>
            <p className="mt-3">
              Al acceder y utilizar este sitio web, aceptas estos términos. Si no estás de acuerdo,
              por favor no uses el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              2. Uso del sitio
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>El contenido es informativo y puede cambiar sin previo aviso.</li>
              <li>
                No está permitido usar el sitio para actividades ilícitas o que afecten la seguridad
                del servicio.
              </li>
              <li>
                Cualquier cotización o información mostrada puede estar sujeta a validación operativa
                y disponibilidad.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              3. Cotizaciones y servicios
            </h2>
            <p className="mt-3">
              Las cotizaciones solicitadas por correo o teléfono son referenciales hasta que se
              confirmen condiciones como tipo de carga, ruta, permisos, horarios, maniobras y
              restricciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              4. Propiedad intelectual
            </h2>
            <p className="mt-3">
              El contenido, diseño y elementos gráficos del sitio pertenecen a ORCA o a sus
              respectivos titulares. No se autoriza su reproducción para fines comerciales sin
              permiso.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              5. Enlaces de terceros
            </h2>
            <p className="mt-3">
              El sitio puede incluir enlaces a terceros. ORCA no controla dichos sitios y no asume
              responsabilidad por su contenido o prácticas.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              6. Limitación de responsabilidad
            </h2>
            <p className="mt-3">
              ORCA procura mantener la información actualizada; sin embargo, no garantiza que el
              sitio esté libre de errores o interrupciones. En la medida permitida por la ley, ORCA
              no será responsable por daños derivados del uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              7. Contacto
            </h2>
            <p className="mt-3">
              Para dudas sobre estos términos, contáctanos en{" "}
              <a className="font-semibold hover:underline" href="mailto:contacto@transportesorca.com">
                contacto@transportesorca.com
              </a>
              {" "}o al{" "}
              <a className="font-semibold hover:underline" href="tel:+522291521772">
                +52 229 152 1772
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              8. Modificaciones
            </h2>
            <p className="mt-3">
              ORCA puede modificar estos términos en cualquier momento. La fecha de última
              actualización indica la versión vigente.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
