#!/bin/sh

# Find HTML files
find $1 -name \*.html -type f |
while read f
do
        # Split file into words
        sed '
# Remove CSS
/<style/,/<\/style/d
# Remove Javascript
/<script/,/<\/script/d
# Remove HTML tags
s/<[^>]*>//g
# Remove non-word characters
s/[^a-zA-Z]/ /g
# Split words into lines
s/[     ][      ]*/\
/g ' "$f" |
        # Remove blank lines
        sed '/^$/d' |
        # Sort the words
        sort -u |
        # Print words not in the dictionary
        comm -23 - /usr/share/dict/words >/tmp/spell.$$.out
        # See if errors were found
        if [ -s /tmp/spell.$$.out ]
        then
                # Print file, number, and matching words
                fgrep -Hno -f /tmp/spell.$$.out "$f"
        fi
done
# Remove temporary file
rm /tmp/spell.$$.out


