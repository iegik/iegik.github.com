# Help
# https://gist.github.com/prwhite/8168133
help: ##		Show this help.
	@echo "Usage: make [options] [target] ...\nTargets:"; \
	fgrep -h "##" Makefile | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

prebuild:
	@npx solidarity

JS_CONFIG=--bundle --platform=browser --sourcemap --minify  --out-extension:.js=.min.js --loader:.png=dataurl --loader:.svg=text --loader:.ppm=text --loader:.ascii=text --loader:.graphql=text --loader:.data=binary
HTML_CONFIG=--bundle --platform=node --minify --loader:.js=text --loader:.css=text --loader:.html=text --loader:.png=dataurl --loader:.svg=text --loader:.data=binary --loader:.ascii=text --loader:.graphql=text
DENO_CONFIG=--import-map=import_map.json --config=deno.json
lib_node:
	@npx esbuild src/services/router.ts --outdir=public/lib ${JS_CONFIG} \
	&& npx esbuild src/lib/*.ts --outdir=public/lib ${JS_CONFIG}

templates_node:
	@npx esbuild src/templates/seo.html.ts ${HTML_CONFIG} | node --inspect \
	&& npx esbuild src/templates/anonymous.html.ts ${HTML_CONFIG} | node --inspect

templates_node_debug:
	@npx esbuild src/templates/seo.html.ts ${HTML_CONFIG} --outdir=tmp | node --inspect tmp/seo.html.js && rm tmp/seo.html.js \
	&& npx esbuild src/templates/anonymous.html.ts ${HTML_CONFIG}  --outdir=tmp | node --inspect tmp/anonymous.html.js && rm tmp/anonymous.html.js

# Depricated due to difficulties with using browser native functions. Use esbuild instead.
# TODO: Improve asset import in header.ts and icons.ts.
lib_deno:
	@deno bundle ${DENO_CONFIG} src/services/router.ts > public/lib/router.min.js; \
	deno bundle ${DENO_CONFIG} src/lib/clouds.ts > public/lib/clouds.min.js;

templates_deno:
	@deno run --allow-write --allow-read --allow-env ${DENO_CONFIG} src/templates/seo.html.ts \
	deno run --allow-write --allow-read --allow-env ${DENO_CONFIG} src/templates/anonymous.html.ts

esbuild: lib_node templates_node

MIN_CONFIG=--remove-comments --remove-redundant-attributes --remove-script-type-attributes --minify-css true --minify-js true
compile: esbuild
	@npx html-minifier ${MIN_CONFIG} public/index.html -o public/index.html && \
	npx html-minifier ${MIN_CONFIG} public/login/index.html -o public/login/index.html

compile\:watch:
	@fswatch -o src/**/*.ts | xargs -n1 -I{} make compile

sass:
	@npx sass src/styles.scss public/styles.min.css --style compressed

sass\:watch:
	@make sass -- -w

start: ##	Start server locally
	@npx vite

ppm: # not used
	@convert public/images/artursjansons.jpg -resize 64x64 -grayscale Rec709luminance -compress none pgm:- > public/images/artursjansons.ppm

thumb: # not used
	@convert public/images/artursjansons.jpg -resize 64x64 public/favicon.ico \
	&& convert public/images/artursjansons.jpg -resize 64x64 public/images/artursjansons_64.jpg \
	&& convert public/images/artursjansons.jpg -resize 432x432 public/images/artursjansons_432.jpg \
	&& convert public/images/artursjansons.jpg -resize 128x128 public/images/artursjansons_128.jpg

ascii: # Convert avatar to ASCII
	@jp2a public/images/artursjansons.jpg --output=public/images/artursjansons.ascii
# @convert public/images/artursjansons.jpg -resize 432x432 -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > public/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff public/fonts/AlinaScript.ttf public/fonts/AlinaScript.woff

ttf2svg:
	@npx ttf2svg public/fonts/AlinaScript.ttf public/fonts/AlinaScript.svg

# for f in public/images/*.png; do; cwebp -quiet -q 80 ${f} -o $(f%%.png).webp; done;
png2webp:
	@scripts/png2webp
#	@$(foreach f,$(wildcard public/images/*.png),cwebp -quiet -q 80 $(f) -o $(patsubst %.png,%.webp,$(f)));

# for f in public/images/*.jpg; do; convert ${f} $(f%%.jpg).png; done;
jpg2png:
	@scripts/jpg2png
#	@$(foreach f,$(wildcard public/images/*.jpg),convert $(f) $(patsubst %.jpg,%.png,$(f)));

braille: ascii # not used
	@scripts/braille public/images/artursjansons.ascii > public/images/artursjansons.brf

# OS X requires the extension to be explicitly specified
eula:
	@cp EULA.md public/EULA.md \
	&& sed -i '' 's/\[AUTHOR\]/Artūrs\ Jansons/g' public/EULA.md \
	&& sed -i '' 's/\[APPNAME\]/https:\/\/iegik.github.com/g' public/EULA.md \
	&& sed -i '' 's/\[SUPPORT_EMAIL\]/a.jansons+web@gmail.com/g' public/EULA.md \
	&& sed -i '' 's/\[PRIVACY_POLICY_URL\]/https:\/\/iegik.github.com\/PRIVACY.md/g' public/EULA.md \


privacy:
	@cp PRIVACY.md public/PRIVACY.md \
	&& sed -i '' 's/\[AUTHOR\]/Artūrs\ Jansons/g' public/PRIVACY.md \
	&& sed -i '' 's/\[APPNAME\]/https:\/\/iegik.github.com/g' public/PRIVACY.md \
	&& sed -i '' 's/\[SUPPORT_EMAIL\]/a.jansons+web@gmail.com/g' public/PRIVACY.md \
	&& sed -i '' 's/\[PRIVACY_POLICY_URL\]/https:\/\/iegik.github.com\/PRIVACY.md/g' public/PRIVACY.md \


# Entry point to start
build: prebuild ttf2woff ttf2svg ascii sass compile thumb jpg2png png2webp eula privacy ##	Build project

clean:
	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix public . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix public --cached  \
# 	&& git subtree push --prefix public origin gh-pages
publish:
	@npx gh-pages -d public -a
