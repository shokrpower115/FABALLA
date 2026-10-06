import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Ubicacion from "./components/Ubicacion";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <Eventos />
      <Galeria />
      <Ubicacion />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
