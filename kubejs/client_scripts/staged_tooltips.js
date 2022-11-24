onEvent('item.tooltip', (event) => {
	//Game Stage tooltips
	let stageTips = (gamestage, theItem, tooltip) => {
		event.addAdvanced(theItem, (item, advanced, text) => {
			if (!Client.player.stages.has(gamestage)) {
				if (Array.isArray(tooltip)) {
					tooltip.forEach(function (line, index) {
						text.add(index + 1, Text.red(line))
					})
				} else {
					text.add(1, Text.red(tooltip))
				}
			}
		})
	}

	stageTips(
		'water_unlocked',
		['minecraft:water_bucket'],
		"Locked behind the Fisher's Hut"
	)
	stageTips('iron_unlocked', 'minecraft:iron_ingot', [
		'Locked behind Piglin trading',
		'and the Smeltery',
	])
	stageTips('bees_unlocked', 'minecraft:beehive', [
		'Locked behind the Smeltery',
		'and the Summoning Altar',
	])
	stageTips(
		'fishing_unlocked',
		['minecraft:copper_ingot', 'minecraft:redstone', 'minecraft:lapis_lazuli'],
		'Locked behind Lava fishing'
	)
	stageTips(
		'enchanting_unlocked',
		[
			'minecraft:enchanting_table',
			'apotheosis:hellshelf',
			'apotheosis:seashelf',
			'apotheosis:endshelf',
		],
		"Locked behind the Enchanter's Tower"
	)
	stageTips(
		'mechanic_unlocked',
		'create:mechanical_crafter',
		"Locked behind the Mechanist's Hut"
	)
	stageTips(
		'blacksmith_unlocked',
		'create:steam_engine',
		"Locked behind the Blacksmith's Hut"
	)
	stageTips(
		'smeltery_crafted',
		['@immersiveengineering', '@bloodmagic'],
		'Mod (mostly) locked behind the Smeltery'
	)
	stageTips(
		'mixing_cauldron_crafted',
		['@minecolonies', '@ae2'],
		'Mod (mostly) locked behind the Mixing Cauldron'
	)
	stageTips(
		'naturesaura_unlocked',
		'@naturesaura',
		'Mod (mostly) locked behind the Beehive'
	)
	stageTips(
		'dimensional_mineshaft',
		[
			'thermal:sulfur_ore',
			'thermal:nickel_ore',
			'ae2:quartz_ore',
			'ftbic:aluminum_ore',
			'ftbic:lead_ore',
			'ftbic:tin_ore',
			'ftbic:uranium_ore',
			'thermal:cinnabar_ore',
			'minecraft:diamond_ore',
		],
		'Locked behind the Dimensional Mineshaft'
	)
	stageTips('ars_unlocked', '@ars_nouveau', [
		'Mod (mostly) locked behind',
		'Blood Magic, Occultism,',
		'and Natures Aura',
	])
	stageTips('dimensional_mineshaft', '@create', [
		'Mod (mostly) locked behind the',
		'Dimensional Mineshaft',
	])
	stageTips(
		'dragon_defeated',
		[
			/ftbic:.*iridium/,
			'inferno:purifiedinfernalessence',
			'quark:dragon_scale',
		],
		['Requires killing the Ender Dragon']
	)
})
