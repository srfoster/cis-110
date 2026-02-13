#!/bin/bash
# Remove duplicate ShowFrame tags - keep only first ShowFrame in consecutive groups

if [ $# -eq 0 ]; then
    echo "Usage: $0 <markdown_file>"
    exit 1
fi

file="$1"

if [ ! -f "$file" ]; then
    echo "Error: File '$file' not found"
    exit 1
fi

awk '
/^{{ShowFrame:/ {
    if (prev_was_showframe == 1) {
        next
    }
    prev_was_showframe = 1
    print
    next
}
{
    prev_was_showframe = 0
    print
}
' "$file" > "$file.tmp" && mv "$file.tmp" "$file"

echo "Removed ShowFrame duplicates from $file"
