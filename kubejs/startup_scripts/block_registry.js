// priority: 100

onEvent('block.registry', (event) => {
	//Flint Block
	event
		.create('inferno:flint_block')
		.material('stone')
		.hardness(2)
		.displayName('燧石块')
		.requiresTool(false)

	//Fake Bedrock
	event
		.create('inferno:bedrock')
		.material('stone')
		.displayName('人造基岩')
		.textureAll('minecraft:block/bedrock')
		.tagBlock('minecraft:mineable/pickaxe')

	event
		.create('inferno:pseudo_command_block')
		.material('metal')
		.displayName('伪命令方块')
		.tagBlock('minecraft:mineable/pickaxe')
	    .hardness(50)
        .resistance(1200)

})
