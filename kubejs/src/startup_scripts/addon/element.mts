const aluminium_chloride = 'aluminium_chloride'
const dodecane = 'dodecane'
const dodecylbenzene = 'dodecylbenzene'
const neutrino = 'neutrino_cluster'
const Nt = 'null_element'
GTCEuStartupEvents.registry('gtceu:material', e => {
  // 三氯化铝
  ; (e.create as any)(aluminium_chloride)
    .color(0xececec)
    .secondaryColor(0x9c9c9c)
    .dust()
  ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(293))
    .iconSet(GTMaterialIconSet.DULL)
    .components(`1x ${GTMaterials.Aluminium.getName()}`, `3x ${GTMaterials.Chlorine.getName()}`)
    // 十二烷
    ; (e.create as any)(dodecane)
      .color(0xdddd00)
      .secondaryColor(0x999910)
      .liquid()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(293))
      .iconSet(GTMaterialIconSet.DULL)
      .components(`12x ${GTMaterials.Carbon.getName()}`, `26x ${GTMaterials.Hydrogen.getName()}`)

    // 十二烷基苯
    ; (e.create as any)(dodecylbenzene)
      .color(0xffffe0)
      .secondaryColor(0xfffea0)
      .liquid()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(293))
      .iconSet(GTMaterialIconSet.DULL)
      .components(`18x ${GTMaterials.Carbon.getName()}`, `30x ${GTMaterials.Hydrogen.getName()}`)

    // 中微子集群
    ; (e.create as any)(neutrino)
      .color(0x444444)
      .secondaryColor(0x555555)
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(114514))
      .iconSet(GTMaterialIconSet.METALLIC)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .element(GTElements.get(neutrino))
      .cableProperties(GTValues.V[GTValues.UXV], 4096, 1, false)
      .fluidPipeProperties(200000, 40000, true, true, true, true)

    // 负质量中子集群
    ; (e.create as any)(Nt)
      .color(0x444444)
      .secondaryColor(0x555555)
      .iconSet(GTMaterialIconSet.METALLIC)
      .gas()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(114514))
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .cableProperties(GTValues.V[GTValues.OpV], 4096, 1, false)
      .element(GTElements.get(Nt))
      .fluidPipeProperties(4000000, 80000, true, true, true, true)

  GTMaterials.get('infinity').addFlags(
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_FRAME,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_SPRING
  )
    // 聚合中子素
    ; (e.create('super_neutrino') as any)
      .color(0x333333)
      .secondaryColor(0x444444)
      .element(GTElements.get('super_neutrino'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.METALLIC)
    // 压缩中子素
    ; (e.create('very_super_neutrino') as any)
      .color(0x222222)
      .secondaryColor(0x333333)
      .element(GTElements.get('very_super_neutrino'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.METALLIC)
    // 聚合中子素
    ; (e.create('perfection_super_neutrino') as any)
      .color(0x111111)
      .secondaryColor(0x222222)
      .element(GTElements.get('perfection_super_neutrino'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.METALLIC)
    // 中子素奇点
    ; (e.create('acme_super_neutrino') as any)
      .color(0x000000)
      .secondaryColor(0x111111)
      .element(GTElements.get('acme_super_neutrino'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.METALLIC)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )

    // 梦幻
    ; (e.create('dream') as any)
      .color(0x663399)
      .secondaryColor(0x993366)
      .element(GTElements.get('dream'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.METALLIC)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .cableProperties(GTValues.V[GTValues.MAX], 4096, 1, false)

    // 龙
    ; (e.create('base_dragon') as any)
      .color(0x9933FF)
      .secondaryColor(0x8822ee)
      .element(GTElements.get('base_dragon'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(114514))
      .iconSet(GTMaterialIconSet.DULL)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .cableProperties(GTValues.V[GTValues.UEV], 4096, 1, false)


    // 高注能魔源
    ; (e.create('super_mana') as any)
      .color(0x2299ee)
      .secondaryColor(0x1199ee)
      .element(GTElements.get('super_mana'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(114514))
      .iconSet(GTMaterialIconSet.DULL)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .cableProperties(GTValues.V[GTValues.UIV], 4096, 1, false)

    // 聚合觉醒龙
    ; (e.create('super_dragon') as any)
      .color(0xFF9900)
      .secondaryColor(0xEE9900)
      .element(GTElements.get('super_dragon'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.DULL)
    // 压缩觉醒龙
    ; (e.create('very_super_dragon') as any)
      .color(0xEE9900)
      .secondaryColor(0xDD9900)
      .element(GTElements.get('very_super_dragon'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.DULL)
    // 聚合觉醒龙
    ; (e.create('perfection_super_dragon') as any)
      .color(0xDD9900)
      .secondaryColor(0xCC9900)
      .element(GTElements.get('perfection_super_dragon'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.DULL)
    // 觉醒龙奇点
    ; (e.create('acme_super_dragon') as any)
      .color(0xBB8800)
      .secondaryColor(0xAA7700)
      .element(GTElements.get('acme_super_dragon'))
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1919810))
      .iconSet(GTMaterialIconSet.DULL)

    // 氟化铟
    ; (e.create as any)('indium_trifluoride')
      .color(0x9933CC)
      .secondaryColor(0x663399)
      .ingot()
      .iconSet(GTMaterialIconSet.METALLIC)
      .components(`1x ${GTMaterials.Indium.getName()}`, `3x ${GTMaterials.Fluorine.getName()}`)


    // 磁化泰拉钢
    // ; (e.create as any)('magnetic_terra_steel')
    //   .ingot()
    //   .color(0x44ef16).secondaryColor(0x44af16)
    //   .iconSet(GTMaterialIconSet.MAGNETIC)
    //   .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)
    //   .components('1x terra_steel')
    //   .ingotSmeltInto('terra_steel')
    //   .arcSmeltInto('terra_steel')
    //   .macerateInto('terra_steel')

    // 生命树钢
    ; (e.create as any)('life_tree')
      .color(0x444444)
      .secondaryColor(0x555555)
      .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(114514))
      .iconSet(GTMaterialIconSet.MAGNETIC)
      .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING
      )
      .element(GTElements.get('life_tree'))

    // 磁化生命树钢
    ; (e.create as any)('magnetic_life_steel')
      .ingot()
      .color(0x44ffff).secondaryColor(0x44dddd)
      .iconSet(GTMaterialIconSet.MAGNETIC)
      .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)
      .components('1x life_tree')
      .ingotSmeltInto('life_tree')
      .arcSmeltInto('life_tree')
      .macerateInto('life_tree')
})

GTCEuStartupEvents.registry('gtceu:element', e => {
  // 参数1：名称 - string
  // 参数2：质子数量 - number
  // 参数3：中子数量 - number
  // 参数4：半衰期（秒）- number - 设为 -1 时没有半衰期
  // 参数5：衰变后的元素 - string | null
  // 参数6：符号 - string
  // 参数7：是否为同位素 - boolean
  e.create('europium_155', 63, 155, 7012, 'europium', 'Eu', true)
  e.create('protactinium_233', 91, 155, 3744, 'protactinium', 'Pa', true)
  e.create('strontium_90', 38, 90, 12069, 'strontium', 'Sr', true)
  e.create('ruthenium_106', 44, 62, 3718, 'rhodium', 'Ru', true)
  e.create('caesium_137', 55, 82, 3017, 'barium', 'Cs', true)
  e.create('promethium_147', 61, 86, 2623, 'samarium', 'Pm', true)
  e.create(Nt, 0, 1, 611, GTElements.H.name(), 'Un', false)
  e.create(neutrino, 0, 0, -1, null, 'ν', false)
  e.create('super_neutrino', 0, 1000, -1, null, 'Nt+', false)
  e.create('very_super_neutrino', 0, 10000, -1, null, 'Nt*', false)
  e.create('perfection_super_neutrino', 0, 100000, -1, null, 'Nt~', false)
  e.create('acme_super_neutrino', 0, 1000000, -1, null, 'Nt^', false)
  e.create('dream', 1000000, 1000000, -1, null, '[Î®´åµ]', false)

  e.create('base_dragon', 0, 1, -1, null, 'Bdg', false)
  e.create('super_mana', 0, 1, -1, null, 'Sm', false)
  e.create('life_tree', 0, 1, -1, null, 'Lft', false)

  e.create('super_dragon', 0, 1, -1, null, 'Dg+', false)
  e.create('very_super_dragon', 0, 1, -1, null, 'Dg*', false)
  e.create('perfection_super_dragon', 0, 1, -1, null, 'Dg~', false)
  e.create('acme_super_dragon', 0, 1, -1, null, 'Dg^', false)
})