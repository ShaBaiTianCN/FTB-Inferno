// priority: 100
onEvent('item.registry.armor_tiers', (event) => {
	event.add('warped', (tier) => {
		tier.durabilityMultiplier = 40
		tier.slotProtections = [1, 3, 2, 1] // Leather Protection
		tier.enchantmentValue = 15
		tier.equipSound = 'minecraft:item.armor.equip_leather'
		tier.repairIngredient = 'minecraft:warped_log'
		tier.toughness = 2.0
		tier.knockbackResistance = 0.0
	})

	event.add('crimson', (tier) => {
		tier.durabilityMultiplier = 40
		tier.slotProtections = [2, 5, 3, 1] // Chainmail Protection
		tier.enchantmentValue = 12
		tier.equipSound = 'minecraft:item.armor.equip_chainmail'
		tier.repairIngredient = 'minecraft:crimson_log'
		tier.toughness = 3.0
		tier.knockbackResistance = 0.0
	})

	event.add('corrupted', (tier) => {
		tier.durabilityMultiplier = 40
		tier.slotProtections = [3, 8, 6, 3] // Diamond Protection
		tier.enchantmentValue = 10
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = 'soul_shards:corrupted_ingot'
		tier.toughness = 4.0
		tier.knockbackResistance = 5.0
	})

	event.add('manyullyn', (tier) => {
		tier.durabilityMultiplier = 40
		tier.slotProtections = [3, 8, 6, 3] // Netherite Protection
		tier.enchantmentValue = 15
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
		tier.repairIngredient = 'tconstruct:manyullyn_ingot'
		tier.toughness = 5.0
		tier.knockbackResistance = 10.0
	})
})

