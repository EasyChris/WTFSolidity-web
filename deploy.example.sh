#!/usr/bin/env sh
# abort on errors
set -e

cd YOUR_CODE_PATH

# clone WTFSolidity
rm -rf WTFSolidity/ docs/

git clone git@github.com:AmazingAng/WTFSolidity.git

mkdir docs

cp -r .vuepress docs

mv -f WTFSolidity/* docs/

rm -rf WTFSolidity

git add .

git commit -m "auto build"

git push origin master