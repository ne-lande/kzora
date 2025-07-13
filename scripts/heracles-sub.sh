#!/usr/bin/env bash

# WARNING
# IT CAN AND WILL ERASE EVERYTHING IF NOT USED CORRECTLY

# Substitutes titles and subtitles to it corresponding translation key
# Title turns into -> quests.<mark>.<name>.name
# Subtitle turns into -> quests.<mark>.<name>.sub
# <name> is the name of the file

if [ $# -lt 2 ]; then
    echo "Error: You must provide at least two arguments."
    echo "Usage: $0 mixed/config/heracles/quests/community"
    exit 1
fi

dir=$1

find $dir -name "*.json" -print0 | while IFS= read -r -d '' file; do
    file_base=$(basename "$file" .json)
    dir_base=$(basename "$dir")
    key="$dir_base.$file_base"
    jq --arg key "$key" '
        .display.title.translate = "quests.\($key).name" |
        .display.subtitle.translate = "quests.\($key).sub"
    ' "$file" > tmp.$$.json && mv tmp.$$.json "$file"
done
