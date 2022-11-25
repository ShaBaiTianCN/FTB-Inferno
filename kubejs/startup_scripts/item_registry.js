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
		.displayName('烟熏蘑菇')
		.food((food) => {
			food.hunger(4)
			food.saturation(1.3)
		})


	event.create('inferno:lifeessence_comb').displayName('生命源质蜜脾')

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
	event.create('inferno:crude_enderium_dust').displayName('粗制末影粉')

	//steelupgrade
	event.create('inferno:steel_armor_upgrade').displayName('钢护甲升级')

	//cobalt upgrade
	event
		.create('inferno:cobalt_armor_upgrade')
		.displayName('钴护甲升级')

	//netherite
	event
		.create('inferno:gilded_armor_upgrade')
		.displayName('镀金下界合金升级')

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
		['iron', '铁', 0xAAAAAA],
		['gold', '金', 0xfdf55f],
		['lapis', '青金石', 0x26619c],
		['redstone', '红石', 0xFF0000],
		['quartz', '石英', 0xFFFFFF],
		['copper', '铜', 0xf5af8b	],
		['tin', '锡', 0xd3d4d5],
		['emerald', '绿宝石', 0x40f082],
		['nickel', '镍', 0xafb7a5],
		['silver', '银', 0xC0C0C0],
		['lead', '铅', 0x667091],
		['diamond', '钻石', 0xb9f2ff]
	]

	singularities2.forEach((material) => {
		let mat = material[0]
		let color = material[2]
		let zh = material[1]
		event.create(`inferno:${mat}_dense_plate`).rarity('rare').displayName(zh + '致密板').texture('inferno:item/dense_plate').color(0, color)
		event.create(`inferno:${mat}_super_dense_plate`).rarity('rare').displayName(zh + '超致密板').texture('inferno:item/super_dense_plate').color(0, color)
	})

	singularities2.forEach((material) => {
		let mat = material[0]
		let zh = material[1]
		event
			.create(`inferno:${mat}_singularity`)
			.rarity('rare')
			.displayName(
				zh + ' 奇点'
			)
	})

	//netherite mesh
	event.create('inferno:netherite_mesh').displayName('下界合金筛网')

	//singularity star
	event.create('inferno:singularity_star').glow(true).displayName('奇点之星')

	//Antimatter star
	event
		.create('inferno:antimatter_star')
		.glow(true)
		.displayName('反物质之星')

	//Incomplete Antimatter star
	event
		.create('inferno:incomplete_antimatter_star')
		.unstackable()
		.displayName('反物质之星（半成品）')

	//infernaldust
	event.create('inferno:infernalessence').displayName('地狱精华')
	event
		.create('inferno:refinedinfernalessence')
		.displayName('精炼地狱精华')
	event
		.create('inferno:purifiedinfernalessence')
		.displayName('纯净地狱精华')

	//mutandis
	event.create('inferno:mutandis').displayName('转生粉')

	
	//blank upgrade
	event.create('inferno:blank_upgrade').displayName('空白升级')


	//source fabric
	event.create('inferno:source_fabric').displayName('魔源布料')

	//blaze fabric
	event.create('inferno:blaze_fabric').displayName('烈焰布料')

	//end fabric
	event.create('inferno:end_fabric').displayName('末地布料')

	//hoglin hide
	event.create('inferno:bound_hoglin_hide').displayName('缝紧疣猪兽皮')

	//hoglin hide
	event
		.create('inferno:incomplete_infinity_catalyst')
		.displayName('无尽催化剂（半成品）')

	//demon will infused source gems
	event
		.create('inferno:willinfusedsource')
		.displayName('将灌注魔源宝石')

	//doping agent
	event.create('inferno:steeldopingagent').displayName('钢掺杂剂')

	//life infused ingot
	event.create('inferno:life_infused_iron').displayName('生命灌注铁')

	//Miner's Delight Pickaxe
	event
		.create('miners_delight', 'pickaxe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("矿工乐事")
	event
		.create('foresters_delight', 'axe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("护林人乐事")
	event
		.create('diggers_delight', 'shovel')
		.tier('wood')
		.maxDamage(64000)
		.displayName("挖掘者乐事")
	event
		.create('farmers_delight', 'hoe')
		.tier('wood')
		.maxDamage(64000)
		.displayName("农夫乐事")

	//inactive slate
	event
		.create('inferno:inactivesigil')
		.maxStackSize(1)
		.displayName('未激活印记')

	//unprocessed steel plate
	event
		.create('inferno:unprocessed_steelsheet')
		.maxStackSize(1)
		.displayName('未加工的钢板')

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
	let ladderMaterials2 = [
		['acacia','金合欢'],
		['spruce','云杉'],
		['birch','白桦'],
		['jungle','丛林'],
		['crimson','绯红'],
		['warped','诡异'],
	]
	ladderMaterials2.forEach((material) => {
		let mat = material[0]
		let zh = material[1]
		event
			.create(`${mat}_ladder`)
			.displayName(
				zh + '梯子'
			)
			.texture('quark:block/' + material + '_ladder')
	})

	//Dark Oak Ladder
	event
		.create('dark_oak_ladder')
		.displayName('深色橡木梯子')
		.texture('quark:block/dark_oak_ladder')

	//Socket Sigil
	event.create('inferno:socket_sigil').unstackable().displayName('镶嵌印记')

	//Living Metal Geode
	event.create('inferno:living_metal_geode').displayName('生命金属晶簇')

	//Apple of Eden
	event
		.create('inferno:eden_apple')
		.unstackable()
		.glow(true)
		.displayName('伊甸苹果')
})
