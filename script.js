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
        url: "https://github.com/OscarRenilla/proyecto3-KatasPython",
    },
    {
        name: "proyecto4-SQL",
        tech: ["SQL"],
        desc: "Ejercicios de bases de datos relacionales.",
        url: "https://github.com/OscarRenilla/proyecto4-SQL",
    },
    {
        name: "proyecto5-noSQL",
        tech: ["JavaScript", "JSON", "MongoDB"],
        desc: "Ejercicios de bases de datos noSQL.",
        url: "https://github.com/OscarRenilla/proyecto5-noSQL",
    },
    {
        name: "Cronoss",
        tech: ["HTML", "CSS", "JavaScript", "Java", "JUnit", "JSON", "SQL"],
        desc: "Galería de relojes (proyecto intermodular).",
        url: "https://github.com/OscarRenilla/Proyecto_Intermodular_DAM1",
    },
    {
        name: "WhatsUp",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot"],
        desc: "Aplicación de mensajes entre usuarios.",
        url: "https://github.com/OscarRenilla/WhatsUp",
    },
    {
        name: "Concesionario",
        tech: ["HTML", "CSS", "JavaScript", "Java", "SpringBoot", "SQL"],
        desc: "Galería de vehículos.",
        url: "https://github.com/OscarRenilla/ProyectoFinal_3-Eval_Programacion-LM",
    },
    {
        name: "ProyectFail",
        tech: ["Java"],
        desc: "Corrección y optimización de código.",
        url: "https://github.com/OscarRenilla/ProyectFail",
    },
];

const grid = document.getElementById("project-grid");
const filtros = document.getElementById("filtros");

function renderizarProyectos(filter = "Todos") {
    grid.innerHTML = "";
    proyectos
        .filter((p) => filter === "Todos" || p.tech.includes(filter))
        .forEach((p) => {
            const card = document.createElement("article");
            card.className = "card";
            card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
            <a href="${p.url}" target="_blank" rel="noopener">Ver en GitHub →</a>`;
            grid.appendChild(card);
        });
}

function renderizarFiltros() {
    const techs = ["Todos", ...new Set(proyectos.flatMap((p) => p.tech))];
    techs.forEach((t, i) => {
        const b = document.createElement("button");
        b.textContent = t;
        if (i === 0) b.classList.add("active");
        b.addEventListener("click", () => {
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
const root = document.documentElement;
const saved = (() => {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
})();

if (saved) root.dataset.theme = saved;
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
                e.target.classList.add("visible");
                io.unobserve(e.target);
            }
        });
    },
    { threshold: 0.1 },
);

document.querySelectorAll(".revela").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
renderizarFiltros();
renderizarProyectos();
