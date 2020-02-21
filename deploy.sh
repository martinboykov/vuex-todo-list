#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

git push -f git@github.com:martinboykov/vuex-todo-list.git master:gh-pages

cd -
