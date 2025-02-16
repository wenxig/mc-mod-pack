ServerEvents.recipes(event => {
  const { recipes } = event
  const addManyShapeCraftingRecipe = ((arg1, arg2, arg3) => {
    //@ts-ignore
    recipes.extendedcrafting.shaped_table(arg1, arg2, arg3)
    //@ts-ignore
    recipes.create.mechanical_crafting(arg1, arg2, arg3)
  }) as (typeof recipes.extendedcrafting.shaped_table)
  const addManyShapelessCraftingRecipe = ((arg1, arg2) => {
    //@ts-ignore
    recipes.extendedcrafting.shapeless_table(arg1, arg2)

  }) as (typeof recipes.extendedcrafting.shapeless_table)

  // mek-基础控制电路
  recipes.gtceu.kubejs_super_laser_engraver('basic_control_circuit')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    'gtceu:advanced_smd_inductor',
    'gtceu:advanced_smd_capacitor',
    'gtceu:zpm_field_generator',
    'gtceu:zpm_sensor',
    'gtceu:quantum_processor_mainframe',
    'gtceu:crystal_processor_computer',
    'gtceu:wetware_processor_assembly'
  )
    .EUt(GTValues.VA[GTValues.ZPM])
  ['outputItems(net.minecraft.world.item.Item)']('mekanism:basic_control_circuit')

  // mek-基础通用线缆
  event.remove({ id: 'mekanism:transmitter/universal_cable/basic' })
  recipes.minecraft.crafting_shaped('mekanism:basic_universal_cable', [
    '   ',
    'ABA',
    '   '
  ], {
    A: '#forge:ingots/steel',
    B: "mekanism:enriched_redstone",
  })

  // mek-冶金灌注机
  event.remove({ id: 'mekanism:metallurgic_infuser' })
  recipes.minecraft.crafting_shaped('mekanism:metallurgic_infuser', [
    ['#forge:ingots/osmium', 'minecraft:furnace', '#forge:ingots/osmium'],
    ['mekanism:basic_control_circuit', 'minecraft:redstone_block', 'mekanism:basic_control_circuit'],
    ['#forge:ingots/osmium', 'minecraft:furnace', '#forge:ingots/osmium'],
  ])

  // mek-控制棒组件
  event.remove({ id: 'mekanismgenerators:fission_reactor/control_rod_assembly' })
  addManyShapeCraftingRecipe('mekanismgenerators:control_rod_assembly', [
    'DADADAD',
    'E E E E',
    'E E E E',
    'E E E E',
    'E E E E',
    'DCDCDCD',
    'BBBBBBB',
  ], {
    A: '#forge:storage_blocks/tin',
    B: '#c:ostrum_plates',
    C: '#forge:gems/fluix',
    D: 'mekanism_extras:absolute_control_circuit',
    E: '#forge:rods/lead'
  })

  // 龙之研究-龙核心
  event.remove({ id: 'draconicevolution:components/draconium_core' })
  recipes.gtceu.assembly_line('dragon_core')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])']([
    Item.of('draconicevolution:draconium_ingot', 64 * 10),
    Item.of('mekanism_extras:alloy_shining', 64 * 5),
    Item.of('mekanism:pellet_antimatter', 64 * 5),
  ])
    .inputFluids(Fluid.of('mekanismgenerators:fusion_fuel', 10240000) as any)
  ['outputItems(net.minecraft.world.item.Item)']('draconicevolution:draconium_core')
    .EUt(GTValues.VA[GTValues.UIV])
    .duration(2000)

  // 龙之研究-反应堆核心
  // event.remove({ id: 'draconicevolution:machines/reactor_core' })
  // addManyShapeCraftingRecipe('draconicevolution:reactor_core', [
  //   '   AAA   ',
  //   '  AAEAA  ',
  //   ' AADCDAA ',
  //   'AADCBCDAA',
  //   'AECBFBCEA',
  //   'AADCBCDAA',
  //   ' AADCDAA ',
  //   '  AAEAA  ',
  //   '   AAA   ',
  // ], {
  //   A: 'draconicevolution:awakened_draconium_block',
  //   B: 'draconicevolution:chaos_shard',
  //   C: 'ad_astra:glacio_ice_shard_ore',
  //   D: 'mekanism_extras:infinite_induction_provider',
  //   E: 'ad_astra:calorite_engine',
  //   F: 'avaritia:infinity'
  // })


  // 龙之研究-反应堆稳定器内转子
  event.remove({ id: 'draconicevolution:machines/reactor_prt_in_rotor' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_prt_in_rotor', [
    'AAAAC',
    'ABBAC',
    'ABBAC',
    'ABBAC',
    'ABBAC',
    'ABBA ',
    'ABBA ',
    'AAAA ',
  ], {
    A: 'draconicevolution:awakened_draconium_block',
    B: 'mekanismgenerators:control_rod_assembly',
    C: '#mekanism_extras:alloys/spectrum'
  })

  // 龙之研究-反应堆稳定器外转子
  event.remove({ id: 'draconicevolution:machines/reactor_prt_out_rotor' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_prt_out_rotor', [
    'CDDDDD',
    'CDBBBD',
    'CDBABD',
    'CDBABD',
    'CDBABD',
    ' DBABD',
    ' DBBBD',
    ' DDDDD',
  ], {
    A: 'draconicevolution:awakened_draconium_block',
    B: 'mekanismgenerators:control_rod_assembly',
    C: '#mekanism_extras:alloys/spectrum',
    D: 'avaritia:crystal_matrix_ingot'
  })

  // kubejs-石墨控制棒
  addManyShapeCraftingRecipe('kubejs:super_graphite_electrond', [
    'DDDD',
    'DAAD',
    'DAAD',
    'DCCD',
    'DBBD',
    'DCCD',
    'DAAD',
    'DAAD',
    'DDDD',
  ], {
    A: '#mekanism_extras:enriched/thermonuclear',
    B: 'draconicevolution:large_chaos_frag',
    C: '#forge:storage_blocks/neutron',
    D: 'immersiveengineering:graphite_electrode'
  })

  // 龙之研究-反应堆稳定器转子总成
  event.remove({ id: 'draconicevolution:machines/reactor_prt_rotor_full' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_prt_rotor_full', [
    '  BBB    ',
    ' B AAA   ',
    'B C   A  ',
    'BA C C A ',
    'BA  D  AB',
    ' A C C AB',
    '  A   C B',
    '   AAA B ',
    '    BBB  ',
  ], {
    A: 'draconicevolution:reactor_prt_in_rotor',
    B: 'draconicevolution:reactor_prt_out_rotor',
    C: 'kubejs:super_graphite_electrond',
    D: 'avaritia:neutron_gear'
  })

  // 龙之研究-反应堆稳定器框架
  event.remove({ id: 'draconicevolution:machines/reactor_prt_stab_frame' })
  recipes.minecraft.crafting_shaped('draconicevolution:reactor_prt_stab_frame', [
    'DED',
    'CAC',
    'DED'
  ], {
    A: 'draconicevolution:awakened_draconium_block',
    C: 'kubejs:super_graphite_electrond',
    D: 'avaritia:neutron_gear',
    E: 'draconicevolution:energy_core_stabilizer'
  })

  // 龙之研究-反应堆稳定器聚焦环
  event.remove({ id: 'draconicevolution:machines/reactor_prt_focus_ring' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_prt_focus_ring', [
    '  BCCCB  ',
    ' BB A BB ',
    'BB  A  BB',
    'C   E   C',
    'CAAE EAAC',
    'C   E   C',
    'BB  A  BB',
    ' BB A BB ',
    '  BCCCB  ',
  ], {
    A: '#mekanism_extras:enriched/spectrum',
    B: 'draconicevolution:awakened_draconium_block',
    C: 'avaritia:crystal_matrix',
    E: 'draconicevolution:crafting_core'
  })

  // 龙之研究-反应堆稳定器
  event.remove({ id: 'draconicevolution:machines/reactor_stabilizer' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_stabilizer', [
    'EEAAAEE',
    'EAFCFAE',
    'EACACAE',
    'EAFCFAE',
    'EEAAAEE',
    'BBBBBBB'
  ], {
    A: 'draconicevolution:reactor_prt_focus_ring',
    B: 'draconicevolution:reactor_prt_stab_frame',
    C: 'draconicevolution:reactor_prt_rotor_full',
    E: 'kubejs:super_graphite_electrond',
    F: 'avaritia:neutron_gear',
  })

  // 通量网络-通量核心
  event.remove({ id: 'fluxnetworks:fluxcore' })
  addManyShapeCraftingRecipe('fluxnetworks:flux_core', [
    ' BADAB ',
    'B D D B',
    'ADBCBDA',
    'D CEC D',
    'ADBCBDA',
    'B D D B',
    ' BADAB ',
  ], {
    A: 'draconicevolution:reactor_stabilizer',
    B: 'draconicevolution:energy_pylon',
    C: 'draconicevolution:energy_core',
    D: 'draconicevolution:draconic_wireless_crystal',
    E: 'draconicevolution:reactor_injector'
  })

  // 龙之研究-反应堆能量注入器
  event.remove({ id: 'draconicevolution:machines/reactor_injector' })
  addManyShapeCraftingRecipe('draconicevolution:reactor_injector', [
    '  DD  ',
    ' DDDD ',
    'DABBAD',
    'CCBBCC',
    'EACCAE',
    'AEEEEA',
    'AAAAAA',
  ], {
    A: 'kubejs:super_graphite_electrond',
    B: 'draconicevolution:energy_pylon',
    C: 'draconicevolution:energy_core',
    D: 'ad_astra:calorite_engine',
    E: 'draconicevolution:reactor_prt_focus_ring'
  })

  // 龙之研究-能量核心
  // event.remove({ id: 'draconicevolution:machines/energy_core' })
  // event.recipes.mekanism.combining('draconicevolution:energy_core',
  //   Item.of('draconicevolution:chaotic_energy_core') as any,
  //   Item.of('industrialforegoing:infinity_nuke') as any)

  // 末影
  event.remove({ mod: 'endrem' })
  addManyShapeCraftingRecipe('endrem:ancient_portal_frame', [
    " AAA AAA ",
    "BBBAAABBB",
    "BCCDADCCB",
    "EECDDDCEE",
    "EFCCCCCFE",
    "EFFCDCFFE",
    "EEEEEEEEE"
  ], {
    "A": {
      "item": "mekanism_extras:infinite_control_circuit"
    },
    "B": {
      "item": "tfc:metal/double_sheet/red_steel"
    },
    "C": {
      "item": "avaritia:endest_pearl"
    },
    "D": {
      "item": "rftoolsbase:infused_diamond"
    },
    "E": {
      "item": "rftoolsbase:infused_enderpearl"
    },
    "F": {
      "item": "tfc:metal/double_sheet/blue_steel"
    }
  })

  // 种子素压缩
  recipes.gtceu.extruder('tiny_super_neutrino_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:neutrino_block', 32),
    Item.of('avaritia:neutron', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_super_neutrino_dust'
  )
    .duration(10000)
    .EUt(GTValues.VA[GTValues.UEV])

  recipes.gtceu.extruder('tiny_very_super_neutrino_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:super_neutrino_block', 32),
    Item.of('gtceu:super_neutrino_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_very_super_neutrino_dust'
  )
    .duration(20000)
    .EUt(GTValues.VA[GTValues.UIV])


  recipes.gtceu.extruder('tiny_perfection_super_neutrino_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:very_super_neutrino_block', 32),
    Item.of('gtceu:very_super_neutrino_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_perfection_super_neutrino_dust'
  )
    .duration(40000)
    .EUt(GTValues.VA[GTValues.UXV])
  recipes.gtceu.extruder('tiny_acme_super_neutrino_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:perfection_super_neutrino_block', 32),
    Item.of('gtceu:perfection_super_neutrino_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_acme_super_neutrino_dust'
  )
    .duration(10000)
    .EUt(GTValues.VA[GTValues.OpV])

  // 觉醒龙压缩
  recipes.gtceu.extruder('tiny_super_dragon_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:infinity_block', 32),
    Item.of('draconicevolution:awakened_draconium_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_super_dragon_dust'
  )
    .duration(10000)
    .EUt(GTValues.VA[GTValues.UEV])

  recipes.gtceu.extruder('tiny_very_super_dragon_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:super_dragon_block', 32),
    Item.of('gtceu:super_dragon_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_very_super_dragon_dust'
  )
    .duration(20000)
    .EUt(GTValues.VA[GTValues.UIV])


  recipes.gtceu.extruder('tiny_perfection_super_dragon_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:very_super_dragon_block', 32),
    Item.of('gtceu:very_super_dragon_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_perfection_super_dragon_dust'
  )
    .duration(40000)
    .EUt(GTValues.VA[GTValues.UXV])
  recipes.gtceu.extruder('tiny_acme_super_dragon_dust')
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](
    Item.of('gtceu:perfection_super_dragon_block', 32),
    Item.of('gtceu:perfection_super_dragon_block', 32),
  )
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    'gtceu:tiny_acme_super_dragon_dust'
  )
    .duration(10000)
    .EUt(GTValues.VA[GTValues.OpV])

  // 三幅画铟
  event.replaceOutput({ input: ['#forge:dusts/naquadria_oxide_mixture'], output: ['gtceu:titanium_trifluoride_dust'] }, 'gtceu:titanium_trifluoride_dust', 'gtceu:indium_trifluoride_dust' as any)

  // 寰宇肉丸
  event.remove({ output: ['avaritia:cosmic_meatballs'] })
  addManyShapelessCraftingRecipe('avaritia:cosmic_meatballs', [
    {
      "item": "vintagedelight:stuffed_burrito"
    },
    {
      "item": "vintagedelight:deluxe_burger"
    },
    {
      "item": "vintagedelight:surstromming"
    },
    {
      "item": "vintagedelight:salted_cod"
    },
    {
      "item": "vintagedelight:salted_salmon"
    },
    {
      "item": "vintagedelight:cheese_burger"
    },
    {
      "item": "vintagedelight:meat_pizza"
    },
    {
      "item": "vintagedelight:pad_thai"
    },
    {
      "item": "kubejs:huanyurouwan_1"
    },
    {
      "item": "kubejs:huanyurouwan_0"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    },
    {
      "item": "gtceu:acme_super_neutrino_block"
    }])

  addManyShapelessCraftingRecipe('kubejs:huanyurouwan_0', [
    {
      "item": "farmersdelight:cod_roll"
    },
    {
      "item": "farmersdelight:bone_broth"
    },
    {
      "item": "farmersdelight:beef_stew"
    },
    {
      "item": "farmersdelight:salmon_roll"
    },
    {
      "item": "farmersdelight:stuffed_potato"
    },
    {
      "item": "farmersdelight:dumplings"
    },
    {
      "item": "farmersdelight:hamburger"
    },
    {
      "item": "farmersdelight:bacon_sandwich"
    },
    {
      "item": "farmersdelight:mutton_wrap"
    },
    {
      "item": "farmersdelight:chicken_sandwich"
    },
    {
      "item": "farmersdelight:barbecue_stick"
    },
    {
      "item": "farmersdelight:smoked_ham"
    },
    {
      "item": "farmersdelight:cooked_cod_slice"
    },
    {
      "item": "farmersdelight:cooked_chicken_cuts"
    },
    {
      "item": "farmersdelight:cooked_salmon_slice"
    },
    {
      "item": "farmersdelight:cooked_bacon"
    },
    {
      "item": "farmersdelight:beef_patty"
    },
    {
      "item": "farmersdelight:cooked_mutton_chops"
    },
    {
      "item": "firmalife:food/cooked_bacon"
    },
    {
      "item": "firmalife:food/burrito"
    },
    {
      "item": "firmalife:food/taco"
    },
    {
      "item": "firmalife:food/maki_roll"
    },
    {
      "item": "firmalife:food/futo_maki_roll"
    },
    {
      "item": "firmalife:food/cooked_lasagna"
    },
    {
      "item": "tfc:food/rye_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/rice_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/wheat_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/oat_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/cooked_beef"
    },
    {
      "item": "tfc:food/cooked_chicken"
    },
    {
      "item": "tfc:food/cooked_pork"
    },
    {
      "item": "tfc:food/cooked_wolf"
    },
    {
      "item": "tfc:food/cooked_venison"
    },
    {
      "item": "tfc:food/cooked_quail"
    },
    {
      "item": "tfc:food/cooked_cod"
    },
    {
      "item": "tfc:food/cooked_gran_feline"
    },
    {
      "item": "tfc:food/cooked_chevon"
    },
    {
      "item": "tfc:food/cooked_frog_legs"
    },
    {
      "item": "tfc:food/cooked_hyena"
    },
    {
      "item": "tfc:food/cooked_fox"
    },
    {
      "item": "tfc:food/cooked_grouse"
    },
    {
      "item": "tfc:food/cooked_peafowl"
    },
    {
      "item": "tfc:food/cooked_bear"
    },
    {
      "item": "tfc:food/barley_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/maize_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/cooked_mutton"
    },
    {
      "item": "tfc:food/cooked_horse_meat"
    },
    {
      "item": "tfc:food/cooked_turkey"
    },
    {
      "item": "tfc:food/cooked_pheasant"
    },
    {
      "item": "tfc:food/cooked_rabbit"
    },
    {
      "item": "tfc:food/cooked_turtle"
    },
    {
      "item": "tfc:food/cooked_camelidae"
    },
    {
      "item": "tfc:food/cooked_tropical_fish"
    },
    {
      "item": "tfc:food/cooked_calamari"
    },
    {
      "item": "tfc:food/cooked_lake_trout",
    },
    {
      "item": "tfc:food/cooked_crappie",
    },
    {
      "item": "tfc:food/cooked_bluegill",
    },
    {
      "item": "tfc:food/cooked_shellfish",
    },
    {
      "item": "fruitsdelight:lychee_chicken"
    },
    {
      "item": "fruitsdelight:pineapple_marinated_pork"
    },
    {
      "item": "fruitsdelight:orange_marinated_pork"
    },
    {
      "item": "fruitsdelight:fig_chicken_stew"
    },
    {
      "item": "tfc:food/cooked_largemouth_bass"
    },
    {
      "item": "tfc:food/cooked_rainbow_trout"
    },
    {
      "item": "tfc:food/cooked_salmon"
    },
    {
      "item": "tfc:food/cooked_smallmouth_bass"
    },
    {
      "item": "tfc:food/protein_soup"
    },
    {
      "item": "tfc:food/protein_salad"
    },
    {
      "item": "barbequesdelight:grilled_cod_skewer"
    },
    {
      "item": "barbequesdelight:grilled_salmon_skewer"
    },
    {
      "item": "barbequesdelight:grilled_chicken_skewer"
    },
    {
      "item": "barbequesdelight:bibimbap"
    },
    {
      "item": "barbequesdelight:kebab_wrap"
    },
    {
      "item": "barbequesdelight:kebab_sandwich"
    },
    {
      "item": "barbequesdelight:grilled_potato_skewer"
    },
    {
      "item": "barbequesdelight:grilled_pork_sausage_skewer"
    },
    {
      "item": "barbequesdelight:grilled_rabbit_skewer"
    },
    {
      "item": "barbequesdelight:grilled_lamb_skewer"
    },
    {
      "item": "barbequesdelight:grilled_beef_skewer"
    },
    {
      "item": "barbequesdelight:grilled_mushroom_skewer"
    },
    {
      "item": "fruitsdelight:orange_chicken"
    }
  ])

  addManyShapelessCraftingRecipe('kubejs:huanyurouwan_1', [
    {
      "item": "cuisinedelight:ham_fried_rice"
    },
    {
      "item": "cuisinedelight:meat_with_vegetables"
    },
    {
      "item": "cuisinedelight:seafood_with_vegetables"
    },
    {
      "item": "cuisinedelight:meat_fried_rice"
    },
    {
      "item": "cuisinedelight:meat_pasta"
    },
    {
      "item": "cuisinedelight:meat_platter"
    },
    {
      "item": "cuisinedelight:seafood_fried_rice"
    },
    {
      "item": "cuisinedelight:seafood_pasta"
    },
    {
      "item": "cuisinedelight:seafood_platter"
    },
    {
      "item": "ends_delight:steamed_dragon_egg_block"
    },
    {
      "item": "ends_delight:grilled_shulker_block"
    },
    {
      "item": "ends_delight:dragon_meat_stew_block"
    },
    {
      "item": "cuisinedelight:fried_meat_and_melon"
    },
    {
      "item": "cuisinedelight:fried_meat_and_melon"
    },
    {
      "item": "frycooks_delight:fried_chicken_leg"
    },
    {
      "item": "ends_delight:dragon_leg_with_sauce_block"
    },
    {
      "item": "frycooks_delight:fried_fish_slice"
    },
    {
      "item": "ends_delight:roasted_dragon_steak"
    },
    {
      "item": "ends_delight:end_barbecue_stick"
    },
    {
      "item": "ends_delight:ender_congee"
    },
    {
      "item": "ends_delight:ender_noodle"
    },
    {
      "item": "ends_delight:enderman_gristle_stew"
    },
    {
      "item": "ends_delight:stir_fried_shulker_meat"
    },
    {
      "item": "croptopia:pork_jerky"
    },
    {
      "item": "croptopia:ham_sandwich"
    },
    {
      "item": "croptopia:blt"
    },
    {
      "item": "croptopia:tuna_sandwich"
    },
    {
      "item": "croptopia:cheeseburger"
    },
    {
      "item": "croptopia:hamburger"
    },
    {
      "item": "croptopia:tofuburger"
    },
    {
      "item": "croptopia:supreme_pizza"
    },
    {
      "item": "croptopia:pineapple_pepperoni_pizza"
    },
    {
      "item": "croptopia:sushi"
    },
    {
      "item": "croptopia:chicken_and_rice"
    },
    {
      "item": "croptopia:taco"
    },
    {
      "item": "croptopia:chicken_and_noodles"
    },
    {
      "item": "croptopia:chicken_and_dumplings"
    },
    {
      "item": "croptopia:tofu_and_dumplings"
    },
    {
      "item": "croptopia:spaghetti_squash"
    },
    {
      "item": "croptopia:lemon_chicken"
    },
    {
      "item": "croptopia:fried_chicken"
    },
    {
      "item": "croptopia:cashew_chicken"
    },
    {
      "item": "croptopia:carnitas"
    },
    {
      "item": "croptopia:fajitas"
    },
    {
      "item": "croptopia:enchilada"
    },
    {
      "item": "croptopia:tamales"
    },
    {
      "item": "croptopia:stuffed_poblanos"
    },
    {
      "item": "croptopia:beef_wellington"
    },
    {
      "item": "croptopia:fish_and_chips"
    },
    {
      "item": "croptopia:cornish_pasty"
    },
    {
      "item": "croptopia:beef_jerky"
    },
    {
      "item": "croptopia:beef_stew"
    },
    {
      "item": "croptopia:beef_stir_fry"
    },
    {
      "item": "croptopia:bacon"
    },
    {
      "item": "croptopia:goulash"
    },
    {
      "item": "croptopia:steamed_crab"
    },
    {
      "item": "croptopia:deep_fried_shrimp"
    },
    {
      "item": "croptopia:tuna_roll"
    },
    {
      "item": "croptopia:pork_and_beans"
    },
    {
      "item": "croptopia:fried_calamari"
    },
    {
      "item": "croptopia:crab_legs"
    },
    {
      "item": "croptopia:steamed_clams"
    },
    {
      "item": "croptopia:grilled_oysters"
    },
    {
      "item": "croptopia:anchovy_pizza"
    },
    {
      "item": "croptopia:croque_madame"
    },
    {
      "item": "croptopia:croque_monsieur"
    },
    {
      "item": "croptopia:the_big_breakfast"
    },
    {
      "item": "farmersdelight:pasta_with_mutton_chop"
    },
    {
      "item": "farmersdelight:roast_chicken_block"
    },
    {
      "item": "farmersdelight:grilled_salmon"
    },
    {
      "item": "farmersdelight:honey_glazed_ham_block"
    },
    {
      "item": "farmersdelight:rice_roll_medley_block"
    },
    {
      "item": "farmersdelight:chicken_soup"
    },
    {
      "item": "farmersdelight:fish_stew"
    },
    {
      "item": "farmersdelight:baked_cod_stew"
    },
    {
      "item": "farmersdelight:noodle_soup"
    },
    {
      "item": "farmersdelight:bacon_and_eggs"
    },
    {
      "item": "farmersdelight:pasta_with_meatballs"
    },
    {
      "item": "farmersdelight:roasted_mutton_chops"
    },
    {
      "item": "farmersdelight:steak_and_potatoes"
    },
    {
      "item": "farmersdelight:squid_ink_pasta"
    }
  ])

  // cjb
  event.remove({ output: ['avaritia:ultimate_stew'] })
  addManyShapeCraftingRecipe('avaritia:ultimate_stew', [
    " ABBBBBA ",
    "ABBBBBBBA",
    " ABBBBBA ",
    " ACCCCCA ",
    "ACCDDDCCA",
    "ACDDDDDCA",
    "ACDDDDDCA",
    "ACCCCCCCA",
    " AAAAAAA "
  ], {
    "A": {
      "item": "avaritia:neutron"
    },
    "B": {
      "item": "avaritia:infinity"
    },
    "C": {
      "item": "avaritia:endless_cake"
    },
    "D": {
      "item": "avaritia:cosmic_meatballs"
    }
  })

  //贪婪蛋糕
  event.remove({ output: ['avaritia:endless_cake'] })

  addManyShapelessCraftingRecipe('kubejs:super_cake_0', [
    {
      "item": "tfc:jar/cloudberry_unsealed"
    },
    {
      "item": "tfc:jar/cranberry_unsealed"
    },
    {
      "item": "tfc:jar/elderberry_unsealed"
    },
    {
      "item": "tfc:jar/gooseberry_unsealed"
    },
    {
      "item": "tfc:jar/raspberry_unsealed"
    },
    {
      "item": "tfc:jar/snowberry_unsealed"
    },
    {
      "item": "tfc:jar/strawberry_unsealed"
    },
    {
      "item": "tfc:jar/wintergreen_berry_unsealed"
    },
    {
      "item": "tfc:jar/banana_unsealed"
    },
    {
      "item": "tfc:food/rye_bread"
    },
    {
      "item": "tfc:food/rice_bread_sandwich"
    },
    {
      "item": "tfc:jar/olive_unsealed"
    },
    {
      "item": "tfc:jar/orange_unsealed"
    },
    {
      "item": "tfc:jar/peach_unsealed"
    },
    {
      "item": "tfc:food/rice_bread_jam_sandwich"
    },
    {
      "item": "tfc:jar/lemon_unsealed"
    },
    {
      "item": "tfc:jar/green_apple_unsealed"
    },
    {
      "item": "tfc:jar/cherry_unsealed"
    },
    {
      "item": "tfc:jar/red_apple_unsealed"
    },
    {
      "item": "tfc:jar/pumpkin_chunks_unsealed"
    },
    {
      "item": "tfc:jar/melon_slice_unsealed"
    },
    {
      "item": "tfc:cake"
    },
    {
      "item": "herbalbrews:green_tea"
    },
    {
      "item": "herbalbrews:black_tea"
    },
    {
      "item": "herbalbrews:hibiscus_tea"
    },
    {
      "item": "herbalbrews:lavender_tea"
    },
    {
      "item": "herbalbrews:yerba_mate_tea"
    },
    {
      "item": "crabbersdelight:clam_bake"
    },
    {
      "item": "crabbersdelight:surf_and_turf"
    },
    {
      "item": "crabbersdelight:shrimp_skewer"
    },
    {
      "item": "nethervinery:lava_fizz",
    },
    {
      "item": "nethervinery:nether_fizz",
    },
    {
      "item": "nethervinery:improved_lava_fizz",
    },
    {
      "item": "herbalbrews:rooibos_tea"
    },
    {
      "item": "herbalbrews:oolong_tea"
    },
    {
      "item": "herbalbrews:coffee"
    },
    {
      "item": "crabbersdelight:fish_stick"
    },
    {
      "item": "nethervinery:netherite_nectar",
    },
    {
      "item": "nethervinery:ghastly_grenache",
    },
    {
      "item": "herbalbrews:feral_flask_big"
    },
    {
      "item": "nethervinery:blazewine_pinot",
    },
    {
      "item": "herbalbrews:armor_flask_big"
    },
    {
      "item": "herbalbrews:damage_flask_big"
    },
    {
      "item": "nethervinery:improved_nether_fizz",
    },
    {
      "item": "crabbersdelight:crab_cakes"
    },
    {
      "item": "barbequesdelight:grilled_vegetable_skewer"
    },
    {
      "item": "tfc:jar/plum_unsealed"
    },
    {
      "item": "crabbersdelight:stuffed_nautilus_shell"
    },
    {
      "item": "nuclearcraft:evenmoresmore"
    },
    {
      "item": "crabbersdelight:kelp_shake"
    },
    {
      "item": "crabbersdelight:jar_of_pickles"
    },
    {
      "item": "crabbersdelight:frog_leg_kebob"
    },
    {
      "item": "crabbersdelight:squid_kebob"
    },
    {
      "item": "herbalbrews:milk_coffee"
    },
    {
      "item": "create:blaze_cake"
    },
    {
      "item": "create:honeyed_apple"
    },
    {
      "item": "create:builders_tea"
    },
    {
      "item": "create:sweet_roll"
    },
    {
      "item": "create:chocolate_glazed_berries"
    },
    {
      "item": "tomeofblood:mint_tea"
    },
    {
      "item": "crabbersdelight:shrimp_fried_rice"
    },
    {
      "item": "crabbersdelight:coral_crunch"
    },
    {
      "item": "crabbersdelight:seafood_gumbo"
    },
    {
      "item": "crabbersdelight:clam_chowder"
    },
    {
      "item": "crabbersdelight:bisque"
    },
    {
      "item": "vinery:red_taiga_grapejuice"
    },
    {
      "item": "vinery:red_grapejuice"
    },
    {
      "item": "vinery:apple_juice"
    },
    {
      "item": "create:bar_of_chocolate"
    },
    {
      "item": "vinery:white_taiga_grapejuice"
    },
    {
      "item": "vinery:red_jungle_grapejuice"
    },
    {
      "item": "vinery:white_jungle_grapejuice"
    },
    {
      "item": "vinery:cherry_wine",
    },
    {
      "item": "vinery:white_savanna_grapejuice"
    },
    {
      "item": "vinery:red_savanna_grapejuice"
    },
    {
      "item": "vinery:mellohi_wine",
    },
    {
      "item": "vinery:noir_wine",
    },
    {
      "item": "vinery:apple_wine",
    },
    {
      "item": "vinery:jellie_wine",
    },
    {
      "item": "vinery:kelp_cider",
    },
    {
      "item": "vinery:aegis_wine",
    }
  ])
  addManyShapelessCraftingRecipe('kubejs:super_cake_1', [
    {
      "item": "croptopia:rhubarb_pie"
    },
    {
      "item": "croptopia:mango_ice_cream"
    },
    {
      "item": "croptopia:strawberry_smoothie"
    },
    {
      "item": "croptopia:cherry_jam"
    },
    {
      "item": "croptopia:blueberry_jam"
    },
    {
      "item": "croptopia:melon_juice"
    },
    {
      "item": "croptopia:grape_juice"
    },
    {
      "item": "croptopia:toast"
    },
    {
      "item": "croptopia:popcorn"
    },
    {
      "item": "croptopia:raisins"
    },
    {
      "item": "croptopia:orange_juice"
    },
    {
      "item": "croptopia:blackberry_jam"
    },
    {
      "item": "croptopia:apple_juice"
    },
    {
      "item": "croptopia:pecan_ice_cream"
    },
    {
      "item": "croptopia:banana_smoothie"
    },
    {
      "item": "croptopia:elderberry_jam"
    },
    {
      "item": "croptopia:butter"
    },
    {
      "item": "croptopia:chocolate"
    },
    {
      "item": "croptopia:cheese"
    },
    {
      "item": "croptopia:pecan_pie"
    },
    {
      "item": "croptopia:strawberry_ice_cream"
    },
    {
      "item": "croptopia:cherry_pie"
    },
    {
      "item": "croptopia:strawberry_jam"
    },
    {
      "item": "croptopia:grape_jam"
    },
    {
      "item": "croptopia:apricot_jam"
    },
    {
      "item": "croptopia:cranberry_juice"
    },
    {
      "item": "croptopia:pineapple_juice"
    },
    {
      "item": "croptopia:apple_pie"
    },
    {
      "item": "croptopia:tortilla"
    },
    {
      "item": "croptopia:tofu"
    },
    {
      "item": "croptopia:vanilla_ice_cream"
    },
    {
      "item": "croptopia:salsa"
    },
    {
      "item": "croptopia:raspberry_jam"
    },
    {
      "item": "croptopia:peach_jam"
    },
    {
      "item": "croptopia:tomato_juice"
    },
    {
      "item": "croptopia:saguaro_juice"
    },
    {
      "item": "croptopia:buttered_toast"
    },
    {
      "item": "croptopia:nougat"
    },
    {
      "item": "croptopia:scrambled_eggs"
    },
    {
      "item": "croptopia:protein_bar"
    },
    {
      "item": "croptopia:roasted_nuts"
    },
    {
      "item": "croptopia:trail_mix"
    },
    {
      "item": "croptopia:yoghurt"
    },
    {
      "item": "croptopia:saucy_chips"
    },
    {
      "item": "croptopia:leek_soup"
    },
    {
      "item": "croptopia:oatmeal"
    },
    {
      "item": "croptopia:leafy_salad"
    },
    {
      "item": "croptopia:doughnut"
    },
    {
      "item": "croptopia:potato_chips"
    },
    {
      "item": "croptopia:onion_rings"
    },
    {
      "item": "croptopia:mead"
    },
    {
      "item": "croptopia:chocolate_milkshake"
    },
    {
      "item": "croptopia:soy_milk"
    },
    {
      "item": "croptopia:limeade"
    },
    {
      "item": "croptopia:veggie_salad"
    },
    {
      "item": "croptopia:caesar_salad"
    },
    {
      "item": "croptopia:kale_chips"
    },
    {
      "item": "croptopia:sweet_potato_fries"
    },
    {
      "item": "croptopia:pumpkin_spice_latte"
    },
    {
      "item": "croptopia:wine"
    },
    {
      "item": "croptopia:fruit_smoothie"
    },
    {
      "item": "croptopia:coffee"
    },
    {
      "item": "croptopia:artichoke_dip"
    },
    {
      "item": "croptopia:toast_with_jam"
    },
    {
      "item": "croptopia:lemonade"
    },
    {
      "item": "croptopia:kale_smoothie"
    },
    {
      "item": "croptopia:rum"
    },
    {
      "item": "croptopia:beer"
    },
    {
      "item": "croptopia:fruit_salad"
    },
    {
      "item": "croptopia:cucumber_salad"
    },
    {
      "item": "croptopia:steamed_rice"
    },
    {
      "item": "croptopia:french_fries"
    },
    {
      "item": "croptopia:peanut_butter_and_jam"
    },
    {
      "item": "croptopia:grilled_cheese"
    },
    {
      "item": "croptopia:pizza"
    },
    {
      "item": "croptopia:cheese_pizza"
    },
    {
      "item": "croptopia:candied_nuts"
    },
    {
      "item": "croptopia:banana_nut_bread"
    },
    {
      "item": "croptopia:cheese_cake"
    },
    {
      "item": "croptopia:brownies"
    },
    {
      "item": "croptopia:snicker_doodle"
    }
  ])
  addManyShapelessCraftingRecipe('kubejs:super_cake_2', [
    {
      "item": "ends_delight:roasted_shulker_meat_slice"
    },
    {
      "item": "ends_delight:smoked_dragon_leg"
    },
    {
      "item": "ends_delight:roasted_dragon_meat"
    },
    {
      "item": "ends_delight:roasted_dragon_meat_cuts"
    },
    {
      "item": "ends_delight:chorus_flower_pie"
    },
    {
      "item": "ends_delight:roasted_shulker_meat"
    },
    {
      "item": "ends_delight:fried_dragon_egg"
    },
    {
      "item": "ends_delight:chorus_succulent"
    },
    {
      "item": "ends_delight:chorus_fruit_grain"
    },
    {
      "item": "ends_delight:chorus_fruit_milk_tea"
    },
    {
      "item": "ends_delight:chorus_cookie"
    },
    {
      "item": "ends_delight:stuffed_rice_cake"
    },
    {
      "item": "ends_delight:enderman_gristle"
    },
    {
      "item": "ends_delight:bubble_tea"
    },
    {
      "item": "ends_delight:chorus_fruit_wine"
    },
    {
      "item": "ends_delight:dragon_breath_soda"
    },
    {
      "item": "ends_delight:chorus_flower_tea"
    },
    {
      "item": "ends_delight:chorus_fruit_pie"
    },
    {
      "item": "ends_delight:chorus_fruit_pie_slice"
    },
    {
      "item": "ends_delight:dragon_breath_and_chorus_soup"
    },
    {
      "item": "ends_delight:end_mixed_salad"
    },
    {
      "item": "ends_delight:assorted_salad"
    },
    {
      "item": "farmersdelight:fried_egg"
    },
    {
      "item": "farmersdelight:milk_bottle"
    },
    {
      "item": "farmersdelight:hot_cocoa"
    },
    {
      "item": "farmersdelight:apple_cider"
    },
    {
      "item": "farmersdelight:melon_juice"
    },
    {
      "item": "farmersdelight:tomato_sauce"
    },
    {
      "item": "farmersdelight:cabbage_leaf"
    },
    {
      "item": "farmersdelight:apple_pie"
    },
    {
      "item": "farmersdelight:sweet_berry_cheesecake"
    },
    {
      "item": "farmersdelight:ratatouille"
    },
    {
      "item": "farmersdelight:squid_ink_pasta"
    },
    {
      "item": "farmersdelight:pumpkin_soup"
    },
    {
      "item": "farmersdelight:mushroom_rice"
    },
    {
      "item": "farmersdelight:kelp_roll_slice"
    },
    {
      "item": "farmersdelight:melon_popsicle"
    },
    {
      "item": "farmersdelight:cooked_rice"
    },
    {
      "item": "farmersdelight:vegetable_soup"
    },
    {
      "item": "farmersdelight:glow_berry_custard"
    },
    {
      "item": "farmersdelight:fruit_salad"
    },
    {
      "item": "farmersdelight:egg_sandwich"
    },
    {
      "item": "farmersdelight:cabbage_rolls"
    },
    {
      "item": "farmersdelight:kelp_roll"
    },
    {
      "item": "farmersdelight:stuffed_pumpkin_block"
    },
    {
      "item": "farmersdelight:rice_roll_medley_block"
    },
    {
      "item": "farmersdelight:chocolate_pie"
    },
    {
      "item": "farmersdelight:sweet_berry_cookie"
    },
    {
      "item": "farmersdelight:honey_cookie"
    },
    {
      "item": "farmersdelight:pie_crust"
    },
    {
      "item": "farmersdelight:apple_pie_slice"
    },
    {
      "item": "farmersdelight:nether_salad"
    },
    {
      "item": "farmersdelight:mixed_salad"
    },
    {
      "item": "farmersdelight:pumpkin_slice"
    },
    {
      "item": "farmersdelight:shepherds_pie_block"
    },
    {
      "item": "farmersdelight:fried_rice"
    },
    {
      "item": "fruitsdelight:melon_jello"
    },
    {
      "item": "fruitsdelight:durian_jelly"
    },
    {
      "item": "fruitsdelight:hamimelon_jello"
    },
    {
      "item": "fruitsdelight:cranberry_jelly"
    },
    {
      "item": "fruitsdelight:lemon_jelly"
    },
    {
      "item": "fruitsdelight:pineapple_jelly"
    },
    {
      "item": "fruitsdelight:melon_jelly"
    },
    {
      "item": "fruitsdelight:glowberry_jelly"
    },
    {
      "item": "fruitsdelight:apple_jelly"
    },
    {
      "item": "fruitsdelight:blueberry_jelly"
    },
    {
      "item": "fruitsdelight:orange_jelly"
    },
    {
      "item": "fruitsdelight:hamimelon_jelly"
    },
    {
      "item": "fruitsdelight:glowberry_jello"
    },
    {
      "item": "fruitsdelight:mangosteen_jelly"
    },
    {
      "item": "fruitsdelight:persimmon_jelly"
    },
    {
      "item": "fruitsdelight:pear_jello"
    },
    {
      "item": "fruitsdelight:hawberry_jello"
    },
    {
      "item": "fruitsdelight:fig_jelly"
    },
    {
      "item": "fruitsdelight:peach_jello"
    },
    {
      "item": "fruitsdelight:pineapple_jello"
    },
    {
      "item": "fruitsdelight:hawberry_jelly"
    },
    {
      "item": "fruitsdelight:sweetberry_jelly"
    },
    {
      "item": "fruitsdelight:peach_jelly"
    },
    {
      "item": "fruitsdelight:blueberry_jello"
    },
    {
      "item": "fruitsdelight:kiwi_jelly"
    }
  ])
  addManyShapelessCraftingRecipe('kubejs:super_cake_3',
    [
      {
        "item": "croptopia:chimichanga"
      },
      {
        "item": "croptopia:crema"
      },
      {
        "item": "croptopia:refried_beans"
      },
      {
        "item": "croptopia:burrito"
      },
      {
        "item": "croptopia:churros"
      },
      {
        "item": "croptopia:tres_leche_cake"
      },
      {
        "item": "croptopia:chili_relleno"
      },
      {
        "item": "croptopia:yam_jam"
      },
      {
        "item": "croptopia:banana_cream_pie"
      },
      {
        "item": "croptopia:candy_corn"
      },
      {
        "item": "croptopia:rum_raisin_ice_cream"
      },
      {
        "item": "croptopia:raisin_oatmeal_cookie"
      },
      {
        "item": "croptopia:nutty_cookie"
      },
      {
        "item": "croptopia:tea"
      },
      {
        "item": "croptopia:scones"
      },
      {
        "item": "croptopia:figgy_pudding"
      },
      {
        "item": "croptopia:treacle_tart"
      },
      {
        "item": "croptopia:sticky_toffee_pudding"
      },
      {
        "item": "croptopia:trifle"
      },
      {
        "item": "croptopia:almond_brittle"
      },
      {
        "item": "croptopia:horchata"
      },
      {
        "item": "croptopia:tostada"
      },
      {
        "item": "croptopia:quesadilla"
      },
      {
        "item": "croptopia:avocado_toast"
      },
      {
        "item": "croptopia:ajvar_toast"
      },
      {
        "item": "croptopia:eton_mess"
      },
      {
        "item": "croptopia:shepherds_pie"
      },
      {
        "item": "croptopia:cheesy_asparagus"
      },
      {
        "item": "croptopia:buttered_green_beans"
      },
      {
        "item": "croptopia:ajvar"
      },
      {
        "item": "croptopia:chocolate_ice_cream"
      },
      {
        "item": "cacao:dark_chocolate"
      },
      {
        "item": "cacao:caramel_dark_chocolate"
      },
      {
        "item": "cacao:praline_dark_chocolate"
      },
      {
        "item": "cacao:strawberry_cream_dark_chocolate"
      },
      {
        "item": "cacao:cookie_cream_dark_chocolate"
      },
      {
        "item": "cacao:mixed_nuts_dark_chocolate"
      },
      {
        "item": "cacao:coconut_dark_chocolate"
      },
      {
        "item": "cacao:peanut_butter_dark_chocolate"
      },
      {
        "item": "cacao:milk_chocolate"
      },
      {
        "item": "cacao:white_chips_chocolate_cookie"
      },
      {
        "item": "cacao:milk_chocolate_covered_apple"
      },
      {
        "item": "cacao:mixed_nuts_white_chocolate"
      },
      {
        "item": "cacao:cookie_cream_white_chocolate"
      },
      {
        "item": "cacao:dark_chips_chocolate_cookie"
      },
      {
        "item": "cacao:chocolate_cake"
      },
      {
        "item": "cacao:nutella"
      },
      {
        "item": "cacao:golden_chocolate"
      },
      {
        "item": "cacao:dark_chocolate_covered_apple"
      },
      {
        "item": "cacao:coconut_white_chocolate"
      },
      {
        "item": "cacao:strawberry_cream_white_chocolate"
      },
      {
        "item": "cacao:peanut_butter_milk_chocolate"
      },
      {
        "item": "cacao:cookie_cream_milk_chocolate"
      },
      {
        "item": "cacao:caramel_milk_chocolate"
      },
      {
        "item": "cacao:praline_milk_chocolate"
      },
      {
        "item": "cacao:coconut_milk_chocolate"
      },
      {
        "item": "cacao:mixed_nuts_milk_chocolate"
      },
      {
        "item": "frycooks_delight:fried_onion_ring"
      },
      {
        "item": "frycooks_delight:fried_potato"
      },
      {
        "item": "frycooks_delight:plain_donut"
      },
      {
        "item": "cacao:white_chips_cookie"
      },
      {
        "item": "cacao:white_chocolate_covered_apple"
      },
      {
        "item": "cacao:peanut_butter_white_chocolate"
      },
      {
        "item": "cacao:praline_white_chocolate"
      },
      {
        "item": "cacao:caramel_white_chocolate"
      },
      {
        "item": "cacao:white_chocolate"
      },
      {
        "item": "cacao:strawberry_cream_milk_chocolate"
      },
      {
        "item": "cuisinedelight:suspicious_mix"
      },
      {
        "item": "cuisinedelight:fried_rice"
      },
      {
        "item": "cuisinedelight:mixed_fried_rice"
      },
      {
        "item": "cuisinedelight:fried_pasta"
      },
      {
        "item": "cuisinedelight:mixed_pasta"
      },
      {
        "item": "cuisinedelight:vegetable_fried_rice"
      },
      {
        "item": "cuisinedelight:vegetable_pasta"
      },
      {
        "item": "cuisinedelight:vegetable_platter"
      },
      {
        "item": "cuisinedelight:fried_mushroom"
      },
      {
        "item": "ends_delight:ender_sausage"
      },
      {
        "item": "ends_delight:ender_bamboo_rice"
      },
      {
        "item": "ends_delight:chorus_sauce"
      },
      {
        "item": "cuisinedelight:scrambled_egg_and_tomato"
      },
      {
        "item": "ends_delight:chorus_fruit_popsicle"
      }
    ])
  addManyShapelessCraftingRecipe('kubejs:super_cake_4', [
    {
      "item": "fruitsdelight:lychee_jello"
    },
    {
      "item": "fruitsdelight:mango_jelly"
    },
    {
      "item": "fruitsdelight:lychee_jelly"
    },
    {
      "item": "fruitsdelight:apple_jello"
    },
    {
      "item": "fruitsdelight:bayberry_jelly"
    },
    {
      "item": "fruitsdelight:chorus_jelly"
    },
    {
      "item": "fruitsdelight:pear_jelly"
    },
    {
      "item": "fruitsdelight:orange_jello"
    },
    {
      "item": "fruitsdelight:mango_jello"
    },
    {
      "item": "fruitsdelight:lemon_jello"
    },
    {
      "item": "fruitsdelight:persimmon_jello"
    },
    {
      "item": "fruitsdelight:hawberry_roll"
    },
    {
      "item": "fruitsdelight:blueberry_custard"
    },
    {
      "item": "fruitsdelight:bellini_cocktail"
    },
    {
      "item": "fruitsdelight:lemon_juice"
    },
    {
      "item": "fruitsdelight:pear_juice"
    },
    {
      "item": "fruitsdelight:bayberry_jello"
    },
    {
      "item": "fruitsdelight:chorus_jello"
    },
    {
      "item": "fruitsdelight:cranberry_jello"
    },
    {
      "item": "fruitsdelight:pineapple_jello"
    },
    {
      "item": "fruitsdelight:mangosteen_jello"
    },
    {
      "item": "fruitsdelight:fig_jello"
    },
    {
      "item": "fruitsdelight:hawberry_tea"
    },
    {
      "item": "fruitsdelight:hawberry_sheet"
    },
    {
      "item": "fruitsdelight:kiwi_popsicle"
    },
    {
      "item": "fruitsdelight:cranberry_muffin"
    },
    {
      "item": "fruitsdelight:lychee_cherry_tea"
    },
    {
      "item": "fruitsdelight:peach_tea"
    },
    {
      "item": "fruitsdelight:hamimelon_shaved_ice"
    },
    {
      "item": "fruitsdelight:blueberry_muffin"
    },
    {
      "item": "fruitsdelight:kiwi_juice"
    },
    {
      "item": "fruitsdelight:mango_tea"
    },
    {
      "item": "fruitsdelight:orange_juice"
    },
    {
      "item": "fruitsdelight:kiwi_jello"
    },
    {
      "item": "fruitsdelight:sweetberry_jello"
    },
    {
      "item": "fruitsdelight:durian_jello"
    },
    {
      "item": "fruitsdelight:mangosteen_tea"
    },
    {
      "item": "fruitsdelight:hamimelon_juice"
    },
    {
      "item": "fruitsdelight:lemon_slice"
    },
    {
      "item": "fruitsdelight:hawberry_stick"
    },
    {
      "item": "fruitsdelight:durian_flesh"
    },
    {
      "item": "fruitsdelight:baked_pear"
    },
    {
      "item": "fruitsdelight:orange_slice"
    },
    {
      "item": "fruitsdelight:hamimelon_popsicle"
    },
    {
      "item": "fruitsdelight:fig_pudding_slice"
    },
    {
      "item": "fruitsdelight:bayberry_soup"
    },
    {
      "item": "fruitsdelight:cranberry_cookie"
    },
    {
      "item": "fruitsdelight:mango_salad"
    },
    {
      "item": "fruitsdelight:lemon_tart"
    },
    {
      "item": "fruitsdelight:pineapple_pie"
    },
    {
      "item": "fruitsdelight:baked_durian"
    },
    {
      "item": "fruitsdelight:fig_tart"
    },
    {
      "item": "fruitsdelight:durian_pie"
    },
    {
      "item": "fruitsdelight:bayberry_cookie"
    },
    {
      "item": "fruitsdelight:dried_persimmon"
    },
    {
      "item": "fruitsdelight:pineapple_fried_rice"
    },
    {
      "item": "fruitsdelight:fig_pudding"
    },
    {
      "item": "fruitsdelight:mangosteen_cake"
    },
    {
      "item": "fruitsdelight:persimmon_cookie"
    },
    {
      "item": "fruitsdelight:mango_milkshake"
    },
    {
      "item": "fruitsdelight:lemon_cookie"
    },
    {
      "item": "fruitsdelight:jelly_bread",
    },
    {
      "item": "fruitsdelight:pear_with_rock_sugar"
    },
    {
      "item": "tfc:food/oat_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/oat_bread_sandwich"
    },
    {
      "item": "tfc:food/barley_bread_sandwich"
    },
    {
      "item": "tfc:food/barley_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/maize_bread"
    },
    {
      "item": "tfc:food/maize_bread_sandwich"
    },
    {
      "item": "tfc:food/maize_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/oat_bread"
    },
    {
      "item": "tfc:food/barley_bread"
    },
    {
      "item": "tfc:food/rye_bread_sandwich"
    },
    {
      "item": "tfc:food/rye_bread_jam_sandwich"
    },
    {
      "item": "tfc:food/rice_bread"
    },
    {
      "item": "tfc:food/wheat_bread"
    },
    {
      "item": "tfc:food/wheat_bread_sandwich"
    },
    {
      "item": "tfc:food/wheat_bread_jam_sandwich"
    },
    {
      "item": "tfc:jar/blackberry_unsealed"
    },
    {
      "item": "tfc:jar/blueberry_unsealed"
    },
    {
      "item": "tfc:jar/bunchberry_unsealed"
    }
  ])
  addManyShapelessCraftingRecipe('kubejs:super_cake_5', [
    {
      "item": "vinery:clark_wine",

    },
    {
      "item": "vinery:apple_cider",

    },
    {
      "item": "vinery:bolvar_wine",

    },
    {
      "item": "vinery:stal_wine",

    },
    {
      "item": "vinery:chorus_wine",

    },
    {
      "item": "vinery:lilitu_wine",

    },
    {
      "item": "vinery:magnetic_wine",

    },
    {
      "item": "vinery:solaris_wine",

    },
    {
      "item": "vinery:strad_wine",

    },
    {
      "item": "vintagedelight:glow_berry_jam_bottle"
    },
    {
      "item": "vintagedelight:sweet_berry_jam_bottle"
    },
    {
      "item": "vintagedelight:relish_mason_jar"
    },
    {
      "item": "vintagedelight:pepper_jam_mason_jar"
    },
    {
      "item": "vinery:apple_mash"
    },
    {
      "item": "vinery:wine_bottle"
    },
    {
      "item": "vinery:creepers_crush",

    },
    {
      "item": "vinery:jo_special_mixture",

    },
    {
      "item": "vinery:red_wine",

    },
    {
      "item": "vinery:knulp_wine",

    },
    {
      "item": "vinery:eiswein",

    },
    {
      "item": "vinery:villagers_fright",

    },
    {
      "item": "vintagedelight:nut_mash_mason_jar"
    },
    {
      "item": "vintagedelight:glow_berry_mason_jar"
    },
    {
      "item": "vinery:lamroc_wine",

    },
    {
      "item": "vintagedelight:cheese_wheel"
    },
    {
      "item": "vintagedelight:pepper_jam_bottle"
    },
    {
      "item": "vintagedelight:gearo_berry_jam_bottle"
    },
    {
      "item": "vintagedelight:ghostly_chili"
    },
    {
      "item": "vintagedelight:cheese_pizza"
    },
    {
      "item": "vintagedelight:relish_bottle"
    },
    {
      "item": "vintagedelight:apple_sauce_bottle"
    },
    {
      "item": "vintagedelight:honey_mason_jar"
    },
    {
      "item": "vintagedelight:sweet_berry_mason_jar"
    },
    {
      "item": "vinery:count_roleester_shiraz",

    },
    {
      "item": "vinery:bottle_mojang_noir",

    },
    {
      "item": "vinery:glowing_wine",

    },
    {
      "item": "vinery:mead",

    },
    {
      "item": "vintagedelight:apple_sauce_mason_jar"
    },
    {
      "item": "vintagedelight:nut_milk_bottle"
    },
    {
      "item": "vintagedelight:vinegar_mason_jar"
    },
    {
      "item": "vintagedelight:gearo_berry_mason_jar"
    },
    {
      "item": "vintagedelight:pickle_soup"
    },
    {
      "item": "vintagedelight:vinegar_bottle"
    },
    {
      "item": "vintagedelight:nut_mash_bottle"
    },
    {
      "item": "vintagedelight:cheese_pasta"
    }
  ])
  addManyShapelessCraftingRecipe('avaritia:endless_cake', [
    {
      "item": "kubejs:super_cake_5"
    },
    {
      "item": "kubejs:super_cake_4"
    },
    {
      "item": "kubejs:super_cake_3"
    },
    {
      "item": "kubejs:super_cake_2"
    },
    {
      "item": "kubejs:super_cake_1"
    },
    {
      "item": "kubejs:super_cake_0"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    }
  ]
  )

  interface GTProcessInput {
    inputItem?: InputItem_[]
    outputItem?: OutputItem_[]
    inputFluid?: Fluid_[]
    outputFluid?: Fluid_[]
  }
  // 魔力钢
  const gtProcess = (mode: keyof typeof recipes.gtceu, c: GTProcessInput) => {
    let id = 'kjs_'
    for (let index = 0; index < 10; index++) {
      id += Math.random().toString().substring(2)
    }
    const ip = c.inputItem ? c.inputItem : []
    const op = c.outputItem ? c.outputItem : []
    const _if = c.inputFluid ? c.inputFluid : []
    const _of = c.outputFluid ? c.outputFluid : []
    return recipes.gtceu[mode](id).duration(300).EUt(GTValues.VA[GTValues.UHV])
    ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])'](...ip)
    ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](...op)
    ['inputFluids'](..._if)
    ['outputFluids'](..._of)
  }

  gtProcess('')

})
const AmmoOf = (name: string, count?: number) => Item.of('tacz:ammo', count ?? 0, { AmmoId: name })
ServerEvents.recipes(({ recipes: rp }) => {
  const incompleteAmmoItem = Item.of('kubejs:incomplete_ammo')
  rp.create.sequenced_assembly([AmmoOf('emxmors:1045x102fmj', 15)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/nethersteel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/tin']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:1045x102fmj', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:1045x103', 15)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:1045x103', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:1045x103belt', 15)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:1045x103belt', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:410x57ap', 15)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:ingots/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:410x57ap', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:1045x103ap', 15)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'avaritia:neutron_nugget']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:1045x103ap', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:60x10ap', 10)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'avaritia:neutron_nugget']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:60x10ap', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:308x103ap', 10)], '#forge:plates/osmium', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:308x103ap', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:762x39mm', 15)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:762x39mm', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:339x57', 15)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:339x57', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:339x57fmj', 15)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:339x57fmj', 15)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:339x57x', 10)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'createbigcannons:he_shell']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/advanced']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:339x57x', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:402x31', 20)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'create:crushed_raw_osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:402x31', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:402x31fmj', 20)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:rods/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:402x31fmj', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:402x31rip', 20)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:ingots/black_steel']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:402x31rip', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxmors:ace_ammo', 20)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:ingots/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxmors:ace_ammo', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:x16sg', 10)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'create:crushed_raw_osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:dusts/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/tin']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:x16sg', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('emxarms:x16he', 10)], '#forge:plates/tin', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:ingots/osmium']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/tin']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:circuits/basic']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'tfcorewashing:briquet_magnetite']),
    rp.vintageimprovements.laser_cutting([incompleteAmmoItem], [incompleteAmmoItem], 2000),
    rp.create.pressing([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 3),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('emxarms:x16he', 10)]).loops(1)

  rp.minecraft.crafting_shapeless(AmmoOf('emxmors:lwt_arrow', 5), [
    '#forge:rods/black_steel',
    '#forge:circuits/basic'
  ])

  rp.minecraft.crafting_shapeless(AmmoOf('emxarms:emx_tediore', 5), [
    '#c:emeralds',
    '#createbigcannons:gelatinizers'
  ])
})