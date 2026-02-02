// Données des projets
const projects = [
  {
    id: 1,
    title: "Projet 1",
    description:
      "Description du premier projet. Cliquez les flèches pour naviguer entre les projets.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect fill='%234a7c9e' width='600' height='350'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EProjet 1%3C/text%3E%3C/svg%3E",
  },
  {
    id: 2,
    title: "Projet 2",
    description:
      "Deuxième projet avec des fonctionnalités avancées et design moderne.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect fill='%237c4a9e' width='600' height='350'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EProjet 2%3C/text%3E%3C/svg%3E",
  },
  {
    id: 3,
    title: "Projet 3",
    description:
      "Troisième projet démontrant l'intégration de technologies web modernes.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect fill='%239e7c4a' width='600' height='350'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EProjet 3%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    title: "Projet 4",
    description:
      "Quatrième projet avec interactions dynamiques et animations fluides.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect fill='%234a9e7c' width='600' height='350'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EProjet 4%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    title: "Projet 5",
    description:
      "Cinquième projet montrant des techniques de développement avancées.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='350'%3E%3Crect fill='%239e4a7c' width='600' height='350'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EProjet 5%3C/text%3E%3C/svg%3E",
  },
];

let currentProjectIndex = 0;

function initializeProjects() {
  const projectsList = document.getElementById("projectsList");
  projectsList.innerHTML = "";

  projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-item" + (index === 0 ? " active" : "");
    projectDiv.innerHTML = `
      <div class="project-content">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info-text">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </div>
    `;
    projectsList.appendChild(projectDiv);
  });
}

function updateProjectDisplay() {
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item, index) => {
    item.classList.remove("active", "prev");

    if (index === currentProjectIndex) {
      item.classList.add("active");
    } else if (index < currentProjectIndex) {
      item.classList.add("prev");
    }
  });
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  updateProjectDisplay();
}

function previousProject() {
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  updateProjectDisplay();
}

// Initialiser les projets au chargement
document.addEventListener("DOMContentLoaded", initializeProjects);

// Support clavier
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextProject();
  if (e.key === "ArrowLeft") previousProject();
});
