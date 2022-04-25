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

mkdir -p public/fds/css
mkdir -p public/fds/fonts

cd public/fds/css
curl "https://static.frag-den-staat.de/static/css/main.css" | sed "s/\/static\//\/frontex-assets\/fds\//g" > main.css

cd ../fonts
for font in "${FONTS[@]}"
do
  wget "$font"
done