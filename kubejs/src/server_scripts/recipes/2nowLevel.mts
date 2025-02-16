const ae2Processor = ['logic', 'engineering', 'calculation'] as const
const mekLevel = ['basic', 'advanced', 'elite', 'ultimate'] as const
ServerEvents.recipes(event => {
  const { recipes } = event
  const addManyShapeCraftingRecipe = ((arg1, arg2, arg3) => {
    //@ts-ignore
    recipes.extendedcrafting.shaped_table(arg1, arg2, arg3)
    //@ts-ignore
    recipes.create.mechanical_crafting(arg1, arg2, arg3)
  }) as (typeof recipes.extendedcrafting.shaped_table)

  // ae2-{逻辑,运算,控制}处理器
  for (const key of ae2Processor) {
    event.remove({ id: `ae2:inscriber/${key}_processor` })
    recipes.create.sequenced_assembly([
      `ae2:${key}_processor`
    ], 'ae2:printed_silicon', [
      event.recipes.create.deploying([`kubejs:incomplete_${key}_processor`], [`kubejs:incomplete_${key}_processor`, `ae2:printed_${key}_processor`]),
      event.recipes.create.deploying([`kubejs:incomplete_${key}_processor`], [`kubejs:incomplete_${key}_processor`, '#gtceu:circuits/iv']),
      event.recipes.create.pressing([`kubejs:incomplete_${key}_processor`], [`kubejs:incomplete_${key}_processor`])
    ]).transitionalItem(`kubejs:incomplete_${key}_processor`).results([`ae2:${key}_processor`]).loops(1)
    event.custom({
      "type": "ae2:inscriber",
      "mode": "press",
      "ingredients": {
        "top": {
          "item": `ae2:printed_${key}_processor`
        },
        "middle": {
          "item": "ae2:printed_silicon"
        },
        "bottom": {
          "item": '#gtceu:circuits/iv'
        }
      },
      "result": {
        "item": `ae2:${key}_processor`
      },
      "process_time": 200
    } as any)
  }

  // ae2-赛特斯石英水晶
  recipes.create.filling([Item.of('ae2:certus_quartz_crystal').withCount(2)], [Fluid.of('minecraft:water').withAmount(3000), 'ae2:charged_certus_quartz_crystal'])


  // oc2r-晶体管
  event.remove({ id: 'oc2r:transistor' })
  recipes.minecraft.crafting_shaped('oc2r:transistor', [
    'AAA',
    'ABA',
    'CCC'
  ], {
    A: '#forge:ingots/hop_graphite',
    B: "mekanism:advanced_control_circuit",
    C: '#forge:rods/aluminum'
  })

  // oc2r-cpu Tier {1,2,3,4}
  for (const tier of [1, 2, 3, 4] as const) {
    event.remove({ id: `oc2r:cpu_tier_${tier}` })
    recipes.minecraft.crafting_shaped(`oc2r:cpu_tier_${tier}`, [
      'ABA',
      'DEF',
      'CCC'
    ], {
      A: (['#gtceu:batteries/hv', '#gtceu:batteries/ev', '#gtceu:batteries/iv', '#gtceu:batteries/luv'] as const)[tier - 1],
      B: "#forge:storage_blocks/aluminum",
      C: '#forge:ingots/hop_graphite',
      D: 'ae2:logic_processor',
      E: 'ae2:engineering_processor',
      F: 'ae2:calculation_processor'
    })
  }

  // oc2r-内存条{2,4,8,16}MB
  for (const size of ['small', 'medium', 'large', 'extra_large'] as const) {
    var storeMap: { [key in string]: InputItem_ } = {
      small: '#balm:wooden_chests',
      medium: 'mekanism:personal_chest',
      large: 'mekanism:qio_drive_base',
      extra_large: 'mekanism:qio_drive_hyper_dense'
    } as const
    event.remove({ id: `oc2r:memory_${size}` })
    recipes.minecraft.crafting_shaped(`oc2r:memory_${size}`, [
      ' A ',
      'BCB',
      ' D '
    ], {
      A: storeMap[size],
      B: "#forge:ingots/aluminum",
      C: 'oc2r:transistor',
      D: "oc2r:circuit_board"
    })
  }

  // gtm-三氯化铝
  recipes.gtceu.chemical_reactor('kubejs_aluminium_chloride')
    .EUt(GTValues.VA[GTValues.IV])
    .inputFluids(
      GTMaterials.HydrochloricAcid.getFluid(72) as any
    )
  ['inputItems(dev.latvian.mods.kubejs.item.InputItem[])']('#forge:dusts/aluminium')
    .outputFluids(
      GTMaterials.get('aluminium_chloride').getFluid(72) as any
    )
    .duration(300)

    // gtm-十二烷基苯
    ; (recipes.gtceu.large_chemical_reactor as any)('kubejs_dodecylbenzene')
      .EUt(GTValues.VA[GTValues.IV])
      .inputFluids(
        Fluid.of('gtceu:dodecane', 72),
        Fluid.of('gtceu:benzene', 72),
      )
      .outputFluids(
        Fluid.of('gtceu:dodecylbenzene', 144),
      )
      .notConsumable(
        Ingredient.of('#forge:dusts/aluminium_chloride').itemIds[0]
      )
      .duration(300)

  // gtm-十二烷
  recipes.gtceu.distillery('kebejs_dodecane')
    .EUt(GTValues.VA[GTValues.IV])
    .inputFluids(
      fluidIngredient('forge:kerosene', 72)
    )
    .outputFluids(
      Fluid.of('gtceu:dodecane', 72),
    )
    .circuit(24)
    .duration(300)

})
const JsonObject = Java.loadClass('com.google.gson.JsonObject')

let fluidIngredient = (taag: Special.FluidTag, amount: number) => {
  let result = new JsonObject()
  result.add('amount', amount || 1000 as any) // 如果不指定 amount，默认为 1000
  result.add('value', { tag: taag } as any)
  return result as any
}
ServerEvents.recipes(event => {
  const incompleteAmmoItem = Item.of('kubejs:incomplete_ammo')
  const rp = event.recipes

  rp.create.sequenced_assembly([AmmoOf('tacz:308', 10)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/constantan']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:308', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:762x39', 10)], '#forge:sheets/wrought_iron', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/constantan']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:762x39', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:50bmg', 10)], '#forge:sheets/black_steel', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/electrum']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'createbigcannons:ap_autocannon_round']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:50bmg', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:45acp', 20)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:nuggets/bronze']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:45acp', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:9mm', 20)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:nuggets/constantan']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:9mm', 20)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:556x45', 10)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:plates/constantan']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:556x45', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:50ae', 10)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:nuggets/copper']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:50ae', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:357mag', 10)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:nuggets/silver']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:357mag', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:12g', 10)], '#forge:plates/brass', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'createbigcannons:shot_balls']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:12g', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:40mm', 10)], '#forge:plates/cast_iron', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:storage_blocks/gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#forge:ingots/brass']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:40mm', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('tacz:rpg_rocket', 5)], '#forge:sheets/bismuth', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'createbigcannons:he_shell']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'createbigcannons:impact_fuze']),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('tacz:rpg_rocket', 5)]).loops(1)
})

const AmmoOf = (name: string, count?: number) => Item.of('tacz:ammo', count ?? 0, { AmmoId: name })