function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 2); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
  }

onEvent("ponder.registry", (event) => {
    event.create(["occultism:datura", "occultism:spirit_fire"]).scene("spirit_fire", "How to get spirit fire", (scene, util) => {
      scene.world.setBlocks([2, 1, 2], "occultism:spirit_fire", false);
scene.showBasePlate();
scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);



        scene.showControls(20, [2, 1, 2], "up")
            .withItem("occultism:datura")
            scene.text(20, "Drop the item", [2.0, 1, 2])

let remove_datura = scene.world.createItemEntity(
    util.vector.centerOf(2, 2, 2),
      util.vector.of(0, 0, 0),
    "occultism:datura"
  );

    scene.idle(40)

    scene
    .showControls(60, [2.5, 2, 2.5], "down")
    .rightClick()
    .withItem("minecraft:flint_and_steel")
    scene.text(60, "Light the item on fire", [2.0, 1, 2])
scene.idle(20)
    scene.world.showSection([2, 1, 2], Facing.UP)
    scene.world.removeEntity(remove_datura);
scene.idle(20)
    })
})