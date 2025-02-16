GTCEuStartupEvents.registry('gtceu:machine', event => {
  // const r = event.create('kubejs_ene_injector', 'multiblock') as any as Internal.MultiblockMachineBuilder
  // r.rotationState(RotationState.NON_Y_AXIS)
  // r.pattern(definition => FactoryBlockPattern.start()
  //   .aisle('################', '##ABBBBBBBBBA###', '#AACCCCCCCCCAA##', '##ABBBBBBBBBA###', '################')
  //   .aisle('##ABBBBBBBBBA###', '#ADEEEFFFEEEDA##', 'ADDEEEFFFEEEDDA#', '#ADEEEFFFEEEDA##', '##ABBBBBBBBBA###')
  //   .aisle('#AACCCCCCCCCAA##', 'ADDEEEFFFEEEDDA#', 'KGHHHHHIHHHHHGDA', 'ADDEEEFFFEEEDDA#', '#AACCCCCCCCCAA##')
  //   .aisle('##ABBBBBBBBBA###', '#ADEEEFFFEEEDA##', 'ADDEEEFFFEEEDDA#', '#ADEEEFFFEEEDA##', '##ABBBBBBBBBA###')
  //   .aisle('################', '##ABBBBBBBBBA###', '#AACCCCCCCCCAA##', '##ABBBBBBBBBA###', '################')
  //   .where('K', Predicates.controller(Predicates.blocks(definition.get())))
  //   .where('E', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
  //   .where('C', Predicates.blocks('mekanism_extras:naquadah_reactor_casing'))
  //   .where('A', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
  //   .where('I', Predicates.blocks('draconicevolution:reactor_core'))
  //   .where('F', Predicates.blocks(GTBlocks.BATTERY_ULTIMATE_UHV.get()))
  //   .where('D', Predicates.blocks('avaritia:infinity'))
  //   .where('B', Predicates.blocks(GTBlocks.MACHINE_CASING_MAX.get())
  //     .or(Predicates.abilities(
  //       PartAbility.IMPORT_ITEMS,
  //       PartAbility.EXPORT_ITEMS,
  //       PartAbility.INPUT_ENERGY,
  //     ))
  //     .or(Predicates.autoAbilities(GTRecipeTypes.get('kubejs_ene_injecting')))
  //   )
  //   .where('#', Predicates.any())
  //   .build()
  // ).recipeTypes([GTRecipeTypes.get('kubejs_ene_injecting')])
  // r.langValue('block.gtceu.kubejs_ene_injector')
})

GTCEuStartupEvents.registry('gtceu:recipe_type', e => {
  // create() 方法返回 com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder
  (e as any).create('kubejs_ene_injecting')
    .setEUIO('in')
    .setMaxIOSize(1, 1, 0, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR)
})