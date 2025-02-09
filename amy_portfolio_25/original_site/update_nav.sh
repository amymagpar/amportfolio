#!/bin/bash

# Find all index.html files
find . -name "index.html" -type f | while read -r file; do
    # Remove the old navigation HTML and add the components.js script
    sed -i '/<header id="navbar"/,/<\/header>/c\  <script src="/static/js/components.js"></script>' "$file"
done
