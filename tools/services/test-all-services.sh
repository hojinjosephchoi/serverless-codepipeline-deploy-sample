#!/bin/bash

SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`
cd ../..

test () {
  local APP=$1
  echo ============================================================
  echo "Test on $APP"
  echo ============================================================
  ( cd $APP ; npm t )
}

for project in services/*; do
  test $project
done
