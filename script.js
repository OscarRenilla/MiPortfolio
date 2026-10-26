// Array de proyectos con sus propiedades: nombre, tecnologías, descripción, URL del repositorio, si es destacado o si está en desarrollo 
const proyectos = [
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
        name: "Mi Portfolio",
        tech: ["HTML", "CSS", "JavaScript"],
        desc: "Portfolio web personal con modo oscuro/claro persistente, diseño responsive y filtrado dinámico de proyectos sin dependencias ni frameworks.",
        url: "https://github.com/OscarRenilla/MiPortfolio.git",
        demo: "https://oscar-renilla-portfolio.vercel.app/",
        destacado: true,
        enDesarrollo: false,
    },
    {
        name: "Zero-Vault",
        tech: ["Kotlin", "Java", "SpringBoot", "PostgreSQL", "AWS"],
        desc: "Gestor de contraseñas multiplataforma con arquitectura Zero-Knowledge (TFG). App Android nativa con biometría, cifrado AES-256-GCM y backend en AWS.",
        url: "https://github.com/OscarRenilla",
        destacado: false,
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

// Referencias a los contenedores de filtros y tarjetas de proyectos
const grid = document.getElementById("project-grid");
const filtros = document.getElementById("filtros");

// Función para renderizar las tarjetas de proyectos según el filtro seleccionado
function renderizarProyectos(filter = "Todos") {
    grid.innerHTML = "";
    proyectos
        .filter((p) => {
            if (filter === "Todos") return true;
            if (filter === "Destacado") return p.destacado === true;
            return p.tech.includes(filter);
        })
        .forEach((p, index) => {
            const card = document.createElement("article");
            card.className = "card card-animate";
            card.style.animationDelay = `${index * 0.05}s`;
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
    const uniqueTechs = [...new Set(proyectos.flatMap((p) => p.tech))];
    const categories = ["Todos", "Destacado", ...uniqueTechs];

    categories.forEach((cat, i) => {
        const b = document.createElement("button");
        b.textContent = cat;
        if (i === 0) b.classList.add("active");
        b.addEventListener("click", () => {
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
                const heading = e.target.querySelector(".cyber-heading");
                if (heading) decryptText(heading);
                io.unobserve(e.target);
            }
        });
    },
    { threshold: 0.1 },
);

document.querySelectorAll(".revela").forEach((el) => io.observe(el));

// Efecto de descifrado / decodificación cyberpunk para textos
function decryptText(element) {
    const originalText = element.getAttribute("data-original") || element.textContent.trim();
    if (!element.getAttribute("data-original")) {
        element.setAttribute("data-original", originalText);
    }
    const glyphs = "!<>-_\\/[]{}—=+*^?#________01";
    let iteration = 0;
    const maxIterations = originalText.length;
    clearInterval(element._decryptInterval);

    element._decryptInterval = setInterval(() => {
        element.textContent = originalText
            .split("")
            .map((char, index) => {
                if (char === " ") return " ";
                if (index < iteration) return originalText[index];
                return glyphs[Math.floor(Math.random() * glyphs.length)];
            })
            .join("");

        if (iteration >= maxIterations) {
            clearInterval(element._decryptInterval);
            element.textContent = originalText;
        }
        iteration += 1 / 2;
    }, 28);
}

// Añadir efecto de descifrado al pasar el ratón por los encabezados
document.querySelectorAll(".cyber-heading").forEach((heading) => {
    heading.addEventListener("mouseenter", () => decryptText(heading));
});

// Efecto máquina de escribir (Typewriter) en la barra de terminal
const terminalPhrases = [
    "Diseñando arquitecturas seguras en la nube (AWS)",
    "Implementando seguridad desde la primera línea de código",
    "Desarrollando Zero-Vault: gestor Zero-Knowledge",
    "Desarrollo móvil nativo con Android & Kotlin",
    "Backend escalable con Java, Spring Boot y microservicios",
    "Resolviendo problemas complejos con soluciones simples",
];

function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function typeLoop() {
        const currentPhrase = terminalPhrases[phraseIndex];

        if (isDeleting) {
            el.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else {
            el.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 60;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1800; // Pausa antes de borrar
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % terminalPhrases.length;
            typingSpeed = 400; // Pausa antes de la siguiente frase
        }

        setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
}

// Canvas interactivo con red de nodos / ciberseguridad
function initCyberCanvas() {
    const canvas = document.getElementById("cyber-canvas");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 26 : 50;
    const mouse = { x: null, y: null, maxDist: 130 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 1.5 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw(color) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const isLight = document.documentElement.dataset.theme === "light";
        const nodeColor = isLight ? "rgba(2, 132, 199, 0.45)" : "rgba(0, 242, 254, 0.55)";
        const lineBase = isLight ? "rgba(2, 132, 199," : "rgba(0, 242, 254,";

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(nodeColor);

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 115) {
                    const alpha = (1 - dist / 115) * (isLight ? 0.16 : 0.25);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `${lineBase}${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.maxDist) {
                    const alpha = (1 - dist / mouse.maxDist) * (isLight ? 0.35 : 0.5);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `${lineBase}${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();
}

// Inicialización de componentes al cargar el DOM
document.getElementById("year").textContent = new Date().getFullYear();
renderizarFiltros();
renderizarProyectos();
initTypewriter();
initCyberCanvas();
