// priority: 0

ServerEvents.recipes(event => {
  const { recipes } = event
  const addManyShapeCraftingRecipe = ((arg1, arg2, arg3) => {
    //@ts-ignore
    recipes.extendedcrafting.shaped_table(arg1, arg2, arg3)
    //@ts-ignore
    recipes.create.mechanical_crafting(arg1, arg2, arg3)

  }) as (typeof recipes.extendedcrafting.shaped_table)

  // mek-聚变控制器
  event.remove({ id: 'mekanismgenerators:reactor/controller' })
  addManyShapeCraftingRecipe('mekanismgenerators:fusion_reactor_controller', [
    ' EEDEE ',
    'EECBCEE',
    'ECFGFCE',
    'DBGAGBD',
    'ECFGFCE',
    'EECBCEE',
    ' EEDEE ',
  ], {
    A: 'avaritia:star_fuel',
    B: 'draconicevolution:reactor_core',
    C: 'avaritia:neutron_gear',
    D: 'draconicevolution:reactor_injector',
    E: 'draconicevolution:reactor_stabilizer',
    F: 'draconicevolution:energy_core',
    G: 'fluxnetworks:flux_core'
  })


  // kubejs-能量奇点核心容器
  recipes.gtceu.assembly_line('kubejs:ene_core_box').EUt(GTValues.VA[GTValues.UHV])
    .itemInputs(
      Item.of('gtceu:uhv_ultimate_battery', 32),
      Item.of('gtceu:uhv_ultimate_battery', 32),

      Item.of('gtceu:uhv_ultimate_battery', 32),
      Item.of('gtceu:uhv_ultimate_battery', 32),
      Item.of('fluxnetworks:flux_block', 32),
      Item.of('fluxnetworks:flux_block', 32),

      Item.of('gtceu:wetware_processor_mainframe', 64),
      Item.of('gtceu:wetware_processor_mainframe', 64),
      Item.of('gtceu:uv_field_generator', 64),
      Item.of('gtceu:gravitation_engine_unit', 64),

      Item.of('gtceu:polyphenylene_sulfide_foil', 64),
      Item.of('gtceu:polybenzimidazole_foil', 64),
      Item.of('gtceu:uv_fusion_reactor', 32),
      Item.of('gtceu:uv_fusion_reactor', 32),
    ).inputFluids(
      (Fluid.of('gtceu:maraging_steel_300', 2000) as any),
      Fluid.of('gtceu:infinity', 2000) as any
    ).itemOutputs(Item.of('kubejs:ene_core_box') as any).duration(100000)

  // kubejs-能量奇点核心
  recipes.gtceu.kubejs_ene_injecting('kubejs:ene_core').EUt(GTValues.VA[GTValues.MAX])
    .itemInputs(Item.of('kubejs:ene_core_box'))
    .itemOutputs(Item.of('kubejs:ene_core') as any)
    .duration(Number.MAX_SAFE_INTEGER)

  // kubejs-super_cpu
  addManyShapeCraftingRecipe('kubejs:super_cpu', [
    '  E  ',
    ' ABD ',
    'ABCBD',
    ' ABD ',
    '  F  '
  ], {
    A: 'kubejs:super_cpu_store',
    B: 'kubejs:super_cpu_line',
    C: 'kubejs:super_cpu_core',
    D: 'kubejs:super_cpu_memory',
    E: 'kubejs:super_cpu_ice',
    F: 'kubejs:super_cpu_interface'
  })

  // mek-聚变堆红石端口
  event.remove({ id: 'mekanismgenerators:reactor/logic_adapter' })
  addManyShapeCraftingRecipe('mekanismgenerators:fusion_reactor_logic_adapter', [
    ' BCB ',
    'BEDEB',
    'BDEDB',
    'BEAEB',
    'BDADB',
    'BEAEB',
    'BAAAB',
    'BDBDB',
    'BCDCB'
  ], {
    A: 'kubejs:super_cpu',
    B: 'mekanismgenerators:fusion_reactor_frame',
    C: 'mekanismgenerators:fusion_reactor_port',
    D: '#gtceu:circuits/uv',
    E: 'oc2r:redstone_interface_card'
  })

  // mek-聚变堆框架
  event.remove({ id: 'mekanismgenerators:reactor/frame' })
  addManyShapeCraftingRecipe('mekanismgenerators:fusion_reactor_frame', [
    'AAAAAA',
    'ABCCBA',
    'ACDDCA',
    'ACEECA',
    'ABCCBA',
    'AAAAAA'
  ], {
    A: 'avaritia:neutron_ingot',
    B: 'draconicevolution:reactor_stabilizer',
    C: 'gtceu:uhv_ultimate_battery',
    D: 'draconicevolution:reactor_injector',
    E: 'fluxnetworks:flux_block'
  })

  // mek-强化玻璃
  event.remove({ id: 'mekanismgenerators:reactor/glass' })
  addManyShapeCraftingRecipe('mekanismgenerators:reactor_glass', [
    'AAAA',
    'ACCA',
    'ABBA',
    'BDDB',
    'BDDB',
    'ABBA',
    'ACCA',
    'AAAA'
  ], {
    A: 'mekanismgenerators:fusion_reactor_frame',
    B: 'mekanism:structural_glass',
    C: 'industrialforegoing:laser_lens7',
    D: 'avaritia:neutron'
  })

  // mek:激光聚焦矩阵
  event.remove({ id: 'mekanismgenerators:laser_focus_matrix' })
  addManyShapeCraftingRecipe('mekanismgenerators:laser_focus_matrix', [
    'FAAAAAAAF',
    'ABCBBBCBA',
    'ACBBBBBCA',
    'ABBBEBBBA',
    'ABBEDEBBA',
    'ABBBEBBBA',
    'ACBBBBBCA',
    'ABCBBBCBA',
    'FAAAAAAAF',
  ], {
    A: 'mekanismgenerators:fusion_reactor_frame',
    B: 'mekanismgenerators:reactor_glass',
    C: 'kubejs:super_graphite_electrond',
    D: 'avaritia:infinity_nugget',
    E: 'kubejs:super_tanhuang',
    F: 'draconicevolution:reactor_core',
  })

  // mek-聚变反应堆端口
  event.remove({ id: 'mekanismgenerators:reactor/port' })
  addManyShapeCraftingRecipe('mekanismgenerators:fusion_reactor_port', [
    ' AAA ',
    'AAAAA',
    'ACBCA',
    'DBCBD',
    'BCCCB',
    'DEEED',
    'DEEED',
    'DDADD'
  ], {
    A: 'draconicevolution:reactor_injector',
    B: 'mekanism_extras:infinite_induction_cell',
    C: 'mekanism_extras:infinite_induction_provider',
    D: 'mekanismgenerators:fusion_reactor_frame',
    E: 'kubejs:super_cpu'
  })
    // kubejs-高性能弹簧
    ; (() => {
      const canRecpesItems = new Array<InputItem_>()
      event.forEachRecipe({ output: '#vintageimprovements:small_springs' }, (v) => {
        const str: string = v.outputValues()[0].value[0].toString()
        const resultString = str.match(/(\w|\:)+(?='\])/ig)![0] as InputItem_
        console.log(`resultString: ${resultString}`)
        canRecpesItems.push(resultString)
      })
      event.forEachRecipe({ output: '#vintageimprovements:springs' }, (v) => {
        const str: string = v.outputValues()[0].value[0].toString()
        const resultString = str.match(/(\w|\:)+(?='\])/ig)![0] as InputItem_
        console.log(`resultString: ${resultString}`)
        canRecpesItems.push(resultString)
      })
      recipes.extendedcrafting.shapeless_table('kubejs:super_tanhuang', canRecpesItems)
    })()

  // kubejs-"天枢"负质量立体存储单元

  // kubejs-"天枢"超质量立体内存单元

  // kubejs-"天枢"凛冰奇点稳态单元

  // kubejs-"天枢"时间膨胀交互接口

  // 游离式筛选模块
  recipes.gtceu.kubejs_creating_star('kubejs_creating_star')
    .CWUt((2 ** 31) - 1)
    .EUt(GTValues.VA[GTValues.OpV])
    .duration(20 * 30)
    .notConsumable('ad_astra:moon_globe')
    .inputFluids(Fluid.of('gtceu:neutronium', 100) as any)
  ['outputItems(com.gregtechceu.gtceu.integration.kjs.recipe.components.ExtendedOutputItem[])'](
    // (Item.of('ad_astra:moon_stone', 32) as any),
    // (Item.of('ad_astra:cheese', 32) as any),
    // (Item.of('ad_astra:ice_shard', 32) as any),
    // (Item.of('ad_astra:desh_ingot', 32) as any),
    (Item.of('minecraft:iron_ingot', 32) as any),
    (Item.of('minecraft:soul_sand', 32) as any),
  )
    .outputFluids(
      Fluid.of('minecraft:lava', 64000),
      Fluid.of('gtceu:hydrogen', 100),
      Fluid.of('gtceu:ender_air', 64000)
    )
    .chancedFluidOutput(Fluid.of('gtceu:infinity', 100), 20, 0)


  event.remove({ id: 'avaritia:record_fragment' })
  recipes.minecraft.crafting_shaped(Item.of('avaritia:record_fragment', 5), [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'avaritia:infinity_catalyst',
    B: '#minecraft:music_discs'
  })

  // 无尽贪婪-无尽催化剂
  addManyShapeCraftingRecipe('avaritia:infinity_catalyst', [
    "ABCCDCCBA",
    "BCCDBDCCB",
    "CCBEDEBCC",
    "CDEEDEEDC",
    "DBDDFDDBD",
    "CDEEDEEDC",
    "CCBEDEBCC",
    "BCCDBDCCB",
    "ABCCDCCBA"
  ], {
    "A": "avaritia:endest_pearl",
    "B": "draconicevolution:chaotic_staff",
    "C": "avaritia:neutron",
    "D": "avaritia:infinity",
    "E": "avaritia:ultimate_stew",
    "F": "kubejs:ene_core"
  })

  event.remove({ id: 'minecraft:infinity' })
  recipes.minecraft.crafting_shapeless('avaritia:infinity', [
    '#forge:ingots/infinity', '#forge:ingots/infinity', '#forge:ingots/infinity',
    '#forge:ingots/infinity', '#forge:ingots/infinity', '#forge:ingots/infinity',
    '#forge:ingots/infinity', '#forge:ingots/infinity', '#forge:ingots/infinity'
  ])

  event.remove({ id: 'avaritia:infinity_ingot' })
  recipes.minecraft.crafting_shapeless('avaritia:infinity_ingot', [
    'avaritia:infinity_nugget', 'avaritia:infinity_nugget', 'avaritia:infinity_nugget',
    'avaritia:infinity_nugget', 'avaritia:infinity_nugget', 'avaritia:infinity_nugget',
    'avaritia:infinity_nugget', 'avaritia:infinity_nugget', 'avaritia:infinity_nugget'
  ])

  addManyShapeCraftingRecipe('avaritia:infinity_nugget', [
    "    AB   ",
    "   AABB  ",
    "  AAABB  ",
    "  AAABBB ",
    " AAAABBB ",
    " AAAABBB ",
    " AAABBBB ",
    "  ABBBB  ",
    "   BBB   "
  ], {
    "A": "extendedcrafting:ultimate_singularity",
    "B": "avaritia:eternal_singularity"
  })
})
ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:ae2_creative_energy_cell' })
  event.remove({ id: 'avaritia:de_creative_capacitor' })
  event.remove({ id: 'avaritia:de_creative_op_capacitor' })


})