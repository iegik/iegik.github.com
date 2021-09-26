# Help
# https://gist.github.com/prwhite/8168133
help: ##		Show this help.
	@echo "Usage: make [options] [target] ...\nTargets:"; \
	fgrep -h "##" Makefile | sed 's/\([^ ]*\).*##\(.*\)/  \1\t\2/g' | fgrep -v 'fgrep'

esbuild:
	@npx esbuild src/index.ts src/*/*.ts --outdir=build/src/ --bundle --sourcemap --minify  --out-extension:.js=.min.js

esbuild\:watch:
	@fswatch -o src/**/*.ts | xargs -n1 -I{} make esbuild

sass:
	@npx sass src/styles.scss css/styles.min.css --output-style compressed"

sass\:watch:
	@make sass -- -w

start: ##	Start server locally
	@npx serve .
#	@deno run --allow-net --allow-read webserver.ts --no-dir-listing -p 5000 ./build"

AVATAR_SIZE=255x255
ppm:
	@convert i/artursjansons.jpg -resize ${AVATAR_SIZE} -grayscale Rec709luminance -compress none pgm:- > i/artursjansons.ppm

ascii: ##	Convert avatar to ASCII
#	@convert i/artursjansons.jpg -resize ${AVATAR_SIZE} -grayscale Rec709luminance -compress none pgm:- | awk NR\>3 > i/artursjansons.ppm
	@convert i/artursjansons.jpg -resize ${AVATAR_SIZE} -grayscale Rec709luminance -compress none brf:- | awk NR\>3 > i/artursjansons.ascii

braille: ascii
	@./braille i/artursjansons.ascii > i/artursjansons.brf

# TODO: Move to precommit
test:
	@npx tsc -noEmit src/**/*.ts || exit 1

lint\:eslint:
	@npx eslint --fix --ext .ts src/

lint\:stylelint:
	@npx stylelint --fix --syntax scss "src/**/*.scss"

lint\:prettier:
	@npx prettier --write "src/**/**/*.{ts,scss}"

lint: lint\:eslint lint\:prettier lint\:stylelint

# Entry point to start
build: esbuild sass ##	Build project
