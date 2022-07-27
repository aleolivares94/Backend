const Contenedor = require("./Contenedor");

async function main() {
  const product = new Contenedor("./productos.txt");

  console.log("Muestro todos los productos");
  let allProducts = await product.getAll();
  console.log(allProducts);

  const idToSearch = 1;
  console.log(`Muestro el producto con ID ${idToSearch}`);
  let productById = await product.getById(idToSearch);
  console.log(productById);

  const idToDel = 2;
  console.log(`Se elimino producto con ID ${idToDel}`);
  let delate = await product.delateById(idToDel);

  const obj = {
    title: "Tablet",
    price: 72000,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_972580-MLA48600236953_122021-V.webp",
  };
  let newIdSave = await product.save(obj);
  console.log(newIdSave);
}

main();
