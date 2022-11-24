onEvent('block.left_click',(event) => {
    let item = event.player.getMainHandItem()
    if (
        item == 'structurize:sceptergold' &&
        event.player.level.dimension == 'bloodmagic:dungeon'
    ) {
        event.player.tell('The Scepter has no power here.')
        return
    }
    if (item == 'structurize:sceptergold') {
        if (event.block.id == 'minecraft:bedrock') {
            event.server.schedule(1,(_) => {
                event.block.set('minecraft:air')
            })
            if (!event.player.stages.has('bedrock_crumble')) {
                event.player.stages.add('bedrock_crumble')
                event.player.tell(
                    'Energy flows through the scepter as the bedrock crumbles to your will.'
                )
            }
            event.block.popItem('bygonenether:cobbled_blackstone')
            return
        }

        if (event.block.id == 'minecraft:end_portal_frame') {
            event.server.schedule(1,(_) => {
                event.block.set('minecraft:air')
            })
            event.block.popItem('minecraft:end_portal_frame')
            return
        }
    }

})
onEvent('block.break',(event) => {
    let item = event.player.getMainHandItem()
    //Bowels anti-break
    if (event.block.id.contains('witherstorm') && event.player.level.dimension == 'witherstormmod:bowels') {
        if (item.id.contains('witherstormmod:command_block')) return
        if (!event.player.stages.has('bowel_block')) {
            event.player.stages.add('bowel_block')
            event.player.tell('Your tools are not strong enough')
            event.player.tell('Try using a command block tool')
        }
        event.cancel()
    }
})

onEvent('item.entity_interact',(event) => {
    let player = event.player
    let item = player.getMainHandItem()

    if (event.target.type == 'witherstormmod:command_block') {
        if (item === 'witherstormmod:command_block_sword') {
            let mob = event.target;
            let nbt = mob.fullNBT
            let phase = nbt.BossfightManager.CurrentPhase;
            if (phase == 16) {
                player.tell('The Command Block cracks and breaks, unable to hold its grip on this reality any longer... This dimension begins to crumble beneath you....')
                player.tell('As the final blow lands you feel the last vestiges of the abomination drain from this world, back into the realms far beyond here.')

                nbt.BossfightManager.CurrentPhase = 17
                nbt.BossfightManager.PhaseTicks = 0
                mob.fullNBT = nbt

                event.server.scheduleInTicks(300,(_) => {
                    player.data.ftbquests.addProgress('5AB76DFF76164D53',1)
                    player.tell('Peace spreads across the world and finally, your task has ended.')
                    player.tell('A rite gone wrong, now set right. You have mastered the Inferno!!!')
                })
            }
        }
    }
})


