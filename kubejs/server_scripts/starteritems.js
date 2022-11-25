// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Server Resources...')

// Listen to player login event

//Starter Items

let temple = Item.of(
    'capsule:capsule',
    '{RepairCost:0,author:"FTB",canRotate:0b,color:0,display:{Name:\'{"text":"下界神庙"}\',color:8388608},isReward:1b,label:"Island.nbt",oneUse:1b,size:31,state:5,structureName:"config/capsule/rewards/island.nbt",yOffset:-5}'
)
onEvent('player.logged_in',(event) => {
    // Check if player doesn't have "starting_items" stage yet
    //used for mob staging, these stages will be removed to allow the tougher mobs to spawn

    if (!event.player.stages.has('mobstages')) {
        console.log('Setting initial stages fo: ' + event.player.profile.name)
        event.player.stages.add('easymobs')
        event.player.stages.add('normalmobs')
        event.player.stages.add('hardmobs')
        event.player.stages.add('insanemobs')
        event.player.stages.add('mobstages')
    }

    if (
        event.player.stages.has('starting_items') &&
        !event.player.stages.has('temple')
    ) {
        event.player.give(temple) //existing players need a temple capsule
        event.player.stages.add('temple')
    }
    if (!event.player.stages.has('starting_items')) {
        // Add the stage

        event.server.schedule(300,(_) => {
            if (event.player) {
                //make sure they dont get this stage before fully loading in or else they fall and die.
                event.player.stages.add('starting_items')
            }
        })

        event.player.stages.add('temple')
        // Give some items to player
        event.player.give(
            Item.of(
                'minecraft:soul_campfire',
                1,
                '{RepairCost:0,display:{Name:\'{"text":"灵魂火"}\'}}'
            )
        )
        event.player.give(
            Item.of(
                'minecraft:golden_apple',
                5,
                '{RepairCost:0,display:{Lore:[\'{"text":"不是用来吃的！","color":"dark_red"}\'],Name:\'{"text":"地狱的怜悯"}\'}}'
            )
        )
        let akashic = Item.of('akashictome:tome')
            .withNBT('{RepairCost:0,"akashictome:data":{ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},bloodmagic:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"guide.bloodmagic.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"guide.bloodmagic.name"}]}\'},"patchouli:book":"bloodmagic:guide"}},engineersdecor:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}},evilcraft:{Count:1b,id:"evilcraft:origins_of_darkness"},ftbic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"ftbic:ftbic_guide"}},ftbquests:{Count:1b,id:"ftbquests:book"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},laserio:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}},patchouli_0:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_0","akashictome:displayName":{text:\'{"translate":"item.naturesaura.book.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.naturesaura.book.name"}]}\'},"patchouli:book":"naturesaura:book"}},patchouli_1:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_1","patchouli:book":"apotheosis:apoth_chronicle"}},patchouli_2:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_2","akashictome:displayName":{text:\'{"translate":"Big Book of Bees"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Big Book of Bees"}]}\'},"patchouli:book":"productivebees:guide"}},solcarrot:{Count:1b,id:"solcarrot:food_book"},tconstruct:{Count:1b,id:"tconstruct:puny_smelting"},tconstruct_0:{Count:1b,id:"tconstruct:materials_and_you",tag:{"akashictome:definedMod":"tconstruct_0"}},theoneprobe:{Count:1b,id:"theoneprobe:probenote"}},"akashictome:is_morphing":1b,display:{Name:\'{"text":"Dante\\\'s Divine Libram"}\'}}');

        event.player.give(akashic)
        event.player.give(
            Item.of(
                'quark:glow_shroom',
                1,
                '{RepairCost:0,display:{Name:\'{"text":"照明蘑菇"}\'}}'
            )
        )
    }
})
