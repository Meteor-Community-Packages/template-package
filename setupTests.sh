#!/bin/bash
set -e
FOLDER_NAME=$(basename "$(pwd)")
cd testapp
npm run setup -- "./packages/$FOLDER_NAME"
cd ..