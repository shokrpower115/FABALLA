import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Ubicacion from "./components/Ubicacion";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FranjaEventos from "./components/FranjaEventos";
import TemporadaEnInicio from "./components/TemporadaEnInicio";
import AvisoEventos from "./components/AvisoEventos";
import RevelarAlDesplazar from "./components/RevelarAlDesplazar";

export default function Home() {
  return (
    <>
      <FranjaEventos />
      <Navbar />
      <main>
        <Hero />
        <TemporadaEnInicio />
        <Menu />
        <Eventos />
        <Galeria />
        <Ubicacion />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </main>
      <AvisoEventos />
      <RevelarAlDesplazar />
    </>
  );
}
