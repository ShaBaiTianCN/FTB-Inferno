onEvent("ponder.registry", (event) => {
    event.create(["avaritia:neutron_collector", "avaritia:neutron_pile"]).scene("tests", "How to use the neutron collector.", (scene, util) => {
        scene.showStructure();
        scene.world.setBlocks([2, 1, 2], "avaritia:neutron_collector", false);
        scene.text(60, "Neutron Collector", [2, 2, 2])
        scene.idle(70)
        scene.text(60, "Generates Piles of neutrons every 3 minutes", [2, 2, 2])
        scene.idle(60)
        scene.world.createItemEntity(
            util.vector.centerOf(2, 2, 2),
              util.vector.of(0, 0, 0),
            "avaritia:neutron_pile");
    });
});