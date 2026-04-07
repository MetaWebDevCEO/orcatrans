import Link from "next/link";

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              1. Responsable
            </h2>
            <p className="mt-3">
              Esta política describe cómo Transportes ORCA (“ORCA”, “nosotros”) puede recopilar, usar
              y proteger datos personales al interactuar con este sitio web y nuestros canales de
              contacto.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              2. Datos que podemos recopilar
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Datos de contacto: nombre, empresa, correo electrónico y teléfono.</li>
              <li>
                Información del servicio: origen, destino, tipo de carga, requerimientos operativos y
                mensajes que nos compartas.
              </li>
              <li>
                Datos técnicos: dirección IP, tipo de dispositivo/navegador y métricas de uso
                necesarias para el funcionamiento y seguridad del sitio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              3. Finalidades del tratamiento
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Atender solicitudes de información, cotizaciones y contacto.</li>
              <li>Dar seguimiento a conversaciones y requerimientos de servicio.</li>
              <li>Mejorar la experiencia del sitio y mantener la seguridad operativa.</li>
              <li>Cumplir obligaciones legales aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              4. Base de uso
            </h2>
            <p className="mt-3">
              El uso de datos se realiza, según corresponda, para atender una solicitud del usuario,
              por interés legítimo (seguridad/operación del sitio) o por cumplimiento legal. Cuando
              sea necesario, pediremos tu consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              5. Compartición de datos
            </h2>
            <p className="mt-3">
              Podemos compartir datos con proveedores que nos ayudan a operar el sitio y atender
              comunicaciones (por ejemplo, servicios de hosting o correo). Estos proveedores deberán
              tratar la información conforme a instrucciones y medidas de seguridad razonables.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              6. Conservación y seguridad
            </h2>
            <p className="mt-3">
              Conservamos la información el tiempo necesario para las finalidades descritas y para
              cumplir obligaciones legales. Implementamos medidas técnicas y organizativas para
              proteger los datos; sin embargo, ningún sistema es infalible.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              7. Derechos del usuario
            </h2>
            <p className="mt-3">
              Puedes solicitar acceso, rectificación, cancelación u oposición, así como información
              sobre el tratamiento. Para hacerlo, contáctanos por correo:
              {" "}
              <a className="font-semibold hover:underline" href="mailto:contacto@transportesorca.com">
                contacto@transportesorca.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              8. Cambios a esta política
            </h2>
            <p className="mt-3">
              Podemos actualizar esta política para reflejar cambios operativos o legales. La fecha
              de última actualización indica la versión vigente.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