onEvent('block.right_click',(event) => {
    let item = event.player.getMainHandItem()
    let item2 = event.player.getOffHandItem()
    let crosspos = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1],
    ]
    let diagonalpos = [
        [1,1],
        [1,-1],
        [-1,1],
        [-1,-1],
    ]
    //debug
    if (item == 'minecraft:debug_stick') {
        console.log(event.player.name)
        event.server.runCommand(`playsound alexsmobs:laviathan_idle master ${event.player.name.text} ${event.block.x} ${event.block.y} ${event.block.z}`)
    }

    // Witherstorm at Spawn disable
    if (event.block.id == 'minecraft:command_block' && event.player.level.dimension == 'minecraft:overworld') {
        if (item == 'minecraft:wither_skeleton_skull') {
            event.cancel()
            event.player.stages.add('commandblock')
            event.server.scheduleInTicks(1,(_) => {
                // remove command block
                event.block.set('minecraft:air')

                //remove wither blocks
                event.player.tell('Things went terribly wrong!')
                event.server.runCommandSilent(`effect give ${event.player.name.text} alexsmobs:earthquake 2`)
                event.server.runCommandSilent(`execute in minecraft:overworld run particle minecraft:ash ${event.block.x} ${event.block.y} ${event.block.z} 1 1 1 1 10000 force`)
                event.server.runCommandSilent(`playsound witherstormmod:wither_storm_boss_theme master ${event.player.name.text} ${event.block.x} ${event.block.y} ${event.block.z}`)
            })
            for (let x = -1; x > 1; x++) {
                console.log(x)
                for (let y = -1; y > 1; y++) {
                    console.log(y)
                    for (let z = -1; z > 1; z++) {
                        console.log(z)
                        let block = event.block.offset(x,y,z).id
                        console.log(block)
                        if (block.contains('soul_sand') || block.contains('wither_skeleton_skull')) {
                            event.block.offset(x,y,z).set('minecraft:air')

                        }
                    }
                }
            }
            event.server.scheduleInTicks(40,(_) => {
                event.server.runCommandSilent(`title ${event.player.name.text} title {"text":"RUN!", "bold":true, "color":"red"}`)
                event.server.runCommandSilent(`title ${event.player.name.text} subtitle {"text":"Run for your Life!", "italic":true, "color":"yellow"}`)
                event.player.tell('Its best to make a move...')
                event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x} ${event.block.y} ${event.block.z}`)
                event.server.runCommandSilent(`playsound alexsmobs:laviathan_hurt master ${event.player.name.text} ${event.block.x} ${event.block.y} ${event.block.z}`)
            })
            event.server.scheduleInTicks(60,(_) => {
                event.player.tell('Now!')
                event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x + 1} ${event.block.y} ${event.block.z + 1}`)
                event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x} ${event.block.y} ${event.block.z}`)
                event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x - 1} ${event.block.y} ${event.block.z - 1}`)
                event.server.runCommandSilent(`playsound alexsmobs:laviathan_hurt master ${event.player.name.text} ${event.block.x} ${event.block.y} ${event.block.z}`)
            })
            event.server.scheduleInTicks(100,(_) => {
                event.player.tell("What are you waiting for?...RUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUN")
                for (let i = 0; i < 6; i++) {
                    let randomInt = Math.floor(Math.random() * 5)
                    let blockx = event.block.x + randomInt
                    let blockz = event.block.z + randomInt
                    event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x + randomInt} ${event.block.y} ${event.block.z + randomInt}`)
                    event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x - randomInt} ${event.block.y} ${event.block.z - randomInt}`)
                    event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x - randomInt} ${event.block.y} ${event.block.z + randomInt}`)
                    event.server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:lightning_bolt ${event.block.x + randomInt} ${event.block.y} ${event.block.z - randomInt}`)
                    event.server.runCommandSilent(`execute in minecraft:overworld run particle minecraft:ash ${blockx} ${event.block.y} ${blockz} 2 1 2 1 10000 force`)
                }

            })
            event.server.scheduleInTicks(200,(_) => {
                event.server.runCommandSilent(`summon witherstormmod:super_tnt ${event.block.x + 2} ${event.block.y - 8} ${event.block.z + 2}`)
                event.server.runCommandSilent(`summon witherstormmod:super_tnt ${event.block.x - 2} ${event.block.y - 6} ${event.block.z - 2}`)
                event.server.runCommandSilent(`summon witherstormmod:super_tnt ${event.block.x + 2} ${event.block.y - 3} ${event.block.z - 2}`)
                event.server.runCommandSilent(`summon witherstormmod:super_tnt ${event.block.x - 2} ${event.block.y - 2} ${event.block.z + 2}`)
            })
            event.server.scheduleInTicks(600,(_) => {
                event.player.tell('This shouldnt have happened...')
            })
            event.server.scheduleInTicks(620,(_) => {
                event.player.tell('Maybe I should consult my journals for any clues')
            })

        }
    }

    // Anti Witherstorm Cheese
    let blockblacklist = [
        'ftbic:nuke',
        'minecraft:tnt',
        'witherstormmod:super_tnt',
        'witherstormmod:formidibomb',
        'ae2:formation_plane',
        'minecraft:dispenser',
        'clickmachine:auto_clicker',
        'minecraft:tnt_minecart',
        'create:deployer'
    ]
    if (event.player.level.dimension == 'witherstormmod:bowels') {
        blockblacklist.forEach(blacklistitem => {
            if (item == blacklistitem || item2 == blacklistitem) {
                event.cancel()
                event.player.tell(`The Witherstorm's presence wont allow you to place this block.`)
            }

        })
    }

    //Mineral Deposits
    if (item === 'inferno:living_metal_geode') {
        let inEnd = 1
        if (event.player.level.dimension != 'minecraft:the_end') inEnd = 0
        //check surrounding block
        let crossblock = 'cataclysm:void_stone'
        let diagonalblock = 'minecraft:crying_obsidian'

        crosspos.forEach((pos) => {
            if (
                event.level.getBlock(
                    event.block.x + pos[0],
                    event.block.y,
                    event.block.z + pos[1]
                ) != crossblock
            )
                return
        })
        diagonalpos.forEach((pos) => {
            if (
                event.level.getBlock(
                    event.block.x + pos[0],
                    event.block.y,
                    event.block.z + pos[1]
                ) != diagonalblock
            )
                return
        })

        //Mineralarray
        let mineralarray = [
            ['minecraft:iron_block','chalcopyrite'],
            ['minecraft:copper_block','auricupride'],
            ['minecraft:emerald_block','beryl'],
            ['minecraft:coal_block','bituminous_coal'],
            ['ftbic:tin_block','cassiterite'],
            ['minecraft:redstone_block','cinnabar'],
            ['ftbic:lead_block','galena'],
            ['ftbic:aluminum_block','laterite'],
            ['minecraft:quartz_block','mephitic_quarzite'],
            ['thermal:nickel_block','pentlandite'],
            ['tconstruct:grout','silt'],
            ['tconstruct:nether_grout','nether_silt'],
            ['create:zinc_block','Sphalerite'],
            ['ftbic:uranium_block','uraninite'],
            ['minecraft:netherite_block','ancient_debris'],
        ]

        //check for middleblock
        mineralarray.forEach((ids) => {
            let mineralBlock = ids[0]
            let deposit = ids[1]
            if (event.block.id === mineralBlock) {
                if (inEnd === 0) {
                    event.player.tell('This Ritual only works in the End dimension')
                    return
                }
                item.count--
                event.server.schedule(1,(_) => {
                    //Set air to surrounding blocks
                    crosspos.forEach((pos) => {
                        event.block.offset(pos[0],0,pos[1]).set('minecraft:air')
                    })
                    diagonalpos.forEach((pos) => {
                        event.block.offset(pos[0],0,pos[1]).set('minecraft:air')
                    })
                    //Set Air to middle block + execute command
                    event.block.set('minecraft:air')
                    let particle = 'minecraft:explosion'
                    event.player
                        .getServer()
                        .runCommandSilent(
                            `execute in minecraft:the_end run particle ${particle} ${event.block.x} ${event.block.y} ${event.block.z} 0.5 0.5 0.5 1 20 force`
                        )
                    let command = `/execute in minecraft:the_end run ie mineral put "immersiveengineering:mineral/${deposit}" 8 ${event.block.x} ${event.block.z}`
                    if (mineralBlock === 'create:zinc_block')
                        command = `/execute in minecraft:the_end run ie mineral put "createaddition:compat/immersiveengineering/sphalerite" 8 ${event.block.x} ${event.block.z}`
                    event.player.tell(
                        'The block has been consumed by the lands and resulted into a generous ore deposit'
                    )
                    event.player.getServer().runCommandSilent(command)
                })
            }
        })
    }

    if (
        (item == 'tiab:time_in_a_bottle' || item2 == 'tiab:time_in_a_bottle') &&
        event.player.crouching
    ) {
        if (event.block.id == 'avaritia:neutron_collector') {
            event.player.tell(
                'The temporal concentration of dark matter caused a tear in reality!'
            )
            event.block.createExplosion()
            event.server.schedule(1,(_) => {
                event.block.set('minecraft:air')
            })
            event.player
                .getServer()
                .runCommandSilent(
                    '/open_gateway ' +
                    event.player.x +
                    ' ' +
                    event.player.y +
                    ' ' +
                    event.player.z +
                    ' gateways:shulker_gate_large'
                )
        }
    }

    if (
        item2 ==
        Item.of('gateways:gate_pearl','{gateway:"gateways:voidworm_gate"}')
    ) {
        event.player.tell('Must be used in mainhand')
        event.cancel()
        return
    }

    //gateways
    if (
        item == Item.of('gateways:gate_pearl','{gateway:"gateways:voidworm_gate"}')
    ) {
        if (event.player.level.dimension != 'minecraft:the_end') {
            event.player.tell(
                "The void worm can only be summoned in it's native plane of existence..."
            )
            event.cancel()
            return
        }
        let msg = Component.red(
            'You do not have the strength to summon the Void Worm...'
        )
        if (!event.player.stages.has('dragon_defeated')) {
            event.player.tell(
                'A voice laughs in the back of your mind as a familiar whisper mocks you...'
            )
            event.player.tell(msg)
            event.player.tell('Only the Dragon possesses such power.')
            event.cancel()
            return
        }
    }

    //mutandis
    let mutandisTag = Ingredient.of('#inferno:mutandis')
    if (item == 'inferno:mutandis') {
        //Manual entry for some items that don't have corresponding tags
        let mutandisItems = []
        mutandisTag.itemIds.forEach((item) => mutandisItems.push(item))

        if (event.hand.name() != 'MAIN_HAND') return

        let length = mutandisItems.length
        let randomInt = Math.floor(Math.random() * length)
        let randomItem = mutandisItems[randomInt]

        if (event.block.hasTag('inferno:mutandis')) {
            item.count--
            event.player.tell('The plant twists and mutates.')
            event.block.set(randomItem)
        }
    }

    if (event.block.id == 'immersiveengineering:arc_furnace') {
        if (
            item == 'immersiveengineering:capacitor_lv' ||
            item == 'immersiveengineering:capacitor_mv' ||
            item == 'immersiveengineering:connector_lv' ||
            item == 'immersiveengineering:connector_mv'
        ) {
            event.player.tell(
                'You will need an HV Connector or Accumulator to Power the Arc Furnace.'
            )
            event.cancel()
        }
        if (item == 'entangled:item') {
            event.player.tell('This device has too many parts to entangle.')
            event.cancel()
        }
    }

    if (
        event.block.id == 'prettypipes:pipe' ||
        event.block.id == 'ppfluids:fluid_pipe'
    ) {
        if (item == 'entangled:item') {
            event.player.tell("That doesn't seem to work.")
            event.cancel()
        }
    }

    //Crop too dark
    if (
        (
            event.block.id == 'farmersdelight:rich_soil_farmland' ||
            event.block.id == 'minecraft:farmland'
        ) &&
        event.block.getLight() < 9 &&
        (
            item.hasTag('forge:seeds') ||
            item2.hasTag('forge:seeds')
        )
    ) {
        event.player.tell("Too dark!")
    }
})

