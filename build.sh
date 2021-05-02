#!/usr/local/bin/zsh

# Run TS, then copy client files to public, and move server files up a directory
npx tsc --project tsconfig.json
cp build/client/* public
mv build/server/* build
rm -rf build/server
