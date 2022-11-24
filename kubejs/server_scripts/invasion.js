onEvent('player.logged_in',(e) => {
    if (!e.player.stages.has('invasiontimerstarted')) {
        e.player.stages.add('invasiontimerstarted')
        e.player.persistentData.invasiontimer = 72000
    }
})

onEvent('player.tick',(e) => {
    let pData = e.player.persistentData

    if (pData.invasiontimer > 0) pData.invasiontimer--
})

/*
 * easymobs
 * normalmobs
 * hardmobs
 * insanemobs
 *
 */

let GateDifficulties = {
    easymobs: [
        'gateways:zombie_gate',
        'gateways:easy1_gate',
        'gateways:spider_gate',
        'gateways:easy1_gate',
        'gateways:easy1_gate',
        'gateways:skeleton_gate',
    ],
    normalmobs: [
        'gateways:ghast_gate_small',
        'gateways:spider_gate_large',
        'gateways:normal1_gate',
        'gateways:normal1_gate',
        'gateways:normal1_gate'
    ],
    hardmobs: [
        'gateways:blaze_gate',
        'gateways:magma_cube_gate_large',
        'gateways:hard1_gate',
        'gateways:hard1_gate',
        'gateways:hard1_gate'
    ],
    insanemobs: [
        'gateways:infernal_legion',
        'gateways:insane1_gate',
        'gateways:insane2_gate',
    ],
}

let timer = 0 //Invasions wont even attempted until the server has been running at least 10 minutes

onEvent('level.tick',(event) => {
    timer++
    let invasionTimeout = 144000
    let debug = false

    if (timer >= 12000 && timer % 1800 == 0) {
        //Server attempts to spawn an invasion every 10 minutes but the only checks every 90 seconds
        if (debug) console.log('Invasion Timer is: ' + timer)
        let eligiblePlayers = []
        let playerList = event.server.players

        if (debug) {
            console.log('Running invasion script.')
            console.log('Scanning Player list.')
        }
        playerList.forEach((player) => {
            if (debug) console.log('Found Player: ' + player.profile.name)
            if (player && player.isPlayer()) {
                if (debug) console.log('Found player is confirmed to be a player.')
                let pData = player.persistentData
                let cooldownTimer = pData.invasiontimer

                let valid = true
                if (player.stages.has('easymobs') || player.stages.has('stormweathered')) {
                    valid = false
                    if (debug) console.log('Player is stage protected')
                }
                if (cooldownTimer > 0) {
                    valid = false
                    if (debug) {
                        console.log('Player cooldown timer is greater than 0')
                        console.log('Cooldown == ' + cooldownTimer)
                    }
                }

                if (player.level.dimension == 'bloodmagic:dungeon') {
                    if (debug) console.log('player is in a protected dimension')
                    valid = false
                }
                if (player.persistentData.invasionQued == true)
                    valid = false;

                if (valid) {
                    eligiblePlayers.push(player)
                    if (debug) console.log('player is being added to the targeting list.')
                } else {
                    if (debug) console.log('Player is not being added to targeting list ')
                }
            } else {
                if (debug)
                    console.log('Player: ' + player.profile.name + " isn't a player")
            }
        })

        if (typeof eligiblePlayers != 'undefined' && eligiblePlayers.length != 0) {
            if (debug) console.log('Selecting random Player.')
            let randomInt = Math.floor(Math.random() * eligiblePlayers.length)
            let randomPlayer = eligiblePlayers[randomInt]
            if (debug) console.log('Selecting Player at array element: ' + randomInt)
            if (randomPlayer) {
                if (debug) console.log('Random Player Found.')
                randomPlayer.tell([Text.red('The lords of inferno have taken notice of your actions. Prepare your defense. Breach is imminent!'),])

                let randomGate = ''
                if (randomPlayer.stages.has('normalmobs')) {
                    //Easy Invasion Gates
                    randomGate =
                        GateDifficulties['easymobs'][
                        Math.floor(Math.random() * (GateDifficulties['easymobs'].length - 1))
                        ]
                    invasionTimeout *= 4
                } else if (randomPlayer.stages.has('hardmobs')) {
                    //Hard Invasion Gates
                    randomGate =
                        GateDifficulties['normalmobs'][
                        Math.floor(Math.random() * (GateDifficulties['normalmobs'].length - 1))
                        ]
                    invasionTimeout *= 2
                } else if (randomPlayer.stages.has('insanemobs')) {
                    //Difficult Invasion Gates
                    randomGate =
                        GateDifficulties['hardmobs'][
                        Math.floor(Math.random() * (GateDifficulties['hardmobs'].length - 1))
                        ]
                } else {
                    //No Mercy
                    randomGate =
                        GateDifficulties['insanemobs'][
                        Math.floor(Math.random() * (GateDifficulties['insanemobs'].length - 1))
                        ]
                    invasionTimeout /= 2
                }
                if (debug)
                    console.log(
                        randomPlayer + ' chosen as Invasion Target, queing invasion'
                    )

                randomPlayer.persistentData.invasionQued = true;
                event.server.scheduleInTicks(600,(_) => {
                    let command = 'execute in ' + randomPlayer.level.dimension + ' run open_gateway ' + randomPlayer.x + ' ' + randomPlayer.y + ' ' + randomPlayer.z + ' ' + randomGate
                    if (randomPlayer) {
                        //make sure they didnt try to logout to avoid it
                        randomPlayer.server.runCommandSilent(command)
                        //only set the invasion lockout if they actually get invaded
                        randomPlayer.persistentData.invasiontimer = invasionTimeout
                        randomPlayer.persistentData.invasionQued = false;
                    }
                })
            } else {
                if (debug)
                    console.log(
                        'No valid random player could be selected as an invasion target.'
                    )
            }
        } else {
            if (debug)
                console.log(
                    'There are currently no eligible Players online for an invasion.'
                )
        }
    }
})
