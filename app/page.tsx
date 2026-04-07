import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "80px 32px",
        textAlign: "center",
      }}>
        <p style={{ color: "#c8a96e", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
          SERVICIO DE TAQUIZA PARA EVENTOS
        </p>
        <h1 style={{ fontSize: "52px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          El sabor que hace<br />memorable tu evento
        </h1>
        <p style={{ fontSize: "18px", color: "#cccccc", maxWidth: "520px", margin: "0 auto 40px" }}>
          Taquizas profesionales para bodas, XV años, corporativos y reuniones familiares en Culiacán y área metropolitana.
        </p>
        <Link href="/reservar" style={{
          backgroundColor: "#c8a96e",
          color: "#1a1a1a",
          padding: "14px 36px",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "16px",
          textDecoration: "none",
        }}>
          Reservar mi fecha
        </Link>
      </section>

      {/* QUIÉN SOY */}
      <section style={{
        padding: "72px 32px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <p style={{ color: "#c8a96e", fontSize: "13px", letterSpacing: "3px", marginBottom: "12px" }}>
          QUIÉN SOY
        </p>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          Hola, soy Faby
        </h2>
        <p style={{ fontSize: "17px", color: "#555555", lineHeight: 1.8 }}>
          Con más de 10 años de experiencia en eventos, me especializo en llevar 
          el auténtico sabor sinaloense a tu celebración. Cada taquiza es preparada 
          con ingredientes frescos y el cariño que merece tu evento especial.
        </p>
      </section>

      {/* PAQUETES PREVIEW */}
      <section style={{ backgroundColor: "#f9f6f1", padding: "72px 32px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ color: "#c8a96e", fontSize: "13px", letterSpacing: "3px", textAlign: "center", marginBottom: "12px" }}>
            NUESTROS PAQUETES
          </p>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "48px" }}>
            ¿Qué tipo de evento tienes?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {paquetes.map((p) => (
              <div key={p.nombre} style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "32px 24px",
                textAlign: "center",
                border: "1px solid #ebebeb",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>{p.emoji}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{p.nombre}</h3>
                <p style={{ fontSize: "14px", color: "#888888", lineHeight: 1.6 }}>{p.descripcion}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/paquetes" style={{
              border: "2px solid #c8a96e",
              color: "#c8a96e",
              padding: "12px 32px",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "15px",
            }}>
              Ver todos los paquetes
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

const paquetes = [
  { emoji: "🥩", nombre: "Tacos de Asada", descripcion: "Carne asada al carbón con todos los complementos" },
  { emoji: "🍲", nombre: "Tacos de Guisos", descripcion: "Variedad de guisos caseros para todos los gustos" },
  { emoji: "🐐", nombre: "Birria", descripcion: "Birria estilo Sinaloa con consomé incluido" },
  { emoji: "🌭", nombre: "Hot Dogs", descripcion: "Estilo Sinaloa con todos los toppings" },
];