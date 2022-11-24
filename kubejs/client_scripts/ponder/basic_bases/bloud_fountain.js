onEvent("ponder.registry", (event) => {
    event.create("biomesoplenty:flesh").scene( "test","Blood Fountain Structure","kubejs:blood_fountain_base", (scene, util) => {
                

        for (let x = 0; x < 8; x++) {
            for (let z = 0; z < 8; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }       
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 4, z], Facing.DOWN);
                scene.scaleSceneView(0.7)
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 5, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 6, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 7, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        for (let z = 0; z < 8; z++) {
            for (let x = 0; x < 8; x++) {
                scene.world.showSection([x, 8, z], Facing.DOWN);
            }
        }
    });
});