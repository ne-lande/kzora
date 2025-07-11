find . -name "*.json" -print0 | while IFS= read -r -d '' file; do
  base=$(basename "$file" .json)
  jq --arg key "$base" '
    .display.subtitle.translate = "quests.nether.\($key).sub" |
    .display.title.translate = "quests.nether.\($key).name"
  ' "$file" > tmp.$$.json && mv tmp.$$.json "$file"
done
