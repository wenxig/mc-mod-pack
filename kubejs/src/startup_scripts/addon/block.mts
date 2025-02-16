StartupEvents.registry('block', event => {
  event.create('kubejs:ice_core').material('basic').hardness(5).lightLevel(10).texture('kubejs:ice_core','avaritia:block/resource/crystal_matrix').renderType('translucent')
    .displayName(`§6凛冰奇点` as any)
})

StartupEvents.registry('block', e => {
  e.create('infinity_coil_block', 'gtceu:coil')
    .temperature(1919810) // 温度
    .level(1919810) // 工业熔炉的最大并行数量 = 此数值 * 32
    .energyDiscount(GTValues.MAX) // 能量效率
    .tier(8) // 等级
    .coilMaterial(GTMaterials.get('infinity') as any) // 材料
    .tagBlock('forge:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
    .texture('inf_coil', 'kubejs:block/coils/inf') // 设定方块的纹理
    .displayName('无尽线圈方块' as any)


  e.create('neutrino_coil_block', 'gtceu:coil')
    .temperature(114514) // 温度
    .level(114514) // 工业熔炉的最大并行数量 = 此数值 * 32
    .energyDiscount(GTValues.MAX) // 能量效率
    .tier(GTValues.UIV) // 等级
    .coilMaterial(GTMaterials.get('neutrino') as any) // 材料
    .tagBlock('forge:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
    .texture('nu_coil', 'kubejs:block/coils/nu') // 设定方块的纹理
    .displayName('中微子集群线圈方块' as any)

})