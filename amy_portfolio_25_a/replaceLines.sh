#!/bin/bash

# Define the directory to search
directory="site"  # Change this to your target directory

# Define the lines to search for and the lines to replace them with
searchLine='class=\"focus:bg-primary-400 active:bg-primary-800 animate-fade-up animate-once animate-duration-\[250ms\] animate-ease-in !fixed bottom-5 start-5 hidden text-balance rounded-full bg-base-300 p-3 text-xs font-medium !leading-tight text-white mix-blend-multiply shadow-md hover:bg-gray-500 focus:outline-none focus:ring-0\"'

replaceLine='      class="bg-color5 focus:bg-color4 active:bg-color3 animate-fade-up animate-once animate-duration-[250ms] animate-ease-in !fixed bottom-5 start-5 hidden rounded-full p-3 text-xs font-medium uppercase leading-tight text-white mix-blend-multiply hover:bg-color4 focus:outline-none focus:ring-0" '

# Find all HTML files and replace the specified lines
find "$directory" -type f -name "*.html" -exec sed -i "s|$searchLine|$replaceLine|g" {} +

echo "Lines replaced in all HTML files."
