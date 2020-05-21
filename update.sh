#!/bin/bash

# Load Conf
. "./newsapi.conf"

curl "https://newsapi.org/v2/top-headlines?country=fr&pageSize=30&apiKey=$newsapi_key" > data/fr.json
curl "https://newsapi.org/v2/top-headlines?sources=hacker-news&pageSize=30&apiKey=$newsapi_key" > data/hacker-news.json
curl "https://newsapi.org/v2/top-headlines?sources=google-news-fr&pageSize=30&apiKey=$newsapi_key" > data/google-news-fr.json
curl "https://newsapi.org/v2/top-headlines?sources=google-news-sa&pageSize=30&apiKey=$newsapi_key" > data/google-news-sa.json
curl "https://newsapi.org/v2/top-headlines?sources=lequipe&pageSize=30&apiKey=$newsapi_key" > data/lequipe.json
curl "https://newsapi.org/v2/top-headlines?sources=le-monde&pageSize=30&apiKey=$newsapi_key" > data/lemonde.json
curl "https://newsapi.org/v2/top-headlines?sources=les-echos&pageSize=30&apiKey=$newsapi_key" > data/lesechos.json
curl "https://newsapi.org/v2/top-headlines?sources=liberation&pageSize=30&apiKey=$newsapi_key" > data/liberation.json

# Add JSONP functions
echo "/**/ parse_fr(`cat data/fr.json`);" > data/fr.js
echo "/**/ parse_hacker_news(`cat data/hacker-news.json`);" > data/hacker-news.js
echo "/**/ parse_google_news_fr(`cat data/google-news-fr.json`);" > data/google-news-fr.js
echo "/**/ parse_google_news_sa(`cat data/google-news-sa.json`);" > data/google-news-sa.js
echo "/**/ parse_lequipe(`cat data/lequipe.json`);" > data/lequipe.js
echo "/**/ parse_lemonde(`cat data/lemonde.json`);" > data/lemonde.js
echo "/**/ parse_lesechos(`cat data/lesechos.json`);" > data/lesechos.js
echo "/**/ parse_liberation(`cat data/liberation.json`);" > data/liberation.js


exit 0