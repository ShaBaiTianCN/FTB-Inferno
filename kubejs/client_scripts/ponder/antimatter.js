onEvent("ponder.registry", (event) => {
    event.create(["ftbic:antimatter_constructor", "ftbic:antimatter"]).scene("antimatter", "How to generate antimatter.", (scene, util) => {
        scene.showStructure();
        scene.world.setBlocks([2, 1, 2], "ftbic:antimatter_constructor", false);
        scene.text(60, "Antimatter Contructor", [2, 2, 2])
        scene.idle(70)
        scene.text(60, "Generates antimatter after receiving 1 million zaps.", [2, 2, 2])
        scene.idle(60)
        scene.world.createItemEntity(
            util.vector.centerOf(2, 2, 2),
              util.vector.of(0, 0, 0),
            "ftbic:antimatter");
    });
});