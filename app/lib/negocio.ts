// Fuente única de datos del negocio: teléfono, dirección, redes y horarios.
// Cualquier cambio aquí se refleja en toda la página.

const telefonoWhatsApp = "5216673342261";

export const negocio = {
  nombre: "FABALLA",
  direccion: "2500 C. Misión San Luis Rey, Culiacán Rosales, Sinaloa",
  mapsUrl: "https://maps.app.goo.gl/JRnfBdYWb6LS1rjU8",
  instagramUrl: "https://www.instagram.com/taqueria_faballa?igsh=MXByOXpha3E3bGdvZg==",
  facebookUrl: "https://www.facebook.com/share/17x6pBpT4x/",
};

export function whatsappUrl(mensaje?: string) {
  const base = `https://wa.me/${telefonoWhatsApp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export const horarioBirria = {
  nombre: "Birria",
  dias: "Viernes a domingo",
  horas: "8:00 a.m. a 1:00 p.m.",
};

export const horarioNocturno = {
  nombre: "Menú nocturno",
  dias: "Lunes a viernes",
  horas: "7:00 p.m. a 11:00 p.m.",
};
