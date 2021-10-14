# Dossards

Pour générer des dossards avec [paged.js](https://pagedjs.org).

## Installation

Pour l’export en ligne de commande (en utilisant `pagedjs-cli`):

```bash
npm install
```

## Usage

1. Créer un nouveau fichier `.html` dans la racine avec son correspondant `.css` (cloner une des paires existantes).
2. Changer les variables de configuration dans une balise `script` du HTML (`DOSSARDS_MAX = 100`).
3. (Optionnel) tester le rendu en lançant un serveur local, ex. [`http-server`](https://www.npmjs.com/package/http-server).
4. Exporter en PDF en ligne de commande:

```bash
npx pagedjs-cli <fichier>.html -o out/<fichier>.pdf
```

## Licence

MIT