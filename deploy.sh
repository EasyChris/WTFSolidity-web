#!/usr/bin/env sh
# abort on errors
set -e

# clone WTFSolidity

git clone git@github.com:AmazingAng/WTFSolidity.git

mv -f WTFSolidity/* docs/

rm -rf WTFSolidity

