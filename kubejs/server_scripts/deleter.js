const items = [
  "simplyswords:iron_glaive",
  "simplyswords:gold_glaive",
  "simplyswords:diamond_glaive",
  "simplyswords:netherite_glaive",
  "simplyswords:iron_spear",
  "simplyswords:gold_spear",
  "simplyswords:diamond_spear",
  "simplyswords:netherite_spear",
  "simplyswords:iron_claymore",
  "simplyswords:gold_claymore",
  "simplyswords:diamond_claymore",
  "simplyswords:netherite_claymore",
];

LootJS.modifiers((event) => {
  items.forEach((item) => {
    event.addLootTableModifier(/.*/).removeLoot(item);
  });
});

ServerEvents.recipes((event) => {
  items.forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});

ServerEvents.tags("item", (event) => {
  items.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});
