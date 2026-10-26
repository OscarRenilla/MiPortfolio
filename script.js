// Array de proyectos con sus propiedades: nombre, tecnologías, descripción, URL del repositorio, si es destacado o si está en desarrollo 
const proyectos = [
    {
        name: "Mi Portfolio",
        tech: ["HTML", "CSS", "JavaScript"],
        desc: "Portfolio web personal con modo oscuro/claro persistente, diseño responsive y filtrado dinámico de proyectos sin dependencias ni frameworks.",
        url: "https://github.com/OscarRenilla/MiPortfolio.git",
        demo: "https://oscar-renilla-portfolio.vercel.app/",
        destacado: true,
        enDesarrollo: false,
    },
    {
        name: "Cronoss",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot", "SQL", "JUnit"],
        desc: "Galería de relojes de lujo (Full-Stack). Proyecto intermodular con arquitectura MVC, gestión de stock y pruebas unitarias con JUnit.",
        url: "https://github.com/OscarRenilla/Proyecto_Intermodular_DAM1.git",
        destacado: true,
        enDesarrollo: false,
    },
    {
        name: "Concesionario",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot", "SQL"],
        desc: "Plataforma de gestión de concesionario de vehículos con catálogo interactivo, operaciones CRUD completas y base de datos relacional.",
        url: "https://github.com/OscarRenilla/ProyectoFinal_3-Eval_Programacion-LM.git",
        destacado: true,
        enDesarrollo: false,
    },
    {
        name: "WhatsUp",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot"],
        desc: "Aplicación web de mensajería en tiempo real entre usuarios con backend robusto en Spring Boot.",
        url: "https://github.com/OscarRenilla/WhatsUp.git",
        destacado: true,
        enDesarrollo: false,
    },
    {
        name: "Zero-Vault",
        tech: ["Kotlin", "Java", "SpringBoot", "PostgreSQL", "AWS"],
        desc: "Gestor de contraseñas multiplataforma con arquitectura Zero-Knowledge (TFG). App Android nativa con biometría, cifrado AES-256-GCM y backend en AWS.",
        url: "https://github.com/OscarRenilla",
        destacado: true,
        enDesarrollo: true,
    },
    {
        name: "Endless Runner 2D",
        tech: ["Unity", "C#", "Android"],
        desc: "Videojuego runner 2D para Android desarrollado en Unity. Controles táctiles, fondo parallax, generación procedural y skins desbloqueables.",
        url: "https://github.com/OscarRenilla",
        destacado: false,
        enDesarrollo: true,
    },
    {
        name: "AutoTaller",
        tech: ["Python", "HTML"],
        desc: "Aplicación CRM para la administración de clientes, órdenes de trabajo y reparaciones en un taller mecánico.",
        url: "https://github.com/OscarRenilla/crm-Taller.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "ProyectFail",
        tech: ["Java"],
        desc: "Proyecto enfocado en la detección de errores, debugging, optimización de algoritmos y refactorización de código Java.",
        url: "https://github.com/OscarRenilla/ProyectFail.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "proyecto5-noSQL",
        tech: ["JavaScript", "JSON", "MongoDB"],
        desc: "Modelado de datos no relacionales, agregaciones y operaciones CRUD con bases de datos MongoDB y JSON.",
        url: "https://github.com/OscarRenilla/proyecto5-noSQL.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "proyecto4-SQL",
        tech: ["SQL"],
        desc: "Diseño de esquemas relacionales, consultas complejas, triggers y normalización de bases de datos.",
        url: "https://github.com/OscarRenilla/proyecto4-SQL.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "proyecto3-KatasPython",
        tech: ["Python"],
        desc: "Resolución de retos algorítmicos, estructuras de datos y buenas prácticas de programación en Python.",
        url: "https://github.com/OscarRenilla/proyecto3-KatasPython.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "proyecto2-katas-javascript",
        tech: ["HTML", "JavaScript"],
        desc: "Ejercicios de lógica y katas de JavaScript: manipulación del DOM, asincronía y funciones avanzadas.",
        url: "https://github.com/OscarRenilla/proyecto2-katas-javascript.git",
        destacado: false,
        enDesarrollo: false,
    },
    {
        name: "Proyecto-1-HTML-CSS",
        tech: ["HTML", "CSS"],
        desc: "Prototipo web responsive con maquetación en HTML5 semántico y estilos modernos en CSS3.",
        url: "https://github.com/OscarRenilla/Proyecto-1-HTML-CSS.git",
        destacado: false,
        enDesarrollo: false,
    },
];

// Referencias a los contenedores de filtros y tarjetas de proyectos por su id en el HTML
const grid = document.getElementById("project-grid");
const filtros = document.getElementById("filtros");


// Función para renderizar las tarjetas de proyectos según el filtro seleccionado. Por defecto "Todos" muestra todos los proyectos.
function renderizarProyectos(filter = "Todos") {
    grid.innerHTML = ""; // Vacía el grid para no duplicar tarjetas al cambiar de filtro
    proyectos
        // Se queda solamente con los proyectos que cumplen el filtro
        .filter((p) => {
            if (filter === "Todos") return true;
            if (filter === "Destacado") return p.destacado === true;
            return p.tech.includes(filter);
        })
        .forEach((p) => {
            // Crea un elemento <article> para cada proyecto y le asigna la clase "card". Luego, se rellena con el contenido del proyecto usando innerHTML y se añade al contenedor grid.
            const card = document.createElement("article");
            card.className = "card";
            if (p.destacado) card.classList.add("card-destacado");

            let badgesHtml = "";
            if (p.destacado) {
                badgesHtml += `<span class="badge badge-destacado">⭐ Destacado</span>`;
            }
            if (p.enDesarrollo) {
                badgesHtml += `<span class="badge badge-desarrollo">🚧 En desarrollo</span>`;
            }

            let linksHtml = `<a href="${p.url}" target="_blank" rel="noopener">${p.enDesarrollo && p.url.endsWith("OscarRenilla") ? "GitHub" : "Ver en GitHub"} →</a>`;
            if (p.demo) {
                linksHtml += `<a href="${p.demo}" target="_blank" rel="noopener" class="link-demo">Visitar web ↗</a>`;
            }

            // Se utiliza map para crear un span por cada tecnología y join para unirlos en un string
            card.innerHTML = `
            <div class="card-header">
                <h3>${p.name}</h3>
                <div class="card-badges">${badgesHtml}</div>
            </div>
            <p>${p.desc}</p>
            <div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="card-links">${linksHtml}</div>`;
            grid.appendChild(card);
        });
}


// Crea los botones de filtro: "Todos", "Destacado" y después las tecnologías únicas
function renderizarFiltros() {
    filtros.innerHTML = "";
    // El flatMap junta todas las tecnologías de todos los proyectos en un solo array y el Set elimina duplicados.
    const uniqueTechs = [...new Set(proyectos.flatMap((p) => p.tech))];
    const categories = ["Todos", "Destacado", ...uniqueTechs];

    categories.forEach((cat, i) => {
        const b = document.createElement("button");
        b.textContent = cat;
        if (i === 0) b.classList.add("active"); // Empieza seleccionado "Todos" 
        b.addEventListener("click", () => {
            // Al hacer click en un botón, se eliminan las clases "active" de todos los botones y se añade al botón clicado. Luego se renderizan los proyectos según el filtro seleccionado.
            filtros
                .querySelectorAll("button")
                .forEach((x) => x.classList.remove("active")); 
            b.classList.add("active");
            renderizarProyectos(cat);
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
