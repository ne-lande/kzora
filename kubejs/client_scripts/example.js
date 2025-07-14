 // priority: 0

// Visit the wiki for more info - https://kubejs.com/

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

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  items.forEach((item) => {
    event.remove(item);
  });
});
