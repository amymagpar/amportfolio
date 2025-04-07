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

# Find all .html files in the directory and store them in a variable
files=$(find "$dir" -type f -name "*.html")

# Check if any .html files were found
if [ -z "$files" ]; then
  echo "No .html files found in $dir."
  exit 1
fi

# Open all the files in the same instance of $EDITOR
$EDITOR $files

