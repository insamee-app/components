#!/bin/bash

git push origin develop
git checkout master
git merge develop
git push origin master
npm run release
git checkout develop
git merge master
git push origin develop
yarn format