onEvent('entity.hurt',(event) => {
    let hurtEntity = event.entity


    if (hurtEntity.type == 'minecraft:ender_dragon') {
        let player = event.source.getActual()
        if (player)
            if (player.isPlayer()) {
                let lastgate = hurtEntity.persistentData.lastretaliationgate;
                let hpPercent = (hurtEntity.getHealth() / hurtEntity.getMaxHealth()) * 100;
                if (lastgate > 1 && hpPercent <= lastgate) { //dragon summons a reinforcement gate at 100%, 75%, 50% and 25% health
                    let x = Math.floor(player.x)
                    let y = Math.floor(player.y)
                    let z = Math.floor(player.z)
                    let command = 'execute in minecraft:the_end run open_gateway ' + x + ' ' + y + ' ' + z + ' gateways:dragon_retaliation'

                    player.tell('The Dragon roars in anger in response to your attack, and summons reinforcements')
                    hurtEntity.persistentData.lastretaliationgate -= 25;
                    player.getServer().runCommandSilent(command)
                }
            }
    }

    if (hurtEntity.type == 'alexsmobs:void_worm') {
        let player = event.source.getActual()
        if (player) {
            if (player.isPlayer()) {
                let randomChance = Math.floor(Math.random() * 100)
                if (
                    player.persistentData.lastretaliationgate < 1 &&
                    randomChance < 25
                ) {
                    let wormServants = [
                        ['minecraft:blaze',3],
                        ['minecraft:ghast',2],
                        ['minecraft:phantom',2],
                        ['minecraft:vex',2],
                        ['bygonenether:wex',2]
                        ['minecraft:shulker',2],
                        ['alexsmobs:guster',2],
                        ['thermal:blitz',4],
                        ['minecraft:blaze',4],
                        ['alexsmobs:warped_mosco',1],
                        ['alexsmobs:crimson_mosquito',2],
                    ]
                    let x = Math.floor(player.x)
                    let y = Math.floor(player.y)
                    let z = Math.floor(player.z)
                    let mobSelection = Math.floor(Math.random() * 8)

                    let command =
                        'execute as ' +
                        player.profile.name +
                        ' in minecraft:the_end run champions summonpos ' +
                        x +
                        ' ' +
                        y +
                        ' ' +
                        z +
                        ' ' +
                        wormServants[mobSelection][0] +
                        ' ' +
                        Math.floor(1 + Math.random() * 2)
                    player.tell(
                        'A portal opens as a possessed worm servant enters the fight...'
                    )
                    player.persistentData.lastretaliationgate = 200

                    for (let i = 0; i <= wormServants[mobSelection][1]; i++) {
                        //console.log('Running command: ' + command)
                        player.getServer().runCommandSilent(command)
                    }
                }
            }
            let cappedDamage = hurtEntity.getMaxHealth() * 0.08
            if (cappedDamage < hurtEntity.getHealth()) { //if this kill wont outright kill it, execute the following
                hurtEntity.attack(0)
                hurtEntity.setHealth(hurtEntity.getHealth() - cappedDamage)
                event.cancel()
            }

        }

    }

    if (hurtEntity) {
        if (hurtEntity.isPlayer()) {
            if (event.source.getActual()) {
                let hurtSource = event.source.getActual().toString()
                if (hurtSource.contains('Vengeance')) {
                    hurtEntity.data.ftbquests.addProgress('51171AC46282699B',1)
                }
            }
        }
    }

    const player = event.source.player
    if (player) {
        let item = player.getMainHandItem().id
        
        //if ((hurtEntity.type === 'witherstormmod:wither_storm') && item == 'avaritia:infinity_sword') {
        if ((event.entity.level.dimension == 'witherstormmod:bowels' || hurtEntity.type === 'witherstormmod:wither_storm' || hurtEntity.type === 'witherstormmod:withered_symbiont') && item == 'avaritia:infinity_sword') {
            event.cancel()
            player.tell('The power of this sword merely empowers the eldritch horror.')
            return
        }
        if ((event.entity.level.dimension == 'witherstormmod:bowels' || hurtEntity.type === 'witherstormmod:wither_storm' || hurtEntity.type === 'witherstormmod:withered_symbiont') &&
            item == 'bloodmagic:daggerofsacrifice') {
            event.cancel()
            player.tell('The Witherstorm nullifies the powers of your Sacrificial Dagger')
            return
        }

        if (event.entity.level.dimension == 'minecraft:overworld' && item == 'avaritia:infinity_sword') {
            let cappedDamage = Math.max(50, hurtEntity.getMaxHealth()*0.15)
            if (cappedDamage > hurtEntity.getHealth()) return
            hurtEntity.attack(0)
            hurtEntity.setHealth(hurtEntity.getHealth() - cappedDamage)
            event.cancel()
            
        }
    }
})



