# News

Un portail d'actualités léger. Source des données : [newsapi.org](https://newsapi.org/).

<img src="https://raw.githubusercontent.com/ziedzaiem/news/master/Screenshots/screen1.png" width="300" alt="screen1.png" />

<img src="https://raw.githubusercontent.com/ziedzaiem/news/master/Screenshots/screen2.png" width="300" alt="screen2.png" />

## Configuration

Pour récupérer les données à partir de [newsapi.org](https://newsapi.org/), il faut obtenir une clé d'API sur ce site et la coller dans un fichier **newsapi.conf** contenant cette ligne : 

```
newsapi_key=API_KEY
```

Le script **update.sh** permet de récupérer les actualités et de les stocker au format JSONP dans le dossier **data**.

Pour ne pas dépasser la limite de 500 requêtes par jour de [newsapi.org](https://newsapi.org/), il est recommandé d'exécuter le script **update.sh** toutes les 30 minutes :

```
*/30 * * * * path/to/news/update.sh > /dev/null
```

## Technologies utilisées

- [Vue.js 2](https://vuejs.org/)
- [Bootstrap 4](https://getbootstrap.com/)
- [Moment.js](https://momentjs.com/)

## Licence

MIT.
