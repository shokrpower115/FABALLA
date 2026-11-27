import PaginaTemporada from "../components/PaginaTemporada";
import { metadataTemporada } from "../lib/metadataTemporada";

// faballa.com/reyes — el contenido sale de app/lib/temporadas.ts (id "reyes").
export const metadata = metadataTemporada("reyes");

export default function Page() {
  return <PaginaTemporada id="reyes" />;
}
