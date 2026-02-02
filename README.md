# Background Étoilé Animé - Guide d'utilisation

## 📋 Structure des fichiers

- `background-stars.css` - Fichier CSS du background étoilé (réutilisable)
- `star.css` - Styles du portfolio (importe background-stars.css)
- `index.php` - Page du portfolio
- `example-other-page.html` - Exemple d'utilisation sur une autre page

## 🎯 Comment utiliser le background sur une autre page

### Option 1: Utiliser directement le CSS du background

Importez le fichier `background-stars.css` dans votre page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Ma Page</title>
    <link href="background-stars.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <!-- Ajoutez les divs pour les étoiles -->
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>

    <!-- Votre contenu avec z-index >= 10 -->
    <div style="position: relative; z-index: 10;">Votre contenu ici...</div>
  </body>
</html>
```

### Option 2: Importer dans votre propre CSS

Si vous avez votre propre fichier CSS:

```css
@import url("background-stars.css");

/* Votre CSS personnalisé */
body {
  font-family: "Your Font", sans-serif;
}

.your-content {
  position: relative;
  z-index: 10;
  /* ... */
}
```

## ⚠️ Points importants

1. **Classes CSS**: Utilisez les classes `.stars`, `.stars2`, `.stars3` (pas les IDs)
2. **Z-index**: Assurez-vous que votre contenu a un `z-index` >= 10 pour être au-dessus du background
3. **Position**: Le contenu doit avoir `position: relative` ou `position: absolute` si vous utilisez `z-index`
4. **Pointeur**: Le background a `pointer-events: none`, donc il n'interfère pas avec les clics

## 🎨 Personnalisation

Pour modifier les couleurs ou vitesses d'animation, éditez `background-stars.css`:

- Vitesses d'animation (lignes avec `animation`):

  - `.stars`: 50s
  - `.stars2`: 100s
  - `.stars3`: 150s

- Couleur de fond (ligne 5):
  ```css
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  ```

## ✅ Vérification

- Le background est fixe et ne scroll pas
- Les étoiles animées descent continuellement
- Le contenu reste lisible au-dessus du background
- Fonctionne sur tous les navigateurs modernes
