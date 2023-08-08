function crearFicha(personaje) {
        
        const foto = document.createElement("img");
        foto.src = personaje.image;
        foto.alt = "Foto del personaje";
        const nombre = document.createElement("p");
        nombre.textContent = personaje.name;
        nombre.classList.add("nombre");
        const id = document.createElement("p");
        id.textContent = personaje.id;
        id.classList.add("id");
        const estado = document.createElement("p");
        estado.textContent = personaje.status;
        estado.classList.add(personaje.status);
        const especie = document.createElement("p");
        especie.textContent = `${personaje.species} - ${personaje.gender}`;
        const tipo = document.createElement("p");
        tipo.textContent = personaje.type;
        const origen = document.createElement("a");
        origen.textContent = personaje.origin.name;
        origen.href= personaje.origin.url;
        const ficha = document.createElement("div");
        ficha.append(foto, nombre, id, estado, especie, tipo, origen);
        console.log(tipo);
        return ficha
}


  const apiUrl = "https://rickandmortyapi.com/api/character";

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error de respuesta: ${response.status}`);
      }
      const data = await response.json();
      const fichas = document.querySelector(".fichas");
      const personajes = data.results;
      for (const personaje of personajes) {
        fichas.append(crearFicha(personaje));
      }
    } catch (error) {
      console.error("Error al hacer el fetch:", error);
    }
  }
  
  fetchData();