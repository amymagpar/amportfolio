#!/bin/bash

# Define the directory to search
directory="site"  # Change this to your target directory

# Define the lines to search for and the lines to replace them with
searchLine='🌼   daisyUI 4.12.23\n├─ ✔︎ 2 themes added		https://daisyui.com/docs/themes\n╰─ ★ Star daisyUI on GitHub	https://github.com/saadeghi/daisyui'
replaceLine=''

# Find all HTML files and replace the specified lines
find "$directory" -type f -name "*.html" -exec sed -i "s|$searchLine|$replaceLine|g" {} +

echo "Lines replaced in all HTML files."
