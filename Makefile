# Help
# https://gist.github.com/prwhite/8168133
help: ##		Show this help.
	@echo "Usage: make [options] [target] ...\nTargets:"; \
	fgrep -h "##" Makefile | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

DIST=public
FONTS=${DIST}/fonts

JS_CONFIG=--bundle --platform=browser --sourcemap --minify  --out-extension:.js=.min.js --loader:.png=dataurl --loader:.svg=text --loader:.ppm=text --loader:.ascii=text --loader:.data=binary
HTML_CONFIG=--bundle --platform=node --minify --loader:.js=text --loader:.css=text --loader:.html=text --loader:.png=dataurl --loader:.svg=text --loader:.data=binary
esbuild:
	@npx esbuild src/pages/home/*.ts --outdir=${DIST}/lib ${JS_CONFIG} \
	&& npx esbuild src/lib/*.ts --outdir=${DIST}/lib ${JS_CONFIG}

html:
	@npx esbuild src/index.html.ts --outdir=scripts ${HTML_CONFIG} && node scripts/index.html.js && rm scripts/index.html.js

MIN_CONFIG=--remove-comments --remove-redundant-attributes --remove-script-type-attributes --minify-css true --minify-js true
minify: html
	@npx html-minifier ${MIN_CONFIG} ${DIST}/index.html -o ${DIST}/index.html

esbuild\:watch:
	@fswatch -o src/**/*.ts | xargs -n1 -I{} make esbuild

sass:
	@npx sass src/styles.scss ${DIST}/styles.min.css --style compressed

sass\:watch:
	@make sass -- -w

start: ##	Start server locally
	@npx vite

ppm: ## not used
	@convert ${DIST}/home/images/artursjansons.jpg -resize 64x64 -grayscale Rec709luminance -compress none pgm:- > ${DIST}/home/images/artursjansons.ppm

thumb: ## not used
	@convert ${DIST}/home/images/artursjansons.jpg -resize 64x64 ${DIST}/favicon.ico \
	&& convert ${DIST}/home/images/artursjansons.jpg -resize 64x64 ${DIST}/home/images/artursjansons_64.jpg \
	&& convert ${DIST}/home/images/artursjansons.jpg -resize 255x255 ${DIST}/home/images/artursjansons_255.jpg \
	&& convert ${DIST}/home/images/artursjansons.jpg -resize 128x128 ${DIST}/home/images/artursjansons_128.jpg \
	&& convert ${DIST}/home/images/artursjansons.png -resize 64x64 ${DIST}/home/images/artursjansons_64.png \
	&& convert ${DIST}/home/images/artursjansons.png -resize 255x255 ${DIST}/home/images/artursjansons_255.png \
	&& convert ${DIST}/home/images/artursjansons.png -resize 128x128 ${DIST}/home/images/artursjansons_128.png \
	&& cwebp ${DIST}/home/images/artursjansons.webp -resize 64 64 -o ${DIST}/home/images/artursjansons_64.webp \
	&& cwebp ${DIST}/home/images/artursjansons.webp -resize 255 255 -o ${DIST}/home/images/artursjansons_255.webp \
	&& cwebp ${DIST}/home/images/artursjansons.webp -resize 128 128 -o ${DIST}/home/images/artursjansons_128.webp

ascii: ##	Convert avatar to ASCII
	@jp2a public/home/images/artursjansons.jpg --output=${DIST}/home/images/artursjansons.ascii
# @convert ${DIST}/home/images/artursjansons.jpg -resize 255x255 -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > ${DIST}/home/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff ${FONTS}/AlinaScript.ttf ${FONTS}/AlinaScript.woff

ttf2svg:
	@npx ttf2svg ${FONTS}/AlinaScript.ttf ${FONTS}/AlinaScript.svg

png2webp:
	@for f in ${DIST}/**/images/*.png; do; cwebp -q 80 ${f} -o ${f%%.png}.webp; done;

braille: ascii ## not used
	@scripts/braille ${DIST}/home/images/artursjansons.ascii > ${DIST}/home/images/artursjansons.brf

# Entry point to start
build: ttf2woff ttf2svg ascii sass esbuild html minify ##	Build project

clean:
	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix ${DIST} . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix ${DIST} --cached  \
# 	&& git subtree push --prefix ${DIST} origin gh-pages
publish:
	@npx gh-pages -d ${DIST}
