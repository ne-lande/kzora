function teleportPlayerToSpawningPoint(entity) {
  const respawnPos =
    entity.getRespawnPosition() || entity.level().getSharedSpawnPos();

  Utils.server.runCommandSilent(
    `execute in minecraft:overworld run tp ${entity.username} ${respawnPos.x} ${respawnPos.y} ${respawnPos.z}`,
    `execute run effect give ${entity.username} minecraft:blindness 30`,
  );
}

ServerEvents.loaded((event) => {
  var p = Utils.getServer().persistentData;

  if (p.overworldAllowed == undefined) p.overworldAllowed = false;

  if (p.netherAllowed == undefined) p.netherAllowed = false;

  if (p.endAllowed == undefined) p.endAllowed = false;
});

ServerEvents.customCommand("overworld_switch", (event) => {
  var p = event.server.persistentData.overworldAllowed;

  p = !p;

  event.server.tell(Text.green("Что-то произошло с Внешним миром..."));
});

ServerEvents.customCommand("nether_switch", (event) => {
  var p = event.server.persistentData.netherAllowed;

  p = !p;

  event.server.tell(Text.green("Что-то произошло с Незером..."));
});

ServerEvents.customCommand("end_switch", (event) => {
  var p = event.server.persistentData.endAllowed;

  p = !p;

  event.server.tell(Text.green("Что-то произошло с Эндом..."));
});

CommonAddedEvents.playerChangeDimension((event) => {
  const p = event.server.persistentData;

  const dimension = event.getNewLevel().getName().toString();

  if (
    (dimension === `literal{minecraft:the_overworld}` && !p.overworldAllowed) ||
    (dimension === `literal{minecraft:the_nether}` && !p.netherAllowed) ||
    (dimension === `literal{minecraft:the_end}` && !p.endAllowed)
  )
    teleportPlayerToSpawningPoint(event.player);
});
