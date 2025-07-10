// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes((event) => {
  // mechanical drill
  event.remove({ output: "create:mechanical_drill" });
  event.shaped(
    Item.of("create:mechanical_drill", 1), // arg 1: output
    [
      " D ",
      "DBD", // arg 2: the shape (array of strings)
      " C ",
    ],
    {
      D: "minecraft:diamond",
      B: "create:brass_ingot", //arg 3: the mapping object
      C: "create:andesite_casing",
    },
  );

  // mechanical saw
  event.remove({ output: "create:mechanical_saw" });
  event.shaped(
    Item.of("create:mechanical_saw", 1), // arg 1: output
    [
      " I ",
      "IBI", // arg 2: the shape (array of strings)
      " C ",
    ],
    {
      I: "createdeco:industrial_iron_sheet",
      B: "create:brass_ingot", //arg 3: the mapping object
      C: "create:andesite_casing",
    },
  );

  // amber fixes
  event.campfireCooking("betterend:raw_amber", "minecraft:birch_log", 1.0);

  // iron chests fixes
  event.remove({ output: "ironchests:netherite_chest" });
  event.smithing(
    "ironchests:netherite_chest", // arg 1: output
    "minecraft:netherite_upgrade_smithing_template", // arg 2: the smithing template
    "ironchests:diamond_chest", // arg 3: the item to be upgraded
    "minecraft:netherite_ingot", // arg 4: the upgrade item
  );

  event.remove({ output: "ironchests:netherite_chest_upgrade" });
  event.smithing(
    "ironchests:netherite_chest_upgrade", // arg 1: output
    "minecraft:netherite_upgrade_smithing_template", // arg 2: the smithing template
    "ironchests:diamond_chest_upgrade", // arg 3: the item to be upgraded
    "minecraft:netherite_ingot", // arg 4: the upgrade item
  );

  event.remove({ output: "ironchests:netherite_barrel" });
  event.smithing(
    "ironchests:netherite_barrel", // arg 1: output
    "minecraft:netherite_upgrade_smithing_template", // arg 2: the smithing template
    "ironchests:diamond_barrel", // arg 3: the item to be upgraded
    "minecraft:netherite_ingot", // arg 4: the upgrade item
  );
});

//MoreJSEvents.villagerTrades((event) => {});

//LootJS.modifiers((event) => {});
