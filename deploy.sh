#!/usr/bin/env sh
# abort on errors
set -e

# clone WTFSolidity

git clone git@github.com:AmazingAng/WTFSolidity.git

mv -f WTFSolidity/* docs/

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'note.wenboz.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:boboidream/note.git master

# cd -
