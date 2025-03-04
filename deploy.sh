#!/usr/bin/env sh

# Зупинити скрипт у разі помилки
set -e

# Збірка проєкту
npm run docs:build

# Перехід до папки зі згенерованими файлами
cd .vitepress/dist

# Ініціалізація нового репозиторію
git init
git add -A
git commit -m "Деплой сайту на VitePress"

# Завантаження у гілку gh-pages
git push -f https://github.com/varshavskiy05/FlexForm.git master:gh-pages

# Повернення до кореневої папки
cd -
