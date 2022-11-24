function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}

const TICK_LENGTH = 20;
const IDLE_TICK_LENGTH = TICK_LENGTH * 3;

onEvent("ponder.registry", (event) => {
    event.create('inferno:pseudo_command_block').scene('section_fading', 'How to summon a Witherstorm for dummies.', (scene, util) =>{
        
        const pos = [4, 1.5, 4];
        const start = [0, 0, 0];
        const end = [7, 7, 7];
        scene.particles.simple(TICK_LENGTH*999, "rain", start).density(10).area(end);

        scene.world.setBlocks([2, 1, 2], "inferno:pseudo_command_block");
        scene.world.setBlocks([2, 2, 2], 'summoningrituals:altar');
        scene.world.setBlocks([1, 1, 4], 'minecraft:soul_sand');
        scene.world.setBlocks([2, 2, 4, 0, 2, 4], 'minecraft:soul_sand');
        scene.world.setBlocks([2, 3, 4], 'minecraft:wither_skeleton_skull');
        scene.world.setBlocks([0, 3, 4], 'minecraft:wither_skeleton_skull');
        scene.world.setBlocks([1, 3, 4], 'minecraft:wither_skeleton_skull');
        scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);

        
        scene.showBasePlate();
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.showSection([1, 1, 4], Facing.DOWN);
        scene.world.showSection([2, 2, 4, 0, 2, 4], Facing.DOWN);
        scene.world.showSection([2, 3, 4], Facing.DOWN);
        scene.world.showSection([0, 3, 4], Facing.DOWN);
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.UP);

        scene.text(20, 'Be sure to do this Ritual during a stormy night!', [2.5, 0, 2.5]).placeNearTarget();
        scene.idle(20)

        scene.text(2, "Place all items on Summoning Altar", [2.5, 2.5, 2.5]).placeNearTarget();
        

        const itemBlockPos = util.grid.at(2.5, 3, 2.5);
        const itemTop = util.vector.topOf(itemBlockPos);
        //Control for input
        let ingredients = [
        'reliquary:witherless_rose',
        Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:withered"}}'),
        'ars_nouveau:glyph_wither',
        'inferno:purifiedinfernalessence',
        'bloodmagic:dungeon_metal',
        //'avaritia:infinity_ingot'
        ]
        ingredients.forEach((input) =>{
        scene
        .showControls(1, [2.5, 3, 2.5], "right")
        .rightClick()
        .withItem(input)
        scene.idle(10)
        scene.world.createItemEntity(itemTop, util.vector.of(0, 0, 0), input);
        })

        
        scene.world.showSection([1, 3, 4], Facing.DOWN);
        scene.text(2, "Summon Wither", [1.5, 3.5, 4.5])
        scene.idle(5);
        scene.world.replaceBlocks([0, 1, 4, 2, 3, 4], 'minecraft:air', true);

        const centerBlockPos = util.grid.at(1, 0, 4);
        const centerTop = util.vector.topOf(centerBlockPos);
        const entity = scene.world.createEntity("wither", centerTop);

        scene.idle(5)
        scene.text(10, "Activate the Ritual with the Infinity Ingot", [2.5, 2.5, 2.5]).placeNearTarget();
        

        scene
        .showControls(5, [2.5, 3, 2.5], "right")
        .rightClick()
        .withItem('avaritia:infinity_ingot')
        scene.idle(10)


        scene.world.removeEntity(entity)
        
        scene.idle(5)
       
        let stormBlockPos = util.grid.at(2.5, 2, 2.5);
        let stormTop = util.vector.topOf(stormBlockPos);
        let storm = scene.world.createEntity("witherstormmod:wither_storm", stormTop);
        scene.text(20, 'Fight the Witherstorm!', [2.5, 2.5, 2.5]).placeNearTarget();
    })
    });