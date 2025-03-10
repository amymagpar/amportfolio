#!/bin/bash

# Define the directory to search
directory="/path/to/your/folder"  # Change this to your target directory

# Define the lines to search for and the lines to replace them with
searchLine='<meta charset="UTF-8" />'
replaceLine='<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />\n<meta http-equiv="x-ua-compatible" content="ie=edge" />'

# Find all HTML files and replace the specified lines
find "$directory" -type f -name "*.html" -exec sed -i "s|$searchLine|$replaceLine|g" {} +

echo "Lines replaced in all HTML files."
