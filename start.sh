#!/usr/local/bin/zsh

if [[ -z $1 ]]; then
    . ./build.sh && node build/server.js
else
    node build/server.js
fi
