export interface OpcionBirria {
  cantidad: string;
  precio: number;
}

export interface PaqueteBirria {
  id: string;
  nombre: string;
  detalle?: string;
  opciones: OpcionBirria[];
}

export const carretaBirria = {
  titulo: "Carreta para Eventos Faballa",
  subtitulo: "Paquetes de Birria para tu evento",
  frase: "Todo listo para que se sienten a comer 😉🌮",
  incluye: ["Verdura", "Aderezo chipotle", "Caldo consomé", "Crema", "Salsas", "Desechable (platos, vasos y servilletas)"],
  nota: "El pedido mínimo es de 200 piezas, que alcanzan para aproximadamente 60 personas. Si necesitas menos, con gusto mándanos mensaje y lo platicamos.",
  mensajeWhatsApp: "Hola, me interesa un paquete de birria para un evento",
};

export const paquetesBirria: PaqueteBirria[] = [
  {
    id: "mitad-y-mitad",
    nombre: "Tacos y Quesabirrias",
    detalle: "Mitad y mitad",
    opciones: [
      { cantidad: "100 Quesabirrias + 100 Tacos", precio: 7500 },
      { cantidad: "125 Quesabirrias + 125 Tacos", precio: 9375 },
      { cantidad: "150 Quesabirrias + 150 Tacos", precio: 11250 },
      { cantidad: "175 Quesabirrias + 175 Tacos", precio: 13125 },
      { cantidad: "200 Quesabirrias + 200 Tacos", precio: 15000 },
      { cantidad: "225 Quesabirrias + 225 Tacos", precio: 16875 },
    ],
  },
  {
    id: "quesabirrias",
    nombre: "Solo Quesabirrias",
    opciones: [
      { cantidad: "200 Quesabirrias", precio: 8000 },
      { cantidad: "250 Quesabirrias", precio: 10000 },
      { cantidad: "300 Quesabirrias", precio: 12000 },
      { cantidad: "350 Quesabirrias", precio: 14000 },
      { cantidad: "400 Quesabirrias", precio: 16000 },
      { cantidad: "450 Quesabirrias", precio: 18000 },
    ],
  },
  {
    id: "tacos",
    nombre: "Solo Tacos",
    opciones: [
      { cantidad: "200 Tacos", precio: 7000 },
      { cantidad: "250 Tacos", precio: 8750 },
      { cantidad: "300 Tacos", precio: 10500 },
      { cantidad: "350 Tacos", precio: 12250 },
      { cantidad: "400 Tacos", precio: 14000 },
      { cantidad: "450 Tacos", precio: 15750 },
    ],
  },
];