onEvent('player.logged_in',(e) => {
    e.player.persistentData.stagetimer = 0
    e.player.persistentData.hurttimer = 0
    e.player.persistentData.spawncooldown = 0
    e.player.persistentData.lastbowelportal = 0;
    e.player.persistentData.invasionQued = false;
    e.player.persistentData.rtpcooldown = 0
    if (!e.player.stages.has('fire_res')) {
        e.player.persistentData.fire_rescooldown = 0
        e.player.stages.add('fire_res')
        e.player.potionEffects.add('minecraft:fire_resistance',200,0,true,true)
    }


})

onEvent('player.tick',(e) => {
    let pData = e.player.persistentData

    pData.fire_rescooldown++
    if (pData.fire_rescooldown > 300) {
        e.player.stages.remove('fire_res')
    }

    pData.stagetimer++
    //prevents all ofthese update checks from happening too often
    if (pData.stagetimer % 80 != 0) {
        return
    }

    if (pData.rtpcooldown > 0) {
        pData.rtpcooldown -= 80
        if (pData.rtpcooldown < 0) pData.rtpcooldown = 0
    }

    if (pData.rtpcooldown > 0) {
        pData.rtpcooldown -= 80
        if (pData.rtpcooldown < 0) pData.rtpcooldown = 0
    }

    if (pData.spawncooldown > 0) {
        pData.spawncooldown -= 80
        if (pData.spawncooldown < 0) pData.spawncooldown = 0
    }

    if (pData.hurttimer > 0) {
        pData.hurttimer -= 80
        if (pData.hurttimer < 0) pData.hurttimer = 0
    }

    if (pData.lastbowelportal > 0) {
        pData.lastbowelportal -= 80
        if (pData.lastbowelportal <= 0)
            pData.lastbowelportal = 0
    }

    if (pData.lastbowelportal == 0 && e.player.level.dimension == 'witherstormmod:bowels') {
        let command = 'execute in ' + e.player.level.dimension + ' run open_gateway ' + e.player.x + ' ' + e.player.y + ' ' + e.player.z + ' ' + 'gateways:witherstorm_bowel_gate'
        e.player.server.runCommand(command)
        console.log('Spawning bowel portal with command: ' + command)
        pData.lastbowelportal = 6000;
    }


    if (
        Item.of(e.player.inventory.get(36)).hasTag('inferno:minionarmor') ||
        Item.of(e.player.inventory.get(37)).hasTag('inferno:minionarmor') ||
        Item.of(e.player.inventory.get(38)).hasTag('inferno:minionarmor') ||
        Item.of(e.player.inventory.get(39)).hasTag('inferno:minionarmor')
    ) {
        e.entity.potionEffects.add('minecraft:mining_fatigue',160,3,false,false)
        e.entity.potionEffects.add('minecraft:slowness',160,3,false,false)
        e.entity.potionEffects.add('minecraft:nausea',160,3,false,false)
    }

    pData.stagetimer = 0

    if (
        !e.player.stages.has('overworld') &&
        !e.player.stages.has('stormweathered') &&
        e.player.level.dimension == 'minecraft:overworld' &&
        e.player.stages.has('starting_items')
    ) {
        e.player.teleportTo(
            'minecraft:the_nether',
            0,
            200,
            0,
            e.player.yaw,
            e.player.pitch
        )
        e.entity.potionEffects.add('bloodmagic:soft_fall',1200,10,false,false)
        e.entity.potionEffects.add('minecraft:resistance',200,10,false,false)
        e.entity.potionEffects.add('minecraft:regeneration',200,1,false,false)
        e.player.tell('There is no escape for you....')
    }

})
onEvent('item.right_click',(event) => {
    let item = event.player.getMainHandItem()
    let item2 = event.player.getOffHandItem()

    
    if ((item1 == 'avaritia:infinity_bow' || item2 == 'avaritia:infinity_bow') && event.player.level.dimension == 'witherstormmod:bowels'){
        event.player.tell('Try as you might, You feel the command block leeching the power of the infinity bow.')
    }

    //Apotheosis Socket
    if (item2 == 'inferno:socket_sigil') {
        //Placeholder item!
        let tags = ['forge:tools','forge:swords','forge:armor']
        tags.forEach((tag) => {
            if (item.getTags().toString().contains(tag)) {
                item2.count--
                //socketscount
                let playerName = event.player.profile.name
                let random = Math.floor(Math.random() * 100)
                let randomsocket = 1
                if (random > 95) randomsocket = 4
                else if (random > 85) randomsocket = 3
                else if (random > 45) randomsocket = 2
                event.server.schedule(1,(_) => {
                    event.player
                        .getServer()
                        .runCommandSilent(
                            `execute as ${playerName} run apoth set_sockets ${randomsocket}`
                        )
                })
                return
            }
        })
    }
})

