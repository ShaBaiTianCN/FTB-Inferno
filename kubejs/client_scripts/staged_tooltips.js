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
		"在渔夫小屋之后解锁"
	)
	stageTips('iron_unlocked', 'minecraft:iron_ingot', [
		'在猪灵交易和',
		'冶炼厂之后解锁',
	])
	stageTips('bees_unlocked', 'minecraft:beehive', [
		'在冶炼厂和',
		'召唤祭坛之后解锁',
	])
	stageTips(
		'fishing_unlocked',
		['minecraft:copper_ingot', 'minecraft:redstone', 'minecraft:lapis_lazuli'],
		'在熔岩钓鱼之后解锁'
	)
	stageTips(
		'enchanting_unlocked',
		[
			'minecraft:enchanting_table',
			'apotheosis:hellshelf',
			'apotheosis:seashelf',
			'apotheosis:endshelf',
		],
		"在附魔师之塔之后解锁"
	)
	stageTips(
		'mechanic_unlocked',
		'create:mechanical_crafter',
		"在机械师小屋之后解锁"
	)
	stageTips(
		'blacksmith_unlocked',
		'create:steam_engine',
		"在铁匠小屋之后解锁"
	)
	stageTips(
		'smeltery_crafted',
		['@immersiveengineering', '@bloodmagic'],
		'该模组（大部分）在冶炼厂之后解锁'
	)
	stageTips(
		'mixing_cauldron_crafted',
		['@minecolonies', '@ae2'],
		'该模组（大部分）在混合锅之后解锁'
	)
	stageTips(
		'naturesaura_unlocked',
		'@naturesaura',
		'该模组（大部分）在蜂箱之后解锁'
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
		'该模组在采矿维度之后解锁'
	)
	stageTips('ars_unlocked', '@ars_nouveau', [
		'该模组（大部分）在',
		'血魔法，神秘学，',
		'和自然灵气之后解锁',
	])
	stageTips('dimensional_mineshaft', '@create', [
		'该模组（大部分）在',
		'采矿维度之后解锁',
	])
	stageTips(
		'dragon_defeated',
		[
			/ftbic:.*iridium/,
			'inferno:purifiedinfernalessence',
			'quark:dragon_scale',
		],
		['需要击杀末影龙']
	)
})
