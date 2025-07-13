# Generates

# Creates translation keys by parental and quest name
# Purely for development

if [ $# -lt 1 ]; then
    echo "Error: You must provide at least one arguments."
    echo "Usage: $0 mixed/config/heracles/quests/community"
    exit 1
fi

dir=$1

find $dir -name "*.json" -print0 | while IFS= read -r -d '' file; do
    name=$(basename "$file" .json)
    parent=$(basename "$dir")
    title=$(jq -r ".display.title.translate" "$file")
    sub=$(jq -r ".display.subtitle.translate" "$file")

    echo "\"quests.$parent.$name.name\": \"$title\""
    echo "\"quests.$parent.$name.sub\": \"$sub\""
    echo ''
done