onEvent('player.inventory.changed',(event) => {
    let player = event.getEntity()
    let itemstack = event.getItem()

    //Apoth Affix quest
    if (itemstack.nbt?.affix_data != null) {
        player.data.ftbquests.addProgress('7ACB688C5DD4C8A7',1)
    }
})

onEvent("item.entity_interact",(event) => {
    let item = event.player.getMainHandItem()

    if (item === 'minecraft:debug_stick') {
        let entityName = event.target.type
        event.player.getServer().runCommandSilent(`execute as ${event.player.profile.name} run ftblibrary nbtedit entity @e[type=${entityName},limit=1]`)
    }
})

onEvent('item.pickup',(event) => {
    const { block,item,player,level,server,target,entity } = event
    //console.log(item.id)
    //console.log(player.stages)
    if (item.id == 'infernou:uni4' && !player.stages.has('overworld')) {
        player.stages.remove('easymobs')
        player.stages.remove('normalmobs')
        player.stages.remove('hardmobs')
        player.stages.remove('insanemobs')
        player.stages.add('overworld')
        player.tell(
            'You have unlocked the power to travel normally to your home world, beware what may yet follow you...'
        )
        player.tell(
            'Screams of anguish and despair echo for miles...\nIt has had many names throughout the nightmares of mankind since the dawn of time,\n you will soon know it only as your demise...'
        )
        player.data.ftbquests.addProgress('17C6262399CF5FB1',1)

    }


})