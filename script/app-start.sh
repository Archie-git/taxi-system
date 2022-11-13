#!/bin/sh
set -e

ENV_FILE=.env.dev webpack serve --mode=development --open

