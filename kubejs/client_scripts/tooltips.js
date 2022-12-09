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
		'野生星宝石兽可以用降生祭坛召唤'
	)
	tooltip('minecraft:amethyst_shard', '可以在隐域之缘找到')
	tooltip(
		['minecraft:soul_campfire', 'minecraft:campfire'],
		'可设置重生点并治疗你。'
	)
	tooltip('nethersdelight:stuffed_hoglin', '给予2分钟的+2抢夺效果。')
	tooltip('avaritia:neutron_collector', '*千万*不要试图对其使用时间之瓶。')
	tooltip('minecraft:golden_carrot', '给予5分钟的夜视效果。')
	tooltip('structurize:sceptergold', [
		'这把工具能够用来挖掘',
		'基岩和末地传送门框架',
	])
	tooltip('nomoretorchspam:glow_crystal', [
		'最多堆叠4x来获得50格半径的光照。',
		'每隔一个区块制造一个不可见光源。',
	])
	tooltip(
		'hexerei:blood_sigil',
		'已禁用。在合成配方内使用生命源质作为替代。'
	)
	tooltip(
		'evilcraft:spiked_plate',
		'已禁用。使用生命源质或杀死生物的方式作为替代。'
	)
	tooltip('occultism:datura', [
		'由魔鬼之梦种子长成，',
		'或由金苹果异变而来',
	])
	tooltip('biomesoplenty:hellbark_sapling', 'Found in the undergarden biome.')
	tooltip(/kubejs.*ladder/, [
		"由于一个BUG，夸克的",
		'梯子在JEI无法显示',
		' ',
		'这个物品可以被合成为',
		'真正的梯子',
	])
	tooltip('inferno:bedrock', '只作装饰用途！')
	tooltip('prettypipes:item_terminal', '已禁用，使用合成终端')
	tooltip('@itemfilters', 'For pack dev only')
	tooltip('ae2:certus_crystal_seed', '在超多生物群系的血中生长更快')
	tooltip('ae2:fluix_crystal_seed', '在超多生物群系的血中生长更快')
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
		Text.red('已禁用')
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
			Text.red('已禁用'),
			Text.red('使用FE Transformer或'),
			Text.red('核反应堆作为替代'),
		]
	)

	event.add(
		['evilcraft:blood_extractor'],
		Text.red('已禁用，使用凝固的血块')
	)

	//Grapple Hook upgrades
	tooltip('grapplemod:baseupgradeitem', '配方原料')
	tooltip('grapplemod:doubleupgradeitem', [
		'抓钩有两个抓钩',
		'3D立体机动装置了属于是',
	])
	tooltip('grapplemod:forcefieldupgradeitem', [
		'当使用者在空中飞荡时',
		'会被临近的方块排斥',
	])
	tooltip('grapplemod:magnetupgradeitem', [
		'当抓钩被扔出时',
		'会吸附到临近的方块上',
	])
	tooltip('grapplemod:motorupgradeitem', '将玩家拉向抓钩')
	tooltip('grapplemod:ropeupgradeitem', [
		'添加配置选项：',
		'• 绳索长度',
		'• 绳索分阶段穿过方块',
		'• 粘性绳索',
	])
	tooltip('grapplemod:staffupgradeitem', '单击左键使玩家向前移动')
	tooltip('grapplemod:swingupgradeitem', [
		'允许使用者配置',
		'摆荡速度',
	])
	tooltip('grapplemod:throwupgradeitem', [
		'允许使用者配置',
		'投掷抓钩相关选项',
	])
	tooltip('grapplemod:limitsupgradeitem', [
		'增加其他升级的选项上限',
	])
	tooltip(
		'grapplemod:rocketupgradeitem',
		'单击左键向前推动玩家'
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
		[Text.red('已禁用'), Text.red('使用存储总线')]
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
					text.add(1, Text.yellow('使用拆解宝典可以'))
					text.add(2, Text.yellow('将附魔转移到其他物品上'))
				}

				//Moving affixes
				if (item.nbt.affix_data != null) {
					text.add(1, Text.red('带有词缀的原版物品').bold(true))
					text.add(
						2,
						Text.red('最好直接丢到回收台').bold(true)
					)
				}
				text.add(1, Text.red('耐久非常低'))
			})
		})
	})

	event.add(
		[
			'naturesaura:fortress_finder',
			'naturesaura:end_city_finder',
			'naturesaura:outpost_finder',
		],
		[Text.red("在当前mod版本"), Text.red('没有作用')]
	)

	console.info('Added initial tooltips')

	//witherwarning
	tooltip(
		['minecraft:wither_skeleton_skull', 'bygonenether:soul_stone'],
		'凋零可以用灵魂石召唤',
		'而非灵魂沙'
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
				text.add(1, Text.red('在下界无效'))
			}
		})
	})

	let beesCustomRecipes = [
		'productivebees:spawn_egg_rancher_bee',
		'productivebees:spawn_egg_reed_bee',
	]
	beesCustomRecipes.forEach((item) => {
		tooltip(item, '有合成配方')
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
		beeTooltip(species, Text.gray('有合成配方'))
	})
	beeTooltip('arcane', [Text.gray('只能在末地的战利品箱中获取')])

	console.info('staging tooltips')
})
