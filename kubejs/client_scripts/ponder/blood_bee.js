function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 2); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
  }

onEvent("ponder.registry", (event) => {
    event.create("inferno:lifeessence_comb").scene("bee", "The Hematophagous bee.", (scene, util) => {
      scene.showStructure();
      scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);
      scene.world.setBlocks([2, 1, 3], "productivebees:advanced_oak_beehive", false);


        const someEntity = scene.world.createEntity("productivebees:configurable_bee", [2.5, 2, 2.5], entity => {
          let nbt = entity.fullNBT
          nbt.putString('type', 'productivebees:hematophagous')
          entity.fullNBT = nbt
        })
        scene.world.createEntity('minecraft:sheep', [4, 1, 4])
        scene.text(80, 'Any mob with the tag productivebees:animals will be a food source for the hematophagous bee.', [4, 2, 4]).placeNearTarget();
        scene.idle(80)
        scene.text(40, 'The Hematophagous bee uses animals as food source.', [2.5, 2, 2.5]).placeNearTarget();



    }).scene("bee2", "The Hematophagous bee's nature.", (scene, util) => {

      scene.showStructure();
      scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);
      scene.world.setBlocks([2, 1, 3], "productivebees:advanced_oak_beehive", false);


        const someEntity = scene.world.createEntity("productivebees:configurable_bee", [2.5, 2, 2.5], entity => {
          let nbt = entity.fullNBT
          nbt.putString('type', 'productivebees:hematophagous')
          entity.fullNBT = nbt
        })

const pos = [3, 1, 3, 4, 1, 4];
const TICK_LENGTH = 20;
const IDLE_TICK_LENGTH = TICK_LENGTH * 3;
const start = [3, 1, 3];
const end = [4, 2, 4];
        const someEntity2 = scene.world.createEntity('minecraft:sheep', [4, 1, 4])
        scene.text(80, 'The hematophagous bee will occasionally kill the animal', [4, 2, 4]).placeNearTarget();
        scene.idle(90)
        scene.world.removeEntity(someEntity2)
        scene.world.removeEntity(someEntity)
        scene.addKeyframe();
            scene.particles.simple(TICK_LENGTH, "small_flame", pos);
            scene.particles.simple(TICK_LENGTH, "small_flame", start).density(10).area(end);
        const someEntity3 = scene.world.createEntity("productivebees:configurable_bee", [4, 1, 4], entity => {
          let nbt = entity.fullNBT
          nbt.putString('type', 'productivebees:hematophagous')
          entity.fullNBT = nbt
        })


    }).scene("bee3", "The Hematophagous and the simulation upgrade.", (scene, util) => {
      scene.showStructure();
      scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);
      scene.world.setBlocks([2, 1, 3], "productivebees:advanced_oak_beehive", false);


        const someEntity = scene.world.createEntity("productivebees:configurable_bee", [2.5, 2, 2.5], entity => {
          let nbt = entity.fullNBT
          nbt.putString('type', 'productivebees:hematophagous')
          entity.fullNBT = nbt
        })


        scene.world.createEntity('minecraft:sheep', [2.5, 0, 2])
        scene.world.replaceBlocks([2, 0, 2, 2, 0, 1], "minecraft:air", false);
        scene.idle(40)
        scene.world.removeEntity(someEntity)
        scene.text(100, "When the hematophagous bee is inside of the hive with a simulation upgrade it will generate honeycombs non-stop.", [2, 2, 4])
scene.idle(120)
scene.text(60, "Be sure too have an animal in front of the hive.", [2, 2, 4])

    })
    
})