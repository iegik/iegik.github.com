# Credits:
# - iegik https://gist.github.com/iegik/501d4410de3f4c43b4f0e9053f93b8bb
# - prwhite https://gist.github.com/prwhite/8168133
define USAGE
Usage: make [options] [target] ...

Targets:
endef
export USAGE

help: ##		Show this help.
	@echo "$$USAGE" && fgrep -h "##" $(firstword $(MAKEFILE_LIST)) | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

JS_CONFIG=\
--bundle \
--platform=browser \
--sourcemap \
--minify \
--out-extension:.js=.min.js \
--loader:.png=dataurl \
--loader:.svg=text \
--loader:.ppm=text \
--loader:.ascii=text \
--loader:.graphql=text \
--loader:.data=binary

lib_node:
	@npx esbuild src/services/*.ts --outdir=public/lib ${JS_CONFIG} && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

HTML_CONFIG=\
--bundle \
--platform=node \
--minify --loader:.js=text \
--loader:.css=text \
--loader:.html=text \
--loader:.png=dataurl \
--loader:.svg=text \
--loader:.data=binary \
--loader:.ascii=text \
--loader:.graphql=text

templates_node:
	@npx esbuild src/templates/seo.html.ts --outdir=public/ ${HTML_CONFIG} && node --inspect public/seo.html.js && \
	npx esbuild src/templates/anonymous.html.ts --outdir=public/ ${HTML_CONFIG} && node --inspect public/anonymous.html.js && \
	npx esbuild src/templates/ui.html.ts --outdir=public/ ${HTML_CONFIG} && node --inspect public/ui.html.js && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

templates_node_debug:
	@npx esbuild src/templates/seo.html.ts ${HTML_CONFIG} --outdir=tmp | node --inspect tmp/seo.html.js && rm tmp/seo.html.js \
	&& npx esbuild src/templates/anonymous.html.ts ${HTML_CONFIG}  --outdir=tmp | node --inspect tmp/anonymous.html.js && rm tmp/anonymous.html.js

# Depricated due to difficulties with using browser native functions. Use esbuild instead.
# TODO: Improve asset import in header.ts and icons.ts.

DENO_CONFIG=\
--import-map=import_map.json \
--config=deno.json

lib_deno:
	@deno bundle ${DENO_CONFIG} src/services/router.ts > public/lib/router.min.js; && \
	deno bundle ${DENO_CONFIG} src/lib/clouds.ts > public/lib/clouds.min.js;

templates_deno:
	@deno run --allow-write --allow-read --allow-env ${DENO_CONFIG} src/templates/*.html.ts && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

MIN_CONFIG=--remove-comments --remove-redundant-attributes --remove-script-type-attributes --minify-css true --minify-js true
templates: lib_node templates_node
	@npx html-minifier ${MIN_CONFIG} --file-ext html --input-dir public --output-dir public/ && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

templates\:watch:
	@fswatch -o src/*.ts src/**/*.ts | xargs -n1 -I{} make templates

sass:
	@npx sass src/styles.scss public/styles.min.css --style compressed && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

sass\:watch:
	@npx sass src/styles.scss public/styles.min.css --style compressed -w

compile: templates sass

compile\:watch:
	@make templates\:watch sass\:watch

start: ##	Start server locally
	@npx vite

ppm: # not used
	@scripts/png2asciisvg -s 64 -l 8 public/images/artursjansons.jpg && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

thumb: # not used
	@convert public/images/artursjansons.jpg -resize 64 public/favicon.ico && \
	convert public/images/artursjansons.jpg -resize 64 public/images/artursjansons_64.jpg && \
	convert public/images/artursjansons.jpg -resize 432 public/images/artursjansons_432.jpg && \
	convert public/images/artursjansons.jpg -resize 128 public/images/artursjansons_128.jpg && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

ascii: jpg2png # Convert avatar to ASCII
	@jp2a public/images/artursjansons.jpg --output=public/images/artursjansons.ascii
# @scripts/braille -l 6 public/images/artursjansons.png > public/images/artursjansons.ascii
# @convert public/images/artursjansons.jpg -resize 432x432 -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > public/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff public/fonts/AlinaScript.ttf public/fonts/AlinaScript.woff && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

ttf2svg:
	@npx ttf2svg public/fonts/AlinaScript.ttf public/fonts/AlinaScript.svg && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

# for f in public/images/*.png; do; cwebp -quiet -q 80 ${f} -o $(f%%.png).webp; done;
png2webp:
	@scripts/png2webp && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"
#	@$(foreach f,$(wildcard public/images/*.png),cwebp -quiet -q 80 $(f) -o $(patsubst %.png,%.webp,$(f)));

# for f in public/images/*.jpg; do; convert ${f} $(f%%.jpg).png; done;
jpg2png:
	@scripts/jpg2png
#	@$(foreach f,$(wildcard public/images/*.jpg),convert $(f) $(patsubst %.jpg,%.png,$(f)));

braille: ascii # not used
	@scripts/braille public/images/artursjansons.ascii > public/images/artursjansons.brf

# OS X requires the extension to be explicitly specified
eula:
	@cp EULA.md public/EULA.md && \
	sed -i '' 's/\[AUTHOR\]/Artūrs\ Jansons/g' public/EULA.md && \
	sed -i '' 's/\[APPNAME\]/https:\/\/iegik.github.com/g' public/EULA.md && \
	sed -i '' 's/\[SUPPORT_EMAIL\]/a.jansons+web@gmail.com/g' public/EULA.md && \
	sed -i '' 's/\[PRIVACY_POLICY_URL\]/https:\/\/iegik.github.com\/PRIVACY.md/g' public/EULA.md && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

privacy:
	@cp PRIVACY.md public/PRIVACY.md && \
	sed -i '' 's/\[AUTHOR\]/Artūrs\ Jansons/g' public/PRIVACY.md && \
	sed -i '' 's/\[APPNAME\]/https:\/\/iegik.github.com/g' public/PRIVACY.md && \
	sed -i '' 's/\[SUPPORT_EMAIL\]/a.jansons+web@gmail.com/g' public/PRIVACY.md && \
	sed -i '' 's/\[PRIVACY_POLICY_URL\]/https:\/\/iegik.github.com\/PRIVACY.md/g' public/PRIVACY.md && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

# Entry point to start
build: ttf2woff ttf2svg sass compile thumb jpg2png ascii png2webp eula privacy ##	Build project

clean:
	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix public . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix public --cached  \
# 	&& git subtree push --prefix public origin gh-pages
publish:
	@npx gh-pages -d public -a