onEvent('item.registry', (event) => {
	event
		.create('inferno:smoked_shroom')
		.displayName('Smoked Mushrooms')
		.food((food) => {
			food.hunger(4)
			food.saturation(1.3)
		})


	event.create('inferno:lifeessence_comb').displayName('Life Essence Comb')

	//custom colonist armors
	//Warped Armor
	event.create('inferno:warped_helmet', 'helmet').tier('warped')
	event.create('inferno:warped_chestplate', 'chestplate').tier('warped')
	event.create('inferno:warped_leggings', 'leggings').tier('warped')
	event.create('inferno:warped_boots', 'boots').tier('warped')

	//Crimson Armor
	event.create('inferno:crimson_helmet', 'helmet').tier('crimson')
	event.create('inferno:crimson_chestplate', 'chestplate').tier('crimson')
	event.create('inferno:crimson_leggings', 'leggings').tier('crimson')
	event.create('inferno:crimson_boots', 'boots').tier('crimson')

	//Corrupted Armor
	event.create('inferno:corrupted_helmet', 'helmet').tier('corrupted')
	event.create('inferno:corrupted_chestplate', 'chestplate').tier('corrupted')
	event.create('inferno:corrupted_leggings', 'leggings').tier('corrupted')
	event.create('inferno:corrupted_boots', 'boots').tier('corrupted')

	//Manyullyn Armor
	event.create('inferno:manyullyn_helmet', 'helmet').tier('manyullyn')
	event.create('inferno:manyullyn_chestplate', 'chestplate').tier('manyullyn')
	event.create('inferno:manyullyn_leggings', 'leggings').tier('manyullyn')
	event.create('inferno:manyullyn_boots', 'boots').tier('manyullyn')

	//crude enderium
	event.create('inferno:crude_enderium_dust').displayName('Crude Enderium Dust')

	//steelupgrade
	event.create('inferno:steel_armor_upgrade').displayName('Steel Armor Upgrade')

	//cobalt upgrade
	event
		.create('inferno:cobalt_armor_upgrade')
		.displayName('Cobalt Armor Upgrade')

	//netherite
	event
		.create('inferno:gilded_armor_upgrade')
		.displayName('Gilded Netherite Upgrade')

	const singularities = [
		'iron',
		'gold',
		'lapis',
		'redstone',
		'quartz',
		'copper',
		'tin',
		'emerald',
		'nickel',
		'silver',
		'lead',
		'diamond',
	]
	const singularities2 = [
		['iron', 0xAAAAAA],
		['gold', 0xfdf55f],
		['lapis', 0x26619c],
		['redstone', 0xFF0000],
		['quartz', 0xFFFFFF],
		['copper', 0xf5af8b	],
		['tin', 0xd3d4d5],
		['emerald', 0x40f082],
		['nickel', 0xafb7a5],
		['silver', 0xC0C0C0],
		['lead', 0x667091],
		['diamond', 0xb9f2ff]
	]

	singularities2.forEach((material) => {
		let mat = material[0]
		let color = material[1]
		event.create(`inferno:${mat}_dense_plate`).rarity('rare').displayName(mat.charAt(0).toUpperCase() + mat.slice(1) + ' Dense Plate').texture('inferno:item/dense_plate').color(0, color)
		event.create(`inferno:${mat}_super_dense_plate`).rarity('rare').displayName(mat.charAt(0).toUpperCase() + mat.slice(1) + ' Super Dense Plate').texture('inferno:item/super_dense_plate').color(0, color)
	})

	singularities.forEach((material) => {
		event
			.create('inferno:' + material + '_singularity')
			.rarity('rare')
			.displayName(
				material.charAt(0).toUpperCase() + material.slice(1) + ' Singularity'
			)
	})

	//netherite mesh
	event.create('inferno:netherite_mesh').displayName('Netherite Mesh')

	//singularity star
	event.create('inferno:singularity_star').glow(true).displayName('Singularity Star')

	//Antimatter star
	event
		.create('inferno:antimatter_star')
		.glow(true)
		.displayName('Antimatter Star')

	//Incomplete Antimatter star
	event
		.create('inferno:incomplete_antimatter_star')
		.unstackable()
		.displayName('Incomplete Antimatter Star')

	//infernaldust
	event.create('inferno:infernalessence').displayName('Infernal Essence')
	event
		.create('inferno:refinedinfernalessence')
		.displayName('Refined Infernal Essence')
	event
		.create('inferno:purifiedinfernalessence')
		.displayName('Purified Infernal Essence')

	//mutandis
	event.create('inferno:mutandis').displayName('Mutandis')

	
	//blank upgrade
	event.create('inferno:blank_upgrade').displayName('Blank Upgrade')


	//source fabric
	event.create('inferno:source_fabric').displayName('Source Fabric')

	//blaze fabric
	event.create('inferno:blaze_fabric').displayName('Blaze Fabric')

	//end fabric
	event.create('inferno:end_fabric').displayName('End Fabric')

	//hoglin hide
	event.create('inferno:bound_hoglin_hide').displayName('Bound Hoglin Hide')

	//hoglin hide
	event
		.create('inferno:incomplete_infinity_catalyst')
		.displayName('Incomplete Infinity Catalyst')

	//demon will infused source gems
	event
		.create('inferno:willinfusedsource')
		.displayName('Will Infused Source Gem')

	//doping agent
	event.create('inferno:steeldopingagent').displayName('Steel Doping Agent')

	//life infused ingot
	event.create('inferno:life_infused_iron').displayName('Life Infused Iron')

	//Miner's Delight Pickaxe
	event
		.create('miners_delight', 'pickaxe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("Miner's Delight")
	event
		.create('foresters_delight', 'axe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("Forester's Delight")
	event
		.create('diggers_delight', 'shovel')
		.tier('wood')
		.maxDamage(64000)
		.displayName("Digger's Delight")
	event
		.create('farmers_delight', 'hoe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("Farmer's Delight")

	//inactive slate
	event
		.create('inferno:inactivesigil')
		.maxStackSize(1)
		.displayName('Inactive Sigil')

	//unprocessed steel plate
	event
		.create('inferno:unprocessed_steelsheet')
		.maxStackSize(1)
		.displayName('Unprocessed Steel Sheet')

	//tiny(char)coal
	event.create('tiny_coal').burnTime(200).maxStackSize(64)
	event.create('tiny_charcoal').burnTime(200).maxStackSize(64)

	//Fake Quark Ladders
	let ladderMaterials = [
		'acacia',
		'spruce',
		'birch',
		'jungle',
		'crimson',
		'warped',
	]
	ladderMaterials.forEach((material) => {
		event
			.create(material + '_ladder')
			.displayName(
				material.charAt(0).toUpperCase() + material.slice(1) + ' Ladder'
			)
			.texture('quark:block/' + material + '_ladder')
	})

	//Dark Oak Ladder
	event
		.create('dark_oak_ladder')
		.displayName('Dark Oak Ladder')
		.texture('quark:block/dark_oak_ladder')

	//Socket Sigil
	event.create('inferno:socket_sigil').unstackable().displayName('Socket Sigil')

	//Living Metal Geode
	event.create('inferno:living_metal_geode').displayName('Living Metal Geode')

	//Apple of Eden
	event
		.create('inferno:eden_apple')
		.unstackable()
		.glow(true)
		.displayName('Apple of Eden')
})
