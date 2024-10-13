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

PORT?=3000
NODE_ENV?=development
# IS_DEV:=$(subst "production",false,$(subst "development",true,"$(NODE_ENV)"))
IS_DEV:=$(shell if [ "$(NODE_ENV)" == "development" ]; then echo true; else echo false; fi)
IS_VITE:=$(or $(IS_DEV),false)

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
	@npx esbuild src/services/*.ts --outdir=public/next/lib ${JS_CONFIG} && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

copy_files:
	@cp public/next/lib/router-1990.min.js src/lib/ && \
	cp public/next/lib/router.min.js src/lib/ && \
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
	 @IS_VITE=$(IS_VITE) npx esbuild src/templates/seo.html.ts --outdir=public/next/ ${HTML_CONFIG} && IS_VITE=$(IS_VITE) node --inspect public/next/seo.html.js && \
	 IS_VITE=$(IS_VITE) npx esbuild src/templates/anonymous.html.ts --outdir=public/next/ ${HTML_CONFIG} && IS_VITE=$(IS_VITE) node --inspect public/next/anonymous.html.js && \
	 IS_VITE=$(IS_VITE) npx esbuild src/templates/ui.html.ts --outdir=public/next/ ${HTML_CONFIG} && IS_VITE=$(IS_VITE) node --inspect public/next/ui.html.js && \
	 IS_VITE=$(IS_VITE) npx esbuild src/templates/1990.html.ts --outdir=public/1990/ ${HTML_CONFIG} && IS_VITE=$(IS_VITE) node --inspect public/1990/1990.html.js && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

# Depricated due to difficulties with using browser native functions. Use esbuild instead.
# TODO: Improve asset import in header.ts and icons.ts.
DENO_CONFIG=\
--import-map=import_map.json \
--config=deno.json

lib_deno:
	@deno bundle ${DENO_CONFIG} src/services/router.ts > public/next/lib/router.min.js; && \
	deno bundle ${DENO_CONFIG} src/lib/clouds.ts > public/next/lib/clouds.min.js;

templates_deno:
	@deno run --allow-write --allow-read --allow-env ${DENO_CONFIG} src/templates/*.html.ts && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

MIN_CONFIG=--remove-comments --remove-redundant-attributes --remove-script-type-attributes --minify-css true --minify-js true --no-include-auto-generated-tags
templates: lib_node copy_files templates_node
	@npx html-minifier ${MIN_CONFIG} --file-ext html --input-dir public --output-dir public/ && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

templates\:watch:
	@fswatch -o src/*.ts src/**/*.ts | xargs -n1 -I{} make templates

sass:
	@npx sass src/styles.scss public/next/styles.min.css --style compressed && \
	npx sass src/pages/1990/styles.css public/1990/styles.min.css --style compressed && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

sass\:watch:
	@npx sass src/styles.scss public/next/styles.min.css --style compressed -w && \
	npx sass src/pages/1990/styles.css public/1990/styles.min.css --style compressed -w && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

compile: templates sass

compile\:watch:
	@make templates\:watch sass\:watch

start: ##	Start server locally
	@npx vite public --port $(PORT)

serve: ## Start static server
	npx serve public -p $(PORT)

ppm: # not used
	@scripts/png2asciisvg -s 64 -l 8 public/images/artursjansons.png && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

crop:
	@magick public/images/me.jpg -gravity center -crop 1:1+0+0 +repage -interlace Plane public/images/artursjansons.jpg \

icon: crop
	@magick public/images/artursjansons.jpg -resize 64 -resize 128 -resize 256 public/favicon.ico && \

thumb: crop # not used
	@magick public/images/artursjansons.jpg -resize 32 public/images/artursjansons_32.jpg && \
	magick public/images/artursjansons.jpg -resize 64 public/images/artursjansons_64.jpg && \
	magick public/images/artursjansons.jpg -resize 432 public/images/artursjansons_432.jpg && \
	magick public/images/artursjansons.jpg -resize 128 public/images/artursjansons_128.jpg && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

ascii: jpg2png # Convert avatar to ASCII
	@jp2a public/images/artursjansons.jpg --output=public/images/artursjansons.ascii
# @scripts/braille -l 6 public/images/artursjansons.png > public/images/artursjansons.ascii
# @magick public/images/artursjansons.jpg -resize 432x432 -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > public/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff public/fonts/AlinaScript.ttf public/fonts/AlinaScript.woff && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

ttf2svg:
	@npx ttf2svg public/fonts/AlinaScript.ttf public/fonts/AlinaScript.svg && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

# for f in public/images/*.png; do; cwebp -quiet -q 80 ${f} -o $(f%%.png).webp; done;
png2webp: jpg2png
	@scripts/png2webp && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"
#	@$(foreach f,$(wildcard public/images/*.png),cwebp -quiet -q 80 $(f) -o $(patsubst %.png,%.webp,$(f)));

# for f in public/images/*.jpg; do; magick ${f} $(f%%.jpg).png; done;
jpg2png: thumb
	@scripts/jpg2png
#	@$(foreach f,$(wildcard public/images/*.jpg),magick $(f) $(patsubst %.jpg,%.png,$(f)));

braille: ascii # not used
	@scripts/braille public/images/artursjansons.ascii > public/images/artursjansons.brf

xml2json:
	@cat public/portfolio.xml | xq .

deno:
	@deno run --allow-write --allow-read --allow-env ${DENO_CONFIG} src/server.ts

serverless:
	@npx serverless dev

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

check: ##		Check project
	@npx solidarity && \
	npm run lint && \
	echo -e "\033[2K\r\033[0;32m✓ Task $@ completed\033[0m\n"

# Entry point to start
build: ttf2woff ttf2svg thumb jpg2png ascii png2webp sass compile eula privacy ##	Build project

# WARN: This may accidently delete some files
#clean: ##		Clean project
#	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix public . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix public --cached  \
# 	&& git subtree push --prefix public origin gh-pages
publish: ## Publish project to GitHub Pages
	@npx gh-pages -d public -a
