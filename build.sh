#!/usr/bin/bash

# Run TS, then copy client files to public, and move server files up a directory
npx tsc --project tsconfig.client.json
npx tsc --project tsconfig.server.json
cp build/client/* public
mv build/server/* build
rm -rf build/server
