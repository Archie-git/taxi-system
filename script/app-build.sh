#!/bin/sh
set -e

eslint 'src/**/*.{ts,tsx}' --fix

tsc --noEmit

ENV_FILE=.env.prod webpack --mode=production
