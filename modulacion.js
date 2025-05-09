document.addEventListener("DOMContentLoaded", () => {
    const header = `
      <header>
        <input type="text" placeholder="Buscar..." id="busqueda">
        <nav>
          <ul>
            <li><a href="index.html">Juegos</a></li>
            <li><a href="pagina1.html">Consolas</a></li>
            <li><a href="pagina2.html">Periféricos</a></li>
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
  