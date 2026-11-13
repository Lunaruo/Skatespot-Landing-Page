# SkateSpot — landing page (Portfolio Project)

Site statique **HTML / CSS / JavaScript**, responsive, indépendant du projet mobile Flutter.

## Tester localement

Ouvrir `index.html` dans un navigateur, ou lancer :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déployer automatiquement avec GitHub Actions

Le workflow est **déjà fourni** : `.github/workflows/deploy.yml`.

1. Créer un dépôt GitHub public (par exemple `skatespot-landing-page`).
2. Copier **le contenu de ce dossier à la racine** du dépôt, y compris le dossier caché `.github`.
3. Pousser la branche `main`.
4. Aller dans `Settings > Pages > Build and deployment > Source` et sélectionner **GitHub Actions**.
5. Aller dans `Actions > Deploy SkateSpot landing page` pour voir le statut du déploiement.
6. L'URL du site apparaîtra dans `Settings > Pages` après le premier déploiement réussi.

Chaque nouveau `git push` sur `main` republiera automatiquement la page. Il est également possible de déclencher le workflow manuellement dans `Actions`.

> Si les fichiers de la landing page sont dans un sous-dossier et non à la racine du dépôt, modifier `path: .` dans le workflow pour renseigner ce sous-dossier (celui contenant `index.html`).

## Points à compléter pour la revue Holberton

Dans `script.js`, remplacer les valeurs vides par **les vraies URLs** :

```js
const DEPLOYED_APP_URL = '';      // Lien public vers l'application, si disponible
const LINKEDIN_PROFILE_URL = '';  // Profil LinkedIn de l'auteur
const TWITTER_PROFILE_URL = '';   // Profil X / Twitter de l'auteur
```

- En attendant les deux URLs de profils, leurs entrées About sont affichées comme « URL à compléter », sans renvoyer vers une adresse fictive. **Les liens LinkedIn et Twitter ne satisferont donc complètement le critère de revue qu'après remplissage.**
- En attendant l'URL de l'application, le bouton final renvoie au dépôt GitHub. Il faudra une adresse réelle vers l'application pour répondre intégralement au critère d'accès au projet déployé.
- GitHub Pages héberge **la landing page seulement**, pas le backend Node/PostgreSQL ni une version Flutter Android.
- Les 3 visuels de Features et la carte sont des **illustrations**, pas des captures de l'application. Tu peux les remplacer par tes propres captures Android Studio.

## Structure

```
.github/workflows/deploy.yml  # Action GitHub Pages
.nojekyll                     # Désactive le traitement Jekyll
index.html                    # Intro, Features, About, stack, liens
styles.css                    # Mise en forme responsive
script.js                     # Navigation, profils, lien app, animations
assets/                       # Couverture, illustrations SVG, favicon
```

## Critères

- Intro : visuel, nom, slogan, navigation, CTA GitHub (lien application à configurer)
- Features : 3 fonctions avec **visuel**, titre et description distincts
- About : histoire personnelle, lien Holberton, auteur, profils GitHub + liens LinkedIn/X à renseigner, dépôt source
- GitHub Actions : publication automatique de la page statique sur GitHub Pages au push vers `main`
# Skatespot-Landing-Page
