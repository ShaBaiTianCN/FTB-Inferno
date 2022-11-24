// priority: 100

onEvent('block.registry', (event) => {
	//Flint Block
	event
		.create('inferno:flint_block')
		.material('stone')
		.hardness(2)
		.displayName('Block of Flint')
		.requiresTool(false)

	//Fake Bedrock
	event
		.create('inferno:bedrock')
		.material('stone')
		.displayName('Faux Bedrock')
		.textureAll('minecraft:block/bedrock')
		.tagBlock('minecraft:mineable/pickaxe')

	event
		.create('inferno:pseudo_command_block')
		.material('metal')
		.displayName('Psuedo Command Block')
		.tagBlock('minecraft:mineable/pickaxe')
	    .hardness(50)
        .resistance(1200)

})
