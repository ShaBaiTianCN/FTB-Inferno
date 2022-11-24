// priority: 1000

onEvent('server.load',(e) => {
    e.server.runCommandSilent('/run setworldspawn 0 128 0')
    console.log('Set worldspawn to nether center')
})

function doSpawn(ctx) {
    const player = ctx.source.getPlayerOrException().asKJS()

    if (player.persistentData.hurttimer > 20) {
        player.tell(
            'You must recover from combat before you can use this command. [' +
            player.persistentData.hurttimer / 20 +
            '] seconds remain.'
        )
        return 1
    }
    if (player.persistentData.spawncooldown > 20) {
        player.tell(
            'Spawn command is on cooldown. [' +
            player.persistentData.spawncooldown / 20 +
            '] seconds remain.'
        )
        return 1
    }
    player.persistentData.spawncooldown = 6000
    player.teleportTo('minecraft:the_nether',0,350,0,player.yaw,player.pitch)
    player
        .getServer()
        .runCommandSilent(
            '/tellraw ' +
            player.getName().getString() +
            ' {"text":"Teleporting to world center in the nether...","color":"light_purple"}'
        )
    player.potionEffects.add('minecraft:slow_falling',1000,10,false,false)
    player.potionEffects.add('minecraft:resistance',1000,10,false,false)
    player.potionEffects.add('minecraft:regeneration',1000,1,false,false)
    return 1
}

function doRTP(ctx) {
    const player = ctx.source.getPlayerOrException().asKJS()

    if (player.persistentData.hurttimer > 20) {
        player.tell(
            'You must recover from combat before you can use this command. [' +
            player.persistentData.hurttimer / 20 +
            '] seconds remain.'
        )
        return 1
    }
    if (player.persistentData.rtpcooldown > 20) {
        player.tell(
            'RTP command is on cooldown. [' +
            player.persistentData.rtpcooldown / 20 +
            '] seconds remain.'
        )
        return 1
    }
    player.persistentData.rtpcooldown = 36000
    var x = Math.round(player.x)
    var z = Math.round(player.z)

    var xRandom = Math.round(Math.random() * (10000 - 300) + 300)
    var zRandom = Math.round(Math.random() * (10000 - 300) + 300)
    var newX = Math.random() < 0.5 ? x - xRandom : x + xRandom
    var newZ = Math.random() < 0.5 ? z - zRandom : z + zRandom
    player
        .getServer()
        .runCommandSilent(
            '/tellraw ' +
            player.getName().getString() +
            ' {"text":"Teleporting somewhere random...","color":"light_purple"}'
        )
    player.potionEffects.add('minecraft:slow_falling',1000,10,false,false)
    player.potionEffects.add('minecraft:resistance',1000,10,false,false)
    player.potionEffects.add('minecraft:regeneration',1000,1,false,false)
    player.setPosition(newX,300,newZ)
    return 1
}

onEvent('command.registry',(event) => {
    const { commands: Commands,arguments: Arguments } = event
    event.register(Commands.literal('spawninferno').executes(doSpawn))
})

onEvent('command.registry',(event) => {
    const { commands: Commands,arguments: Arguments } = event
    event.register(Commands.literal('rtpinferno').executes(doRTP))
})
