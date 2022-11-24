
function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
  let link = scene.world.showIndependentSection(selection, direction);
  scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
  scene.idle(idleTicks);
  scene.world.hideIndependentSection(link, direction);
  scene.idle(idleTicks);
}

onEvent("ponder.registry", (event) => {
  event.create("inferno:living_metal_geode").scene("section_fading", "Living geode and the usuable blocks for it.", (scene, util) => {

    //MULTIBLOCK
        scene.world.setBlocks([1, 1, 1], "cataclysm:void_stone");
        scene.world.setBlocks([1, 1, 2], "minecraft:crying_obsidian");
        scene.world.setBlocks([1, 1, 3], "cataclysm:void_stone");
        scene.world.setBlocks([2, 1, 1], "minecraft:crying_obsidian");
        scene.world.setBlocks([3, 1, 1], "cataclysm:void_stone");
        scene.world.setBlocks([3, 1, 2], "minecraft:crying_obsidian");
        scene.world.setBlocks([3, 1, 3], "cataclysm:void_stone");
        scene.world.setBlocks([2, 1, 3], "minecraft:crying_obsidian");
        scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:end_stone", false);

        //ORES
        scene.world.setBlocks([2, 2, 2], "minecraft:iron_block");
        scene.world.setBlocks([2, 3, 2], "minecraft:copper_block");
        scene.world.setBlocks([2, 4, 2], "minecraft:emerald_block");
        scene.world.setBlocks([2, 5, 2], "minecraft:coal_block")
        scene.world.setBlocks([2, 6, 2], "ftbic:tin_block")
        scene.world.setBlocks([2, 7, 2], "minecraft:redstone_block")
        scene.world.setBlocks([2, 8, 2], "ftbic:lead_block")
        scene.world.setBlocks([2, 9, 2], "ftbic:aluminum_block")
        scene.world.setBlocks([3, 2, 2], "minecraft:quartz_block")
        scene.world.setBlocks([3, 3, 2], "thermal:nickel_block")
        scene.world.setBlocks([3, 4, 2], "tconstruct:grout")
        scene.world.setBlocks([3, 5, 2], "tconstruct:nether_grout")
        scene.world.setBlocks([3, 6, 2], "create:zinc_block")
        scene.world.setBlocks([3, 7, 2], "ftbic:uranium_block")
        scene.world.setBlocks([3, 8, 2], "minecraft:netherite_block")

        //BasePlate = What to show without the need to do .fadinsection
        scene.showBasePlate();
        scene.world.showSection([1, 1, 1], Facing.DOWN);
        scene.world.showSection([1, 1, 2], Facing.DOWN);
        scene.world.showSection([1, 1, 3], Facing.DOWN);
        scene.world.showSection([2, 1, 1], Facing.DOWN);
        scene.world.showSection([3, 1, 1], Facing.DOWN);
        scene.world.showSection([3, 1, 2], Facing.DOWN);
        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.world.showSection([2, 1, 3], Facing.DOWN);
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.UP);
        scene.idle(10);

        //Control for metal geode item
        scene
        .showControls(99999, [2.5, 2.5, 2.5], "down")
        .rightClick()
        .withItem("inferno:living_metal_geode")

        //FADE
        scene.text(10, "Iron Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 2, 2], [0, -1, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Copper Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 3, 2], [0, -2, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Emerald Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 4, 2], [0, -3, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Coal Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 5, 2], [0, -4, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Tin Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 6, 2], [0, -5, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Redstone Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 7, 2], [0, -6, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Lead Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 8, 2], [0, -7, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Aluminum Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [2, 9, 2], [0, -8, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Quartz Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 2, 2], [-1, -1, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Nickel Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 3, 2], [-1, -2, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Grout", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 4, 2], [-1, -3, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Nether Grout", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 5, 2], [-1, -4, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Zinc Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 6, 2], [-1, -5, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Uranium Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 7, 2], [-1, -6, 0], Direction.UP, 15);
        scene.idle(5);

        scene.text(10, "Netherite Block", [2.0, 2.0, 3.0])
        fadeInSection(scene, [3, 8, 2], [-1, -7, 0], Direction.UP, 15);
        scene.idle(5);

    });
});