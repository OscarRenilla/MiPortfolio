// Array de proyectos con sus propiedades: nombre, tecnologías, descripción y URL del repositorio 
const proyectos = [
    {
        name: "Proyecto-1-HTML-CSS",
        tech: ["HTML", "CSS"],
        desc: "Prototipo de portfolio web con HTML y CSS",
        url: "https://github.com/OscarRenilla/Proyecto-1-HTML-CSS.git",
    },
    {
        name: "proyecto2-katas-javascript",
        tech: ["HTML", "JavaScript"],
        desc: "Ejercicios (katas) de JavaScript",
        url: "https://github.com/OscarRenilla/proyecto2-katas-javascript.git",
    },
    {
        name: "proyecto3-KatasPython",
        tech: ["Python"],
        desc: "Ejercicios (katas) de Python.",
        url: "https://github.com/OscarRenilla/proyecto3-KatasPython.git",
    },
    {
        name: "proyecto4-SQL",
        tech: ["SQL"],
        desc: "Ejercicios de bases de datos relacionales.",
        url: "https://github.com/OscarRenilla/proyecto4-SQL.git",
    },
    {
        name: "proyecto5-noSQL",
        tech: ["JavaScript", "JSON", "MongoDB"],
        desc: "Ejercicios de bases de datos noSQL.",
        url: "https://github.com/OscarRenilla/proyecto5-noSQL.git",
    },
    {
        name: "Cronoss",
        tech: ["HTML", "CSS", "JavaScript", "Java", "JUnit", "JSON", "SQL"],
        desc: "Galería de relojes (proyecto intermodular).",
        url: "https://github.com/OscarRenilla/Proyecto_Intermodular_DAM1.git",
    },
    {
        name: "WhatsUp",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot"],
        desc: "Aplicación de mensajes entre usuarios.",
        url: "https://github.com/OscarRenilla/WhatsUp.git",
    },
    {
        name: "Concesionario",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot", "SQL"],
        desc: "Galería de vehículos.",
        url: "https://github.com/OscarRenilla/ProyectoFinal_3-Eval_Programacion-LM.git",
    },
    {
        name: "ProyectFail",
        tech: ["Java"],
        desc: "Corrección y optimización de código.",
        url: "https://github.com/OscarRenilla/ProyectFail.git",
    },
];

// Referencias a los contenedores de filtros y tarjetas de proyectos por su id en el HTML
const grid = document.getElementById("project-grid");
const filtros = document.getElementById("filtros");


// Función para renderizar las tarjetas de proyectos según el filtro seleccionado. Por defecto "Todos" muestra todos los proyectos.
function renderizarProyectos(filter = "Todos") {
    grid.innerHTML = ""; // Vacia el grid para no duplicar targetas al cambiar de filtro
    proyectos
        // Se queda solamente con los proyectos que cumplen el filtro o todos si el filtro es "Todos"
        .filter((p) => filter === "Todos" || p.tech.includes(filter))
        .forEach((p) => {
            // Crea un elemento <article> para cada proyecto y le asigna la clase "card". Luego, se rellena con el contenido del proyecto usando innerHTML y se añade al contenedor grid.
            const card = document.createElement("article");
            card.className = "card";
            // Se utiliza map para crear un span por cada tecnología y join para unirlos en un string
            card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
            <a href="${p.url}" target="_blank" rel="noopener">Ver en GitHub →</a>`;
            grid.appendChild(card);
        });
}


// Crea los botones de filtro 
function renderizarFiltros() {
    // El flatMap junta todas las tecnologías de todos los proyectos en un solo array y el Set elimina duplicados. Luego se añade "Todos" al principio del array.
    const techs = ["Todos", ...new Set(proyectos.flatMap((p) => p.tech))];
    techs.forEach((t, i) => {
        const b = document.createElement("button");
        b.textContent = t;
        if (i === 0) b.classList.add("active"); // Empieza seleccionado "Todos" 
        b.addEventListener("click", () => {
            // Al hacer click en un botón, se eliminan las clases "active" de todos los botones y se añade al botón clicado. Luego se renderizan los proyectos según el filtro seleccionado.
            filtros
                .querySelectorAll("button")
                .forEach((x) => x.classList.remove("active")); 
            b.classList.add("active");
            renderizarProyectos(t);
        });
        filtros.appendChild(b);
    });
}

// Tema: Claro - Oscuro
const root = document.documentElement; // Referencia al elemento <html> para cambiar el tema con data-theme

// Se intenta recuperar el tema guardado en localStorage. Si no hay ninguno, se devuelve null
// Se utiliza una función autoejecutable para que se ejecute al cargar el script
const saved = (() => {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
})();

// Si hay un tema guardado, se aplica al cargar la página
if (saved) root.dataset.theme = saved;

// Al hacer click en el botón de cambiar tema, se cambia el tema y se guarda en localStorage
document.getElementById("cambiar-tema").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
        localStorage.setItem("theme", next);
    } catch { }
});

// Animación al hacer scroll
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("visible"); // El CSS se encarga de la animación al añadir la clase "visible"
                io.unobserve(e.target); // La animación solo se hace una vez 
            }
        });
    },
    { threshold: 0.1 }, // Se activa se ve el 10% del elemento 
);

// Se observa cada elemento con la clase "revela" para aplicar la animación al hacer scroll 
document.querySelectorAll(".revela").forEach((el) => io.observe(el));

// Se actualiza el año en el pie de página automáticamente con JavaScript
document.getElementById("year").textContent = new Date().getFullYear();
renderizarFiltros();
renderizarProyectos();
