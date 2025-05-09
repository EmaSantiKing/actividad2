document.addEventListener("DOMContentLoaded", () => {
    const header = `
      <header>
        <input type="text" placeholder="Buscar..." id="busqueda">
        <nav>
          <ul>
            <li>Juegos</li>
            <li>Consolas</li>
            <li>Periféricos</li>
          </ul>
        </nav>
      </header>
    `;
  
    const footer = `
      <footer>
        <p>Valentin Reyes 7MO 1ra Programacion Grupo A</p>
      </footer>
    `;
  
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
  });
  
