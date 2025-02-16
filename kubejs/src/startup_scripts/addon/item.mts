// priority: 0
const ae2Processor = ['logic', 'engineering', 'calculation'] as const
const ae2ProcessorName = ['逻辑', '工程师', '运算'] as const
StartupEvents.registry('item', event => {


  event.create('kubejs:ene_core').texture('kubejs:item/ene_core')
    .displayName(`§6能量奇点核心` as any)
  event.create('kubejs:ene_core_box').texture('kubejs:item/ene_core_box')
    .displayName(`§5能量奇点核心容器` as any)


  event.create('kubejs:super_tanhuang').texture('kubejs:item/super_tanhuang')
    .displayName(`§5可变幅支撑立场` as any)
  event.create('kubejs:super_graphite_electrond').texture('kubejs:item/super_graphite_electrond')
    .displayName(`§5高效应控制总成` as any)


  for (let index = 0; index < 2; index++) {
    event.create(`kubejs:huanyurouwan_${index}`).texture('kubejs:item/meet_round_part')
      .displayName(`寰宇肉丸-其${index + 1}` as any)
  }

  for (let index = 0; index < 6; index++) {
    event.create(`kubejs:super_cake_${index}`).texture('kubejs:item/super_cake_part')
      .displayName(`贪婪蛋糕片-其${index + 1}` as any)
  }

  event.create('kubejs:super_cpu').texture('kubejs:item/cpu_core')
    .displayName(`§c"天枢"四维混沌演算系统` as any)
  event.create('kubejs:super_cpu_store').texture('kubejs:item/cpu_part')
    .displayName(`§6"质量低谷"负质量立体存储单元` as any)
  event.create('kubejs:super_cpu_line').texture('kubejs:item/cpu_part')
    .displayName(`§6"涌现"结果预知通信总线` as any)
  event.create('kubejs:super_cpu_core').texture('kubejs:item/cpu_part')
    .displayName(`§6"共轭复数"零点时间空洞` as any)
  event.create('kubejs:super_cpu_memory').texture('kubejs:item/cpu_part')
    .displayName(`§6"质量峰谷"超质量立体内存单元` as any)
  event.create('kubejs:super_cpu_ice').texture('kubejs:item/cpu_part')
    .displayName(`§6"南极洲"凛冰奇点稳态单元` as any)
  event.create('kubejs:super_cpu_interface').texture('kubejs:item/cpu_part')
    .displayName(`§6"创世神"时间膨胀交互接口` as any)


  event.create('kubejs:incomplete_ammo').texture('immersiveengineering:item/bullet_empty_casing')
    .displayName('未完成的子弹' as any)
  for (const key of ae2Processor) {
    event.create(`kubejs:incomplete_${key}_processor`).texture(`ae2:item/printed_${key}_processor`)
      .displayName(`未完成的${ae2ProcessorName[ae2Processor.indexOf(key)]}处理器` as any)
  }

})

TaCZStartupEvents.recipeLoad(e => {
  e.removeRecipe()
})