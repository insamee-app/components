#!/bin/bash

git push origin develop
git checkout master
git merge develop
git push origin master
npm run release
