#!/bin/sh
set -e

if [ "$1" = --sit ];then
  ENV_FILE=.env.sit webpack serve --mode=development --open
  elif [ "$1" = --stage ]; then
  ENV_FILE=.env.stage webpack serve --mode=development --open
fi

