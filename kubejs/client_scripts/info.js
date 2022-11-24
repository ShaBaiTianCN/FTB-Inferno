onEvent('jei.information', (info) => {
	info.add('minecraft:fern', ['Obtain by Bonemealing Podzol'])
	info.add('ars_nouveau:starbuncle_shards',['Obtained by giving a wild starbuncle a gold nugget.', 'Wild starbuncles can be summoned with the Altar of Birthing.'])
	info.add('avaritia:neutron_collector', [
		'Do NOT attempt to time in a bottle...',
	])
	info.add('minecraft:seagrass', [
		'Bonemealing a block underwater will spawn seagrass.',
		'Try bonemealing the rocks below the water in your fishering hut.',
	])
	info.add('ae2:certus_crystal_seed', [
		'Dropping this seed in a pool of blood (Biomes o Plenty) will rapidly grow it to its fully crystalized form',
	])
	info.add('ae2:fluix_crystal_seed', [
		'Dropping this seed in a pool of blood (Biomes o Plenty) will rapidly grow it to its fully crystalized form',
	])
	info.add(
		['ae2:certus_quartz_crystal', 'ae2:fluix_crystal'],
		["Grows much faster in Blood from Biomes o' Plenty"]
	)
	info.add(
		['immersiveengineering:generator'],
		['Must be looted from End City before the recipe unlocks']
	)
	info.add(
		['ftbic:antimatter'],
		[
			'Created in the Antimatter constructor by giving it power and optionally scrap.',
		]
	)
	info.add(
		[
			'immersiveengineering:toolupgrade_shield_flash',
			'immersiveengineering:toolupgrade_shield_magnet',
			'immersiveengineering:toolupgrade_shield_shock',
		],
		[
			"Use an Engineer's Workbench to apply these upgrades to the Heavy Plated Shield.",
		]
	)
	info.add(
		[
			'canes_wonderful_spiders:jumping_boots_boots',
			'thermal:diving_boots',
			'thermal:diving_helmet',
			'thermal:diving_leggings',
			'minecraft:amethyst_shard',
			'grapplemod:launcheritem',
			'thermal:diving_chestplate',
			'alexsmobs:flying_fish_boots',
			'alexsmobs:roadrunner_boots',
			'alexsmobs:moose_headgear',
			'alexsmobs:fedora',
			'alexsmobs:froststalker_helmet',
			'alexsmobs:frontier_cap',
			'alexsmobs:centipede_leggings',
			'alexsmobs:emu_leggings',
			'minecraft:golden_pickaxe',
		],
		['Loot Only.']
	)

	info.add(
		[
			'minecraft:gold_ingot',
			'minecraft:golden_carrot',
			'travellersboots:travellersbootmki',
			'minecraft:leather',
			Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
			'minecraft:experience_bottle',
			'tconstruct:pig_iron_ingot',
			'minecraft:hoglin_spawn_egg'
		],
		['Piglin Trading.']
	)

	info.add(
		[
			'ftbic:wind_mill',
			'ftbic:geothermal_generator',
			'ftbic:basic_generator',
			'ftbic:lv_solar_panel',
			'ftbic:hv_solar_panel',
			'ftbic:ev_solar_panel',
			'ftbic:mv_solar_panel',
			'ftbic:nuclear_reactor',
		],
		['Zaps only generated in the Nuclear Reactor, or using the FE Transformer']
	)
	info.add('minecraft:bell', ['Dropped as loot from the Bellringer boss.'])
	info.add('meetyourfight:phantoplasm', [
		'Craft a Bellringer Gateway Pearl and summon the Bellringer to fight for this drop.',
	])
	info.add('meetyourfight:fortunes_favor', [
		'Craft a Fortuna Gateway Pearl and summon Dame Fortuna to fight for this drop.',
	])
	info.add('meetyourfight:mossy_tooth', [
		'Craft a Swampjaw Gateway Pearl and summon Swampjaw to fight for this drop.',
	])
	info.add(
		'minecraft:obsidian',
		'Can be alloyed in a smeltery with lava and water.'
	)
	info.add(
		['minecraft:flowering_azalea', 'minecraft:azalea'],
		'Bonemeal a Moss Block, and each block in a 3x3 to 7x7 area has a 15% chance of growing an Azalea and a 5% chance of growing a Flowering Azalea'
	)
	info.add(
		['minecraft:oak_leaves', 'minecraft:oak_sapling'],
		['Can be found growing on Brambles in the Undergrowth biome.']
	)
	info.add(
		['minecraft:snowball', 'minecraft:snow_block', 'minecraft:snow'],
		['You can summon a Snow Golem with the Summoning Altar']
	)
	info.add('minecraft:ender_pearl', [
		'Dropped by Warpbeetles, which spawn in Warped Forests',
	])
	info.add(
		['nethersdelight:propelplant_stem', 'nethersdelight:propelplant_cane'],
		['Most commonly found in Crimson Forests']
	)
	info.add('nethersdelight:propelpearl', [
		'Requires harvesting from Propelplants using Shears',
		'Most commonly found in Crimson Forests',
	])

	info.add('biomesoplenty:rose_quartz_shard', [
		'Can be found in the Crystalline Chasm biome',
	])
	info.add('minecolonies:supplycampdeployer', [
		'Given as a reward for the Build Tool quest',
		' ',
		'Use it before you lose it',
	])
	info.add('hexerei:animal_fat', ['Drops from farm animals'])
	info.add('naturesaura:gold_leaf', [
		'Drops from Leaves imbued with Golden Thread',
		' ',
		'It takes a while for the Thread to work before the Leaves can be harvested',
	])
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
		'Use a Bottle and Cork in the Nether'
	)
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
		'Use a Bottle and Cork in the Overworld (or craft otherwise)'
	)
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
		'Use a Bottle and Cork in the End'
	)

	//fishing
	info.add(
		[
			'minecraft:coal',
			'minecraft:redstone',
			'reliquary:molten_core',
			'minecraft:fire_coral_fan',
			'nethersdelight:propelpearl',
			'minecraft:copper_ingot',
			'minecraft:blaze_powder',
			'minecraft:blaze_rod',
			'ftbic:copper_nugget',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing anywhere',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:warped_fungus',
			'minecraft:string',
			'minecraft:ender_pearl',
			'minecraft:copper_ingot',
			'minecraft:copper_nugget',
			'minecraft:redstone',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing in Warped Forests',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:leather',
			'minecraft:crimson_fungus',
			'minecraft:nether_wart',
			'minecraft:string',
			'minecraft:cooked_porkchop',
			'minecraft:gold_nugget',
			'minecraft:copper_ingot',
			'ftbic:copper_nugget',
			'minecraft:redstone',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing in Crimson Forests',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:soul_sand',
			'minecraft:soul_soil',
			'minecraft:basalt',
			'minecraft:flint',
			'minecraft:bone_meal',
			'minecraft:gunpowder',
			'minecraft:bone',
			'minecraft:ghast_tear',
			'minecraft:bone_block',
			'minecraft:copper_ingot',
			'ftbic:copper_nugget',
			'minecraft:redstone',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing in Soul Sand Valleys',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:blackstone',
			'minecraft:magma_cream',
			'minecraft:copper_ingot',
			'ftbic:copper_nugget',
			'minecraft:redstone',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing in Basalt Deltas',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:glowstone_dust',
			'minecraft:brown_mushroom',
			'minecraft:red_mushroom',
			'minecraft:quartz',
			'ftbic:copper_nugget',
			'minecraft:redstone',
			'minecraft:lapis_lazuli',
		],
		[
			'Can result from lava fishing in Nether Wastes',
			'See "Azriel\'s Acquisitions" quest chapter',
		]
	)
	info.add(
		[
			'minecraft:water_bucket',
			Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),
			Fluid.of('minecraft:water'),
		],
		[
			'The Fisher Hut from Minecolonies generates with a pool of water',
			' ',
			'Water does not regenerate, but you can safely collect it with Glass Bottles',
		]
	)

	info.add(
		[
			'minecraft:wheat_seeds',
			'hexerei:sage_seed',
			'occultism:datura_seeds',
			'immersiveengineering:seed',
		],
		'Drops from Grass'
	)
	info.add('hexerei:sage', 'Grows from Sage Seeds')
	info.add('hexerei:mahogany_sapling', [
		'Given as a quest reward',
		' ',
		'Can also be found as loot in chests (in dungeons and fortresses, etc)',
	])

	info.add(
		[Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}')],
		'Can be bought from the Toolsmith villager'
	)

	info.add(
		'nethersdelight:hoglin_hide',
		'Obtained by killing a hoglin with a knife'
	)
	info.add('quark:dragon_scale', [
		'Found in End City chests',
		' ',
		'Also drops from the Ender Dragon',
	])

	let luckyOres = [
		//[ore, weight],
		['minecraft:coal_ore', 16],
		['minecraft:copper_ore', 32],
		['minecraft:iron_ore', 32],
		['minecraft:gold_ore', 16],
		['minecraft:redstone_ore', 8],
		['minecraft:lapis_ore', 4],
		['minecraft:ancient_debris', 1],
		['evilcraft:dark_ore', 4],
		['thermal:silver_ore', 6],
		['occultism:iesnium_ore', 6],
	]
	let luckyOresTotalWeight = 0
	luckyOres.forEach((o) => {
		luckyOresTotalWeight += o[1]
	})

	luckyOres.forEach((o) => {
		let ore = o[0]
		let weight = o[1]
		info.add(ore, [
			'Sometimes generated by the Minecolonies Miner',
			' ',
			'Has a weight of ' + weight + '/' + luckyOresTotalWeight,
		])
	})

	info.add('naturesaura:end_flower', 'Grows when the Ender Dragon is killed')
	info.add('ae2:singularity', 'Created in the Matter Condenser')
	info.add('bloodmagic:weak_tau', [
		'Found in Simple Dungeons (see "The Antechamber" in the Sanguine Scientem)',
		' ',
		'Can be farmed on Farmland',
	])
	info.add('bloodmagic:strong_tau', [
		'Can be rarely found in Simple Dungeons (see "The Antechamber" in the Sanguine Scientem)',
		' ',
		'If normal Tau Fruit grows while an animal is standing on top, it grows into Saturated Tau instead',
	])
	info.add('productivebees:gene_bottle', [
		'Place a Bottler, and insert Bottles',
		' ',
		'Place a downwards-facing Piston 2 blocks above',
		' ',
		'With a Bee between, power the Piston',
	])
	info.add('productivebees:gene', [
		'Place Squashed Bee Material in the Centrifuge',
	])
	info.add('evilcraft:origins_of_darkness', [
		'Obtain by feeding a Darkened Apple to a mob, and throwing a Book at the resulting anomaly',
	])
	info.add('evilcraft:vengeance_essence', [
		'Drops from killing Vengeance Spirits',
	])
	info.add('evilcraft:hardened_blood', ['Coagulates from poured Blood'])
	info.add('evilcraft:hardened_blood_shard', ['Drops from Hardened Blood'])
	info.add(
		Item.of(
			'evilcraft:broom',
			'{Fluid:{Amount:10000,FluidName:"evilcraft:blood"}}'
		),
		['Craft a Bare Brush, Bare Cap, and Bare Rod together']
	)

	info.add(
		[
			'minecraft:oak_sapling',
			'hexerei:sage_crop',
			'hexerei:belladonna_flower',
			'hexerei:mugwort_bush',
			'hexerei:yellow_dock_bush',
			'hexerei:mandrake_flower',
			'myrtrees:rubberwood_sapling',
		],
		['Has a chance of mutating from Mutandis']
	)
	info.add('inferno:mutandis', [
		'Used to transmute certain crops to certain other crops.',
		' ',
		'Can transmute between these blocks, chosen at random:',
		'• Oak Sapling',
		'• Sage',
		'• Belladonna',
		'• Mugwort',
		'• Yellow Dock',
		'• Mandrake',
		'• Rubberwood',
	])
	info.add(
		[
			'farmersdelight:brown_mushroom_colony',
			'farmersdelight:red_mushroom_colony',
			'nethersdelight:crimson_fungus_colony',
			'nethersdelight:warped_fungus_colony',
		],
		[
			'Grows from the appropriate Mushroom when it is planted on Rich Soil',
			' ',
			'Requires darkness and time',
			' ',
			'Left-click Shears to harvest whole, right-click Shears to harvest parts',
		]
	)

	info.add('apotheosis:gem_dust', ['Drop an Anvil on an Apotheosis Gem'])
	info.add('avaritia:neutron_pile', [
		'Generated by the Neutron Collector',
		' ',
		'Each Collector generates one Pile per 3 minutes',
	])

	info.add('witherstormmod:command_block_book', [
		'Dropped by the Withered Symbiont',
		' ',
		"Symbionts spawn at the end the Wither Storm's fifth stage, which can only be damaged with hits to its back",
	])
	info.add('witherstormmod:withered_nether_star', [
		'Dropped from the fully-evolved Wither Storm',
	])
	info.add('witherstormmod:withered_bone', [
		'Dropped by Wither-Sickened Skeletons',
	])
	info.add('witherstormmod:withered_flesh', [
		'Dropped by Wither-Sickened Zombies',
	])

	console.info('Added jei pages')
})
