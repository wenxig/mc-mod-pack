
GTCEuStartupEvents.registry('gtceu:machine', event => {
  const r = event.create('kubejs_super_laser_engraver', 'multiblock') as any as Internal.MultiblockMachineBuilder
  r.rotationState(RotationState.NON_Y_AXIS)
  r.pattern(definition => FactoryBlockPattern.start()
    .aisle('A######A', 'AAAAAAAA', '#AAAAAA#', '########', '########', '########', '########', '########', '########', '########')
    .aisle('#AAAAAA#', 'ABBBBBBA', 'ACCCCCCA', '#AAAAAA#', '########', '########', '########', '########', '########', '########')
    .aisle('#AAAAAA#', 'ABBDEDBA', 'ACBDEDCA', '#AFDGDA#', '##ADGDA#', '####G###', '####G###', '####G###', '####G###', '########')
    .aisle('#AAAAAAA', 'ABHHHHBA', 'ACEI#ICA', '#ABI#IAA', '#AGI#IA#', '##ADDDA#', '########', '########', '########', '####G###')
    .aisle('#AAAAAAA', 'ABHHFHBK', 'ACE###CA', '#AE###AA', '#AE###GA', '#AGD#DGA', '##G###G#', '##G###G#', '##G#F#G#', '###GIG##')
    .aisle('#AAAAAAA', 'ABHHHHBA', 'ACEI#ICA', '#ABI#IAA', '#AGI#IA#', '##ADDDA#', '########', '########', '########', '####G###')
    .aisle('#AAAAAA#', 'ABBDEDBA', 'ACBDEDCA', '#AFDGDA#', '##ADGDA#', '###AGA##', '####G###', '####G###', '####G###', '########')
    .aisle('#AAAAAA#', 'ABBBBBBA', 'ACCCCCCA', '#AAAAAA#', '###AAA##', '########', '########', '########', '########', '########')
    .aisle('A######A', 'AAAAAAAA', '#AAAAAA#', '########', '########', '########', '########', '########', '########', '########')
    .where('K', Predicates.controller(Predicates.blocks(definition.get())))
    .where('A', Predicates.blocks(GTBlocks.MACHINE_CASING_ZPM.get())
      .or(Predicates.abilities(
        PartAbility.IMPORT_ITEMS,
        PartAbility.EXPORT_ITEMS,
        PartAbility.INPUT_ENERGY,
      ))
      .or(Predicates.autoAbilities(GTRecipeTypes.LASER_ENGRAVER_RECIPES, GTRecipeTypes.get('kubejs_super_laser_engraver'))))
    .where('F', Predicates.blocks('draconicevolution:awakened_draconium_block'))
    .where('G', Predicates.blocks('draconicevolution:draconium_block'))
    .where('H', Predicates.blocks('gtceu:polybenzimidazole_block'))
    .where('D', Predicates.blocks('gtceu:uranium_rhodium_dinaquadide_block'))
    .where('B', Predicates.blocks('gtceu:osmium_block'))
    .where('I', Predicates.blocks('minecraft:glowstone'))
    .where('C', Predicates.blocks(GTBlocks.COIL_NAQUADAH.get()))
    .where('E', Predicates.blocks(GTBlocks.MACHINE_CASING_ZPM.get()))
    .where('#', Predicates.any())
    .build()
  ).recipeTypes([GTRecipeTypes.LASER_ENGRAVER_RECIPES, GTRecipeTypes.CIRCUIT_ASSEMBLER_RECIPES, GTRecipeTypes.get('kubejs_super_laser_engraver')])
  r.langValue('block.gtceu.kubejs_super_laser_engraver')
})

GTCEuStartupEvents.registry('gtceu:recipe_type', e => {
  // create() 方法返回 com.gregtechceu.gtceu.integration.kjs.builders.GTRecipeTypeBuilder
  (e as any).create('kubejs_super_laser_engraver')
    .setEUIO('in')
    .setMaxIOSize(10, 3, 3, 3)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
})