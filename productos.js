const { promises: fs } = require("fs");

const productos = [
  {
    title: "Celular",
    price: 53000,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_959500-MLA50302263673_062022-V.webp",
    id: 1,
  },
  {
    title: "Tablet",
    price: 72000,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_972580-MLA48600236953_122021-V.webp",
    id: 2,
  },
  {
    title: "Notebook",
    price: 245000,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_622883-MLA48011304859_102021-V.webp",
    id: 3,
  },
];

fs.writeFile("productos.txt", JSON.stringify(productos), (error) => {
  if (error) {
    throw new Error("Error en escritura");
  }
  console.log("Escritura exitosa");
});
