#!/bin/bash
# Commands to add/remove IP's from a 'whitelist' using an Apache's configuration file.
# sudo wget -O /usr/share/emacs/site-lisp/apache-mode.el https://raw.githubusercontent.com/emacsmirror/emacswiki.org/master/apache-mode.el

getwhitelist () { FILE=/etc/apache2/sites-available/default.conf; awk "/:443/{f=1} f && /Require ip/" "$FILE"; }
addwhitelist () { FILE=/etc/apache2/sites-available/default.conf; [[ -z "$1" ]] && echo "Usage: $0 <IP>" && return 1; sed -i "s@</Directory>@Require ip $1\n&@g" "$FILE"; emacs --batch "$FILE" --load /usr/share/emacs/site-lisp/apache-mode.el --eval="(progn (apache-mode) (indent-region (point-min) (point-max)) (save-buffer))" }
delwhitelist () { FILE=/etc/apache2/sites-available/default.conf; [[ -z "$1" ]] && echo "Usage: $0 <IP>" && return 1; sed -i "/Require ip $1/d" "$FILE"; }
