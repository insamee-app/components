#!/bin/bash

git push origin develop
git checkout master
git merge develop
git push origin master
pnpm release --no-cleanup
git checkout develop
git merge master
git push origin develop
pnpm format
