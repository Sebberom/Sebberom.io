<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Portfolio</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
  <link href='style.css' rel='stylesheet' type='text/css'>
  <?php include 'background.html'; ?>
</head>
<body>
  <div id="portfolio-container">
    <div id="portfolio-image">
      <img src="profile.jpg" alt="Profile Picture">
    </div>
    <div id="portfolio-content">
      <h1>SEBBE Romain</h1>
      <p class="subtitle">Développeur Web Créatif</p>
      <p class="biography">Bienvenue sur mon portfolio! Je suis un développeur passionné par la création d'expériences web innovantes et interactives. Avec une expertise en HTML, CSS et JavaScript, je m'efforce de transformer les idées en réalité digitale.</p>
      <p class="biography">Parcourez ma sélection de projets pour découvrir mon travail et n'hésitez pas à me contacter pour toute collaboration.</p>
    </div>
  </div>

  <!-- Section Projets -->
  <section id="projects-section">
    <h2>Mes Projets</h2>
    <div class="projects-container">
      <button class="project-nav-btn" id="prevBtn" onclick="previousProject()">❮</button>
      
      <div class="projects-display">
        <div id="projectsList"></div>
      </div>
      
      <button class="project-nav-btn" id="nextBtn" onclick="nextProject()">❯</button>
    </div>
  </section>

  <script src="carousel.js"></script>
</body>
</html>
