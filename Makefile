# Help
# https://gist.github.com/prwhite/8168133
help: ##		Show this help.
	@echo "Usage: make [options] [target] ...\nTargets:"; \
	fgrep -h "##" Makefile | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

JS_CONFIG=--bundle --platform=browser --sourcemap --minify  --out-extension:.js=.min.js --loader:.png=dataurl --loader:.svg=text --loader:.ppm=text --loader:.ascii=text --loader:.data=binary
HTML_CONFIG=--bundle --platform=node --minify --loader:.js=text --loader:.css=text --loader:.html=text --loader:.png=dataurl --loader:.svg=text --loader:.data=binary --loader:.ascii=text
DENO_CONFIG=--import-map=import_map.json --config=deno.json
esbuild:
	@npx esbuild src/services/router.ts --outdir=public/lib ${JS_CONFIG} \
	&& npx esbuild src/lib/*.ts --outdir=public/lib ${JS_CONFIG}

index:
	@npx esbuild src/templates/seo.html.ts ${HTML_CONFIG} | node

login:
	@npx esbuild src/templates/anonymous.html.ts ${HTML_CONFIG} | node

compile:
	@deno bundle ${DENO_CONFIG} src/services/router.ts > public/lib/router.min.js; \
	deno bundle ${DENO_CONFIG} src/lib/clouds.ts > public/lib/clouds.min.js; \
	deno run --allow-write --allow-read ${DENO_CONFIG} src/templates/seo.html.ts \
	deno run --allow-write --allow-read ${DENO_CONFIG} src/templates/anonymous.html.ts

MIN_CONFIG=--remove-comments --remove-redundant-attributes --remove-script-type-attributes --minify-css true --minify-js true
minify: index login
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

ppm: ## not used
	@convert public/home/images/artursjansons.jpg -resize 64x64 -grayscale Rec709luminance -compress none pgm:- > public/home/images/artursjansons.ppm

thumb: ## not used
	@convert public/home/images/artursjansons.jpg -resize 64x64 public/favicon.ico \
	&& convert public/home/images/artursjansons.jpg -resize 64x64 public/home/images/artursjansons_64.jpg \
	&& convert public/home/images/artursjansons.jpg -resize 432x432 public/home/images/artursjansons_432.jpg \
	&& convert public/home/images/artursjansons.jpg -resize 128x128 public/home/images/artursjansons_128.jpg \
	&& convert public/home/images/artursjansons.png -resize 64x64 public/home/images/artursjansons_64.png \
	&& convert public/home/images/artursjansons.png -resize 432x432 public/home/images/artursjansons_432.png \
	&& convert public/home/images/artursjansons.png -resize 128x128 public/home/images/artursjansons_128.png \
	&& cwebp public/home/images/artursjansons.webp -resize 64 64 -o public/home/images/artursjansons_64.webp \
	&& cwebp public/home/images/artursjansons.webp -resize 432 432 -o public/home/images/artursjansons_432.webp \
	&& cwebp public/home/images/artursjansons.webp -resize 128 128 -o public/home/images/artursjansons_128.webp

ascii: ##	Convert avatar to ASCII
	@jp2a public/home/images/artursjansons.jpg --output=public/home/images/artursjansons.ascii
# @convert public/home/images/artursjansons.jpg -resize 432x432 -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > public/home/images/artursjansons.ascii

ttf2woff:
	@npx ttf2woff public/fonts/AlinaScript.ttf public/fonts/AlinaScript.woff

ttf2svg:
	@npx ttf2svg public/fonts/AlinaScript.ttf public/fonts/AlinaScript.svg

# for f in public/**/images/*.png; do; cwebp -q 80 ${f} -o $(f%%.png).webp; done;
png2webp:
	@$(foreach f,public/**/images/*.png,cwebp -q 80 $(f) -o $(patsubst %.png,%.webp,$(f)));

# for f in public/**/images/*.jpg; do; convert ${f} $(f%%.jpg).png; done;
jpg2png:
	@$(foreach f,public/home/images/bg.jpg,convert $(f) $(patsubst %.jpg,%.png,$(f)));

braille: ascii ## not used
	@scripts/braille public/home/images/artursjansons.ascii > public/home/images/artursjansons.brf

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
build: ttf2woff ttf2svg ascii sass esbuild minify thumb jpg2png png2webp eula privacy ##	Build project

clean:
	@grep -v node_modules .gitignore | awk '{print "rm -rf "$1}' | sh

# publish:
# 	@git subtree add --prefix public . \
# 	&& git commit -m "BUMP" \
# 	&& git subtree rm --prefix public --cached  \
# 	&& git subtree push --prefix public origin gh-pages
publish:
	@npx gh-pages -d public
