import PaginaTemporada from "../components/PaginaTemporada";
import { metadataTemporada } from "../lib/metadataTemporada";

// faballa.com/diciembre — el contenido sale de app/lib/temporadas.ts (id "diciembre").
export const metadata = metadataTemporada("diciembre");

export default function Page() {
  return <PaginaTemporada id="diciembre" />;
}
