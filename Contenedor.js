const { promises: fs } = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getContendor() {
    try {
      JSON.parse(await fs.promises.readFile(this.ruta));
    } catch (error) {
      throw error;
    }
  }

  //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
  async save(obj) {
    try {
      const products = await this.getAll();
      const lastProd = await this.getById(products.length);
      obj.id = lastProd.id + 1;
      products.push(obj);
      fs.writeFile(this.ruta, JSON.stringify(products, null, 2));
      return obj.id;
    } catch (error) {
      console.log("ID no encontrado!");
    }
  }

  //Recibe un id y devuelve el objeto con ese id, o null si no esta
  async getById(id) {
    const products = await this.getAll();
    const productById = products.find((p) => p.id == id);
    return productById;
  }

  //Devuelve un array con los objetos presentes en el archivo
  async getAll() {
    try {
      const products = await fs.readFile(this.ruta, "utf-8");
      return JSON.parse(products);
    } catch (error) {
      return [];
    }
  }

  //Elimina del archivo el objeto con el id buscado
  async delateById(id) {
    try {
      const products = await this.getAll();
      const indexId = products.findIndex((p) => p.id == id);
      if (indexId > 0) {
        products.splice(indexId, 1);
        fs.writeFile(this.ruta, JSON.stringify(products, null, 2));
      } else {
        throw error;
      }
    } catch (error) {
      console.log("Registro no encontrado!");
    }
  }

  //Elimina todos los objetos presentes en el archivo
  async deleteAll() {
    try {
      fs.unlink(this.ruta);
    } catch (error) {
      console.log("Archivo no encontrado!");
    }
  }
}

module.exports = Contenedor;
