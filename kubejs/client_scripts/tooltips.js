// priority: 99

console.info('Loaded Client Scripts')

onEvent('item.tooltip', (event) => {
	let tooltip = (items, text) => {
		if (Array.isArray(text)) {
			text.forEach(function (line, index) {
				text.splice(index, 1, Text.gray(line))
			})
			event.add(items, text)
		} else {
			event.add(items, Text.gray(text))
		}
	}

	let tooltipNBT = (itemNoNBT, itemWithNBT, theText) => {
		event.addAdvanced(itemNoNBT, (item, advanced, text) => {
			if (item.test(itemWithNBT)) {
				if (Array.isArray(theText)) {
					theText.forEach(function (line, index) {
						text.add(index + 1, line)
					})
				} else {
					text.add(1, theText)
				}
			}
		})
	}
	tooltip(
		'ars_nouveau:starbuncle_shards',
		'Wild starbuncles can be summoned with the Altar of Birthing'
	)
	tooltip('minecraft:amethyst_shard', 'Found in the Hidden Realm')
	tooltip(
		['minecraft:soul_campfire', 'minecraft:campfire'],
		'Sets spawnpoint and heals you.'
	)
	tooltip('nethersdelight:stuffed_hoglin', 'Grants +2 Looting for 2 minutes.')
	tooltip('avaritia:neutron_collector', 'Do *NOT* Attempt to time in a bottle.')
	tooltip('minecraft:golden_carrot', 'Grants 5 Minutes of Night Vision.')
	tooltip('structurize:sceptergold', [
		'This tool is capable of mining',
		'Bedrock and End Portal Frames',
	])
	tooltip('nomoretorchspam:glow_crystal', [
		'Stacks up to 4x for 50 light radius.',
		'Creates invisible light sources with',
		'two blocks between',
	])
	tooltip(
		'hexerei:blood_sigil',
		'Disabled. Use life essence for recipes instead.'
	)
	tooltip(
		'evilcraft:spiked_plate',
		'Disabled, use life essence or other means of killing.'
	)
	tooltip('occultism:datura', [
		'Grown from demon seeds,',
		'or transmuted from golden apples',
	])
	tooltip('biomesoplenty:hellbark_sapling', 'Found in the undergarden biome.')
	tooltip(/kubejs.*ladder/, [
		"Due to a bug, Quark's",
		'Ladders do not show in JEI',
		' ',
		'This item can crafted into',
		'the real ladder',
	])
	tooltip('inferno:bedrock', 'Aesthetics only!')
	tooltip('prettypipes:item_terminal', 'Disabled, use the crafting terminal')
	tooltip('@itemfilters', 'For pack dev only')
	tooltip('ae2:certus_crystal_seed', 'Grows faster in BOP Blood')
	tooltip('ae2:fluix_crystal_seed', 'Grows faster in BOP Blood')
	event.add(
		[
			'minecolonies:blockhutbarrackstower',
			'minecolonies:blockhutbeekeeper',
			'minecolonies:blockhutbarracks',
			'minecolonies:simplequarry',
			'minecolonies:mediumquarry',
			'minecolonies:supplychestdeployer',
			'minecolonies:blockhutbaker',
			'grapplemod:rocketupgradeitem',
			'create:windmill_bearing',
			'create:water_wheel',
			/ae2:portable/,
		],
		Text.red('Disabled')
	)
	event.add(
		[
			'ftbic:wind_mill',
			'ftbic:geothermal_generator',
			'ftbic:basic_generator',
			'ftbic:lv_solar_panel',
			'ftbic:hv_solar_panel',
			'ftbic:ev_solar_panel',
			'ftbic:mv_solar_panel',
		],
		[
			Text.red('Disabled'),
			Text.red('Use the FE Transformer or'),
			Text.red('the Nuclear Reactor instead'),
		]
	)

	event.add(
		['evilcraft:blood_extractor'],
		Text.red('Disabled, use Condensed Blood')
	)

	//Grapple Hook upgrades
	tooltip('grapplemod:baseupgradeitem', 'Recipe ingredient')
	tooltip('grapplemod:doubleupgradeitem', [
		'Grapple Hook has two hooks',
		'à la 3D Maneuver Gear',
	])
	tooltip('grapplemod:forcefieldupgradeitem', [
		'User is repelled from nearby',
		'blocks when swinging',
	])
	tooltip('grapplemod:magnetupgradeitem', [
		'Hook is attracted to nearby',
		'blocks when thrown',
	])
	tooltip('grapplemod:motorupgradeitem', 'Pulls player towards Hook')
	tooltip('grapplemod:ropeupgradeitem', [
		'Adds options:',
		'• Rope Length',
		'• Rope phases through blocks',
		'• Rope attaches at bend points',
	])
	tooltip('grapplemod:staffupgradeitem', 'Left click launches player forward')
	tooltip('grapplemod:swingupgradeitem', [
		'Allows user to configure',
		'swing speed',
	])
	tooltip('grapplemod:throwupgradeitem', [
		'Allows user to configure options',
		'related to throwing the hook',
	])
	tooltip('grapplemod:limitsupgradeitem', [
		'Increases upper limits of',
		'other upgrade options',
	])
	tooltip(
		'grapplemod:rocketupgradeitem',
		'Propels player forward with left-click'
	)
	tooltip('evilcraft:origins_of_darkness', 'Some information inaccurate')

	event.add(
		[
			'ae2:item_storage_cell_1k',
			'ae2:item_storage_cell_4k',
			'ae2:item_storage_cell_16k',
			'ae2:item_storage_cell_64k',
			'ae2:item_storage_cell_256k',
			'ae2:fluid_storage_cell_256k',
			'ae2:fluid_storage_cell_64k',
			'ae2:fluid_storage_cell_16k',
			'ae2:fluid_storage_cell_4k',
			'ae2:fluid_storage_cell_1k',
		],
		[Text.red('Disabled'), Text.red('Use the Storage Bus')]
	)

	let vanillaArmorMats = [
		'leather',
		'chainmail',
		'iron',
		'diamond',
		'golden',
		'netherite',
	]
	let vanillaArmors = ['helmet', 'chestplate', 'leggings', 'boots']
	vanillaArmorMats.forEach((material) => {
		vanillaArmors.forEach((armor) => {
			let theItem = 'minecraft:' + material + '_' + armor
			event.addAdvanced(theItem, (item, advanced, text) => {
				//Moving enchantments
				if (item.nbt.Enchantments != null) {
					text.add(1, Text.yellow('Enchants can be moved to other items'))
					text.add(2, Text.yellow('using the Tome of Scrapping'))
				}

				//Moving affixes
				if (item.nbt.affix_data != null) {
					text.add(1, Text.red('Vanilla armor with Affixes are').bold(true))
					text.add(
						2,
						Text.red('best put through the Salvaging Table').bold(true)
					)
				}
				text.add(1, Text.red('Very low durability'))
			})
		})
	})

	event.add(
		[
			'naturesaura:fortress_finder',
			'naturesaura:end_city_finder',
			'naturesaura:outpost_finder',
		],
		[Text.red("Doesn't work in"), Text.red('current mod version')]
	)

	console.info('Added initial tooltips')

	//witherwarning
	tooltip(
		['minecraft:wither_skeleton_skull', 'bygonenether:soul_stone'],
		'Wither is summoned with Soul Stone',
		'not Soul Sand'
	)
	console.info('Added wither tooltips')

	let noWorkInNether = [
		'naturesaura:ancient_sapling',
		'naturesaura:canopy_diminisher',
		'naturesaura:flower_generator',
		'bloodmagic:watersigil',
		'ars_nouveau:glyph_conjure_water',
	]
	noWorkInNether.forEach((theItem) => {
		event.addAdvanced(theItem, (item, advanced, text) => {
			if (Client.player.level.dimension == 'minecraft:the_nether') {
				text.add(1, Text.red('Nonfunctional in Nether'))
			}
		})
	})

	let beesCustomRecipes = [
		'productivebees:spawn_egg_rancher_bee',
		'productivebees:spawn_egg_reed_bee',
	]
	beesCustomRecipes.forEach((item) => {
		tooltip(item, 'Has crafting recipe')
	})

	let beeTooltip = (species, tooltip) => {
		let theItem = Item.of(
			'productivebees:spawn_egg_configurable_bee',
			'{EntityTag:{type:"productivebees:' + species + '"}}'
		)
		tooltipNBT('productivebees:spawn_egg_configurable_bee', theItem, tooltip)
	}

	let beesCustomRecipesNBT = [
		'blitz',
		'ichor_slimy',
		'queens_slime',
		'cobalt',
		'hematophagous',
		'regenerative',
		'hepatizon',
		'rose_gold',
		'energized_glowstone',
		'resonant_ender',
		'basalz',
		'sky_slimy',
		'manyullyn',
		'knightslime',
		'slimesteel',
		'soulsteel',
		'slimy',
		'ender_slimy',
		'blizz',
		'destabilized_redstone',
		'pig_iron',
		'bloody',
	]
	beesCustomRecipesNBT.forEach((species) => {
		beeTooltip(species, Text.gray('Has crafting recipe'))
	})
	beeTooltip('arcane', [Text.gray('Only obtainable in loot chests in the End')])

	console.info('staging tooltips')
})
