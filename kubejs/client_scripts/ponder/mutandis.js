onEvent("ponder.registry", (event) => {
    event.create("inferno:mutandis").scene("mutandis", "Mutandis and the items it transforms.", (scene, util) => {
        scene.showStructure();
        scene.world.setBlocks([2, 1, 2], "minecraft:farmland");
scene.world.setBlocks([2, 2, 2], "minecraft:farmland", false);
scene.world.modifyBlock([2, 2, 2], () => Block.id("hexerei:sage_crop").with("age", "0"), false); 
   scene
   .showControls(10, [2.5, 1.5, 2.5], "up")
   .rightClick()
   .withItem("inferno:mutandis")
   scene.idle(20)
   scene.world.replaceBlocks([2, 2, 2], "hexerei:belladonna_flower", false);
   scene
   .showControls(10, [2.5, 1.5, 2.5], "up")
   .rightClick()
   .withItem("inferno:mutandis")
   scene.idle(20)
   scene.world.replaceBlocks([2, 2, 2], "hexerei:mugwort_bush", false);
   scene
   .showControls(10, [2.5, 1.5, 2.5], "up")
   .rightClick()
   .withItem("inferno:mutandis")
   scene.idle(20)
   scene.world.replaceBlocks([2, 2, 2], "hexerei:yellow_dock_bush", false);
   scene
   .showControls(10, [2.5, 1.5, 2.5], "up")
   .rightClick()
   .withItem("inferno:mutandis")
   scene.idle(20)
   scene.world.replaceBlocks([2, 2, 2], "hexerei:mandrake_flower", false);
   scene
   .showControls(10, [2.5, 1.5, 2.5], "up")
   .rightClick()
   .withItem("inferno:mutandis")
   scene.idle(20)
    });
});