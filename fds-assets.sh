#!/bin/bash

FONTS=(  
  "https://static.frag-den-staat.de/static/fonts/fontawesome-webfont.eot"
  "https://static.frag-den-staat.de/static/fonts/fontawesome-webfont.woff2"
  "https://static.frag-den-staat.de/static/fonts/fontawesome-webfont.woff"
  "https://static.frag-den-staat.de/static/fonts/fontawesome-webfont.ttf"
  "https://static.frag-den-staat.de/static/fonts/Inter-Bold-latin.woff2"
  "https://static.frag-den-staat.de/static/fonts/Inter-Bold-latin.woff"
  "https://static.frag-den-staat.de/static/fonts/Inter-Regular-latin-ext.woff2"
  "https://static.frag-den-staat.de/static/fonts/Inter-Regular-latin-ext.woff"
  "https://static.frag-den-staat.de/static/fonts/Inter-SemiBold-latin-ext.woff2"
  "https://static.frag-den-staat.de/static/fonts/Inter-SemiBold-latin-ext.woff"
)

mkdir -p public/static/css
mkdir -p public/static/fonts

cd public/static/css
wget "https://static.frag-den-staat.de/static/css/main.css"

cd ../fonts
for font in "${FONTS[@]}"
do
  wget "$font"
done