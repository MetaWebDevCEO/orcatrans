import Hero from "./components/hero";
import Servicios from "./components/servicios";
import Stats from "./components/stats";
import Nosotros from "./components/nosotros";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Nosotros />
      <Stats />
      <Cta />
      <Footer />
    </>
  );
}
