# Help
# https://gist.github.com/prwhite/8168133
help: ##		Show this help.
	@echo "Usage: make [options] [target] ...\nTargets:"; \
	fgrep -h "##" Makefile | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

JS_CONFIG=--bundle --platform=browser --sourcemap --minify  --out-extension:.js=.min.js --loader:.png=dataurl --loader:.svg=text --loader:.data=binary
HTML_CONFIG=--bundle --platform=node --minify --loader:.js=text --loader:.css=text --loader:.html=text --loader:.png=dataurl --loader:.svg=text --loader:.data=binary
esbuild:
	@npx esbuild src/pages/home/*.ts --outdir=public/lib ${JS_CONFIG} \
	&& npx esbuild src/lib/*.ts --outdir=public/lib ${JS_CONFIG}

html:
	@npx esbuild src/index.html.ts --outdir=scripts ${HTML_CONFIG} && node scripts/index.html.js && rm scripts/index.html.js

MIN_CONFIG=--collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --minify-css true --minify-js true
minify: html
	@npx html-minifier ${MIN_CONFIG} public/index.html -o public/index.html

esbuild\:watch:
	@fswatch -o src/**/*.ts | xargs -n1 -I{} make esbuild

sass:
	@npx sass src/styles.scss public/styles.min.css --style compressed

sass\:watch:
	@make sass -- -w

start: ##	Start server locally
	@npx vite

AVATAR_SIZE=255x255
ppm:
	@convert public/images/artursjansons.jpg -resize ${AVATAR_SIZE} -grayscale Rec709luminance -compress none pgm:- > public/images/artursjansons.ppm

ascii: ##	Convert avatar to ASCII
	@convert public/images/artursjansons.jpg -resize ${AVATAR_SIZE} -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > public/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff public/fonts/AlinaScript.ttf public/fonts/AlinaScript.woff

ttf2svg:
	@npx ttf2svg public/fonts/AlinaScript.ttf public/fonts/AlinaScript.svg

png2webp:
	@for f in public/**/images/*.png; do; cwebp -q 80 ${f} -o ${f%%.png}.webp; done;

braille: ascii
	@scripts/braille public/images/artursjansons.ascii > public/images/artursjansons.brf

# Entry point to start
build: ttf2woff ttf2svg sass esbuild html ##	Build project

clean:
	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix public . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix public --cached  \
# 	&& git subtree push --prefix public origin gh-pages
publish:
	@npx gh-pages -d public
