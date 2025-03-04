#!/usr/bin/env sh

set -e

npm run docs:build

cd .vitepress/dist

git init
git add -A
git commit -m "Деплой сайту на VitePress"

git push -f https://github.com/varshavskiy05/FlexForm.git master:main

cd -
