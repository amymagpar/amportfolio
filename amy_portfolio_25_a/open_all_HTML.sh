#!/bin/bash

# Check if an argument (directory) is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

# Set the directory from the argument
dir="$1"

# Check if the directory exists
if [ ! -d "$dir" ]; then
  echo "Directory $dir does not exist!"
  exit 1
fi

echo="Opening all HTML files in $dir"

# Recursively find all .html files in the directory and open them with $EDITOR
find "$dir" -type f -name "*.html" -exec $EDITOR {} \;

