git checkout gh-pages

npm run build

git add -A

git commit -m 'deploy'

git push -f origin gh-pages