// priority: 100

onEvent('fluid.registry', (event) => {
	// Basic "thick" (looks like lava) fluid with red tint
	event
		.create('liquid_mud')
		.thickTexture(0x241c1d)
		.bucketColor(0x241c1d)
		.displayName('液态泥巴')
})

onEvent('fluid.registry', (event) => {
	// Basic "thick" (looks like lava) fluid with red tint
	event
		.create('molten_andesite')
		.thickTexture(0xa6a6a6)
		.bucketColor(0xa6a6a6)
		.displayName('熔融安山岩')
})

onEvent('fluid.registry', (event) => {
	// Basic "thick" (looks like lava) fluid with red tint
	event
		.create('molten_andesite_alloy')
		.thickTexture(0x828282)
		.bucketColor(0x828282)
		.displayName('熔融安山合金')
})
