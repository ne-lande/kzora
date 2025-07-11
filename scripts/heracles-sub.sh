find . -name "*.json" -print0 | xargs -0 -n 1 -I {} sh -c '
  file="{}"
  base=$(basename "$file" .json)
  title=$(jq -r ".display.title.translate" "$file")
  subtitle=$(jq -r ".display.subtitle.translate" "$file")
  echo "\"quests.nether.${base}.name\": \"${title}\","
  echo "\"quests.nether.${base}.sub\": \"${subtitle}\","
  echo ''
'
