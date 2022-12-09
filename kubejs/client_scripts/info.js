onEvent('jei.information', (info) => {
	info.add('minecraft:fern', ['可以通过对灰化土施用骨粉来获得。'])
	info.add('ars_nouveau:starbuncle_shards',['可通过给予野生星宝石兽金粒获得。', '野生星宝石兽可在降生祭坛召唤。'])
	info.add('avaritia:neutron_collector', [
		'请勿尝试用时间瓶加速……',
	])
	info.add('minecraft:seagrass', [
		'对水下的方块施用骨粉可以获得海草。',
		'试着对你的渔夫小屋水塘下的岩石施用骨粉。',
	])
	info.add('ae2:certus_crystal_seed', [
		'种子丢进血池（超多生物群系的血）里后会很快地生长为赛特斯石英水晶',
	])
	info.add('ae2:fluix_crystal_seed', [
		'种子丢进血池（超多生物群系的血）里后会很快地生长为赛特斯石英水晶',
	])
	info.add(
		['ae2:certus_quartz_crystal', 'ae2:fluix_crystal'],
		["在超多生物群系的血中生长更快"]
	)
	info.add(
		['immersiveengineering:generator'],
		['在配方解锁前必须前往末地城获取']
	)
	info.add(
		['ftbic:antimatter'],
		[
			'通过给反物质构建机提供能量和废料（可选）来制作。',
		]
	)
	info.add(
		[
			'immersiveengineering:toolupgrade_shield_flash',
			'immersiveengineering:toolupgrade_shield_magnet',
			'immersiveengineering:toolupgrade_shield_shock',
		],
		[
			"使用工程师装配台来给重型盾牌应用这些升级。",
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
		['战利品获取限定。']
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
		['猪灵交易获取。']
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
		['Zaps只能由核反应堆产生或FE Transformer转换得到。']
	)
	info.add('minecraft:bell', ['Dropped as loot from the Bellringer boss.'])
	info.add('meetyourfight:phantoplasm', [
		'制作一个Bellringer Gateway Pearl，召唤敲钟人并打败它来获得其掉落物。',
	])
	info.add('meetyourfight:fortunes_favor', [
		'制作一个Bellringer Gateway Pearl，召唤敲钟人并打败它来获得其掉落物。',
	])
	info.add('meetyourfight:mossy_tooth', [
		'制作一个Bellringer Gateway Pearl，召唤敲钟人并打败它来获得其掉落物。',
	])
	info.add(
		'minecraft:obsidian',
		'可以通过融合水和熔岩来获得。'
	)
	info.add(
		['minecraft:flowering_azalea', 'minecraft:azalea'],
		'对苔石块施加骨粉，在3x3到7x7的范围内的每一个方块都有15%的几率生成杜鹃花丛，并且有5%的几率生成一个盛开的杜鹃花丛。'
	)
	info.add(
		['minecraft:oak_leaves', 'minecraft:oak_sapling'],
		['可以在地底花园群系的荆棘上找到橡树树叶。']
	)
	info.add(
		['minecraft:snowball', 'minecraft:snow_block', 'minecraft:snow'],
		['你可以在召唤祭坛召唤一个雪傀儡。']
	)
	info.add('minecraft:ender_pearl', [
		'由生成在诡异森林的诡异甲虫掉落。',
	])
	info.add(
		['nethersdelight:propelplant_stem', 'nethersdelight:propelplant_cane'],
		['常见于绯红森林。']
	)
	info.add('nethersdelight:propelpearl', [
		'Requires harvesting from Propelplants using Shears',
		'常见于绯红森林。',
	])

	info.add('biomesoplenty:rose_quartz_shard', [
		'可以在晶簇裂隙找到。',
	])
	info.add('minecolonies:supplycampdeployer', [
		'作为建造工具任务的奖励获得。',
		' ',
		'在你遗失它之前使用掉它。',
	])
	info.add('hexerei:animal_fat', ['Drops from farm animals'])
	info.add('naturesaura:gold_leaf', [
		'破坏黄金树叶（用闪耀纤维注入树叶）掉落获得。',
		' ',
		'用闪耀纤维注入以后需要等一会才能收获到黄金叶。',
	])
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
		'在下界使用瓶与塞。'
	)
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
		'在主世界使用瓶与塞（或直接合成制作）。'
	)
	info.add(
		Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
		'在末地使用瓶与塞。'
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
			'在任何群系进行熔岩垂钓均可获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
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
			'可在诡异森林进行熔岩垂钓获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
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
			'可在绯红森林进行熔岩垂钓获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
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
			'可在灵魂沙峡谷进行熔岩垂钓获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
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
			'可在玄武岩三角洲进行熔岩垂钓获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
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
			'可在下界荒地进行熔岩垂钓获得。',
			'可查阅《阿兹瑞尔的收购》章节的任务',
		]
	)
	info.add(
		[
			'minecraft:water_bucket',
			Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),
			Fluid.of('minecraft:water'),
		],
		[
			'模拟殖民地的渔夫小屋会伴随生成一个水池。',
			' ',
			'水源不可再生，但你可以用水瓶安全地收集。',
		]
	)

	info.add(
		[
			'minecraft:wheat_seeds',
			'hexerei:sage_seed',
			'occultism:datura_seeds',
			'immersiveengineering:seed',
		],
		'打草掉落。'
	)
	info.add('hexerei:sage', 'Grows from Sage Seeds')
	info.add('hexerei:mahogany_sapling', [
		'作为任务奖励获得。',
		' ',
		'也可以在战利品箱子找到（在地牢和堡垒等建筑）。',
	])

	info.add(
		[Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}')],
		'可以在工具匠职业村民处交易获得。'
	)

	info.add(
		'nethersdelight:hoglin_hide',
		'通过用小刀杀死疣猪兽获得。'
	)
	info.add('quark:dragon_scale', [
		'在末地城箱子里可以找到。',
		' ',
		'末影龙同样掉落。',
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
			'有时模拟殖民地的矿工也会生成。',
			' ',
			'拥有 ' + weight + '/' + luckyOresTotalWeight + '的权重。',
		])
	})

	info.add('naturesaura:end_flower', '在末影龙死后生长。')
	info.add('ae2:singularity', '由物质聚合器制作。')
	info.add('bloodmagic:weak_tau', [
		'在简单地牢中找到（参见 "The Antechamber" in the Sanguine Scientem）。',
		' ',
		'可以在耕地上种植。',
	])
	info.add('bloodmagic:strong_tau', [
		'可以在简单地牢中比较少见地找到（参见 "The Antechamber" in the Sanguine Scientem）。',
		' ',
		'如果普通血命果生长时一只动物站在它上面，它会生长为饱满血命果。',
	])
	info.add('productivebees:gene_bottle', [
		'放置一个装瓶器，然后放入瓶子。',
		' ',
		'在其上方两格高的位置放置一个面朝下的活塞。',
		' ',
		'将蜜蜂置于中间，然后激活活塞。',
	])
	info.add('productivebees:gene', [
		'将压榨蜜蜂材料放到离心机里。',
	])
	info.add('evilcraft:origins_of_darkness', [
		'通过将黑苹果喂给一只怪物，然后将一本书扔向变异怪物来获得。',
	])
	info.add('evilcraft:vengeance_essence', [
		'杀死复仇之魂掉落。',
	])
	info.add('evilcraft:hardened_blood', ['将倒出的血液凝固得到。'])
	info.add('evilcraft:hardened_blood_shard', ['破坏凝固的血块得到。'])
	info.add(
		Item.of(
			'evilcraft:broom',
			'{Fluid:{Amount:10000,FluidName:"evilcraft:blood"}}'
		),
		['用裸刷，裸端和裸杆合成。']
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
		['有一定概率由转生粉变异获得。']
	)
	info.add('inferno:mutandis', [
		'用来将特定作物转变为另一种特定作物。',
		' ',
		'可以在以下作物中互相变异',
		'•橡树树苗',
		'•鼠尾草',
		'•颠茄花',
		'•艾蒿灌木',
		'•黄色酸模灌木',
		'•曼德拉花',
		'•橡胶树树苗',
	])
	info.add(
		[
			'farmersdelight:brown_mushroom_colony',
			'farmersdelight:red_mushroom_colony',
			'nethersdelight:crimson_fungus_colony',
			'nethersdelight:warped_fungus_colony',
		],
		[
			'当种植在肥沃土壤中时由合适的蘑菇种类生长而来',
			' ',
			'需要黑暗和时间',
			' ',
			'用剪刀左键收获整个菌落，右键收获部分菌落。',
		]
	)

	info.add('apotheosis:gem_dust', ['Drop an Anvil on an Apotheosis Gem'])
	info.add('avaritia:neutron_pile', [
		'由中子素收集器产生',
		' ',
		'每个中子素收集器每三分钟产生一个中子素尘埃',
	])

	info.add('witherstormmod:command_block_book', [
		'由凋零共生体掉落',
		' ',
		"共生体生成于凋零风暴的的第五阶段末尾，只能通过攻击它的背后来造成伤害",
	])
	info.add('witherstormmod:withered_nether_star', [
		'由完全进化的凋零风暴掉落',
	])
	info.add('witherstormmod:withered_bone', [
		'由凋零骷髅掉落',
	])
	info.add('witherstormmod:withered_flesh', [
		'由凋零僵尸掉落',
	])

	console.info('Added jei pages')
})
