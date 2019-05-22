#!/bin/bash

if [ $(cat file.txt | wc -l) -gt 9 ]; then
  head -10 file.txt | tail -1
fi
