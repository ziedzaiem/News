// Init Vue App
window.app = new Vue({
  el: "#app",
  data: {
    news: { 0 : [] }, // contains all data
    index: 0, // Current selected source
    titles: ["Top France", "Google News FR", "Hacker News", "L'Equipe", "Google News SA", "Le Monde", "Les Echos", "Libération"],
    sources : [
      "data/fr.js",
      "data/google-news-fr.js",
      "data/google-news-sa.js",
      "data/hacker-news.js",
      "data/lequipe.js",
      "data/lemonde.js",
      "data/lesechos.js",
      "data/liberation.js",
    ],
    article : {
      source : {}
    }
  },
  
  methods: {
    moment: function (item) {
      return moment(item.publishedAt).fromNow();
    },
    openTab: function (item) {
      window.open(item.url, '_newtab');
    },
    openModal: function (item) {
      this.article=item;
      $('#newsModal').modal("show");
    },
    indexplus: function () {
      if(this.index == this.titles.length - 1)
        this.index = 0;
      else
        this.index++;
    },
    indexminus: function () {
      if(this.index == 0)
        this.index = this.titles.length - 1;
      else
        this.index--;
    },
    loadSources : function() {
      this.sources.forEach(function(item){
        var s = document.createElement("script"); 
        s.src = item; 
        document.head.appendChild(s);
      });
    }
  },
  beforeMount(){
     this.loadSources()
  }
});

// Set moment locale
moment.locale("fr");

// Define JSONP functions
function parse_fr(data) { app.news[0] = data.articles; }
function parse_google_news_fr(data) { app.news[1] = data.articles; }
function parse_google_news_sa(data) { app.news[4] = data.articles; }
function parse_hacker_news(data) { app.news[2] = data.articles; }
function parse_lequipe(data) { app.news[3] = data.articles; }
function parse_lemonde(data) { app.news[5] = data.articles; }
function parse_lesechos(data) { app.news[6] = data.articles; }
function parse_liberation(data) { app.news[7] = data.articles; }

// Key Events
function handleKeyDown(evt) {
  switch (evt.key) {
    case "ArrowRight":
      app.indexplus();
      break;

    case "ArrowLeft":
      app.indexminus();
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);
