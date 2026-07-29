import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Birria from "./components/Birria";
import MenuNocturno from "./components/MenuNocturno";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Ubicacion from "./components/Ubicacion";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main id="inicio">
      <Hero />
      <Servicios />
      <Birria />
      <MenuNocturno />
      <Eventos />
      <Galeria />
      <Ubicacion />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
