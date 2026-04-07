import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px",
      backgroundColor: "#1a1a1a",
      borderBottom: "2px solid #c8a96e",
    }}>
      <Link href="/" style={{
        color: "#c8a96e",
        fontSize: "20px",
        fontWeight: "bold",
        textDecoration: "none",
      }}>
        🌮 Faby Tacos
      </Link>

      <div style={{ display: "flex", gap: "24px" }}>
        <Link href="/paquetes" style={linkStyle}>Paquetes</Link>
        <Link href="/galeria" style={linkStyle}>Galería</Link>
        <Link href="/reservar" style={{
          ...linkStyle,
          backgroundColor: "#c8a96e",
          color: "#1a1a1a",
          padding: "8px 16px",
          borderRadius: "6px",
          fontWeight: "bold",
        }}>Reservar</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
};