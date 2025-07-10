/*
const $OriginLayer = Java.loadClass(
  "io.github.apace100.origins.origin.OriginLayer",
);
const $OriginLayers = Java.loadClass(
  "io.github.apace100.origins.origin.OriginLayers",
);
const $ModComponents = Java.loadClass(
  "io.github.apace100.origins.registry.ModComponents",
);
const $Origin = Java.loadClass("io.github.apace100.origins.origin.Origin");

function getOrigin(entity, originLayerString) {
  let originLayer = $OriginLayers.getLayer(
    originLayerString ?? "origins:origin",
  );
  let origin = $ModComponents.ORIGIN.get(entity).getOrigin(originLayer);

  return origin.getIdentifier();
}

ServerEvents.customCommand("get_origin", (event) => {
  event.server.tell(Text.green(getOrigin(event.player)));
});

const advanced_items = [];
const advanced_tag = "create:advanced_usage";

const master_items = [];
const master_tag = "create:master_usage";

ServerEvents.tags("item", (event) => {
  advanced_tag.forEach((id) => {
    event.add(advanced_tag, id);
  });
});


const advanced_origins = ["origins:humans"];
const master_origins = ["origins:humans"];

BlockEvents.rightClicked("create:advanced_usage", (event) => {
  const { player } = event;

  const origin = getOrigin(event.player);

  if (advanced_origins.includes(origin)) {
  }

  if (master_origins.includes(origin)) {
  }
});
*/
