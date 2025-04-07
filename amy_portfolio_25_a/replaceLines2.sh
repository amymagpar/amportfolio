#!/bin/bash

directory="site"  # Change as needed

# Use an extended regex pattern to match the class, ignoring whitespace around it
# Note: This handles variations in spacing and tabs
find "$directory" -type f -name "*.html" -exec sed -i -E '
s|class="[[:space:]]*focus:bg-primary-400[[:space:]]+active:bg-primary-800[[:space:]]+animate-fade-up[[:space:]]+animate-once[[:space:]]+animate-duration-\[250ms\][[:space:]]+animate-ease-in[[:space:]]+!fixed[[:space:]]+bottom-5[[:space:]]+start-5[[:space:]]+hidden[[:space:]]+text-balance[[:space:]]+rounded-full[[:space:]]+bg-base-300[[:space:]]+p-3[[:space:]]+text-xs[[:space:]]+font-medium[[:space:]]+!leading-tight[[:space:]]+text-white[[:space:]]+mix-blend-multiply[[:space:]]+shadow-md[[:space:]]+hover:bg-gray-500[[:space:]]+focus:outline-none[[:space:]]+focus:ring-0[[:space:]]*"|class="bg-color5 focus:bg-color4 active:bg-color3 animate-fade-up animate-once animate-duration-[250ms] animate-ease-in !fixed bottom-5 start-5 hidden rounded-full p-3 text-xs font-medium uppercase leading-tight text-white mix-blend-multiply hover:bg-color4 focus:outline-none focus:ring-0"|g
' {} +

echo "Done replacing class attributes."

