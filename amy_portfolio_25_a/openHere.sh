#!/bin/bash
# Replace /path/to/your/directory with the actual path
directory="."

# Check if the directory exists
if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' not found."
    exit 1
fi

# Open Konsole in the specified directory
konsole --workdir="$directory"
