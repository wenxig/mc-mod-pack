ServerEvents.tags('item', event => {
  event.add('c:ingots', "avaritia:neutron_ingot")
  event.add('balm:ingots', "avaritia:neutron_ingot")
  event.add('forge:ingots', "avaritia:neutron_ingot")
  event.add('forge:ingots/a_neutron', "avaritia:neutron_ingot")

  event.add('balm:nuggets', 'avaritia:neutron_nugget')
  event.add('c:nuggets', 'avaritia:neutron_nugget')
  event.add('forge:nuggets', 'avaritia:neutron_nugget')
  event.add('forge:nuggets/a_neutron', 'avaritia:neutron_nugget')

  event.add('forge:storage_blocks', 'avaritia:neutron')
  event.add('forge:storage_blocks/a_neutron', 'avaritia:neutron')

  event.add('forge:gears', 'avaritia:neutron_gear')
  event.add('forge:gears/a_neutron', 'avaritia:neutron_gear')

  event.add('c:ingots', 'avaritia:crystal_matrix_ingot')
  event.add('balm:ingots', 'avaritia:crystal_matrix_ingot')
  event.add('forge:ingots', 'avaritia:crystal_matrix_ingot')
  event.add('forge:ingots/crystal_matrix', 'avaritia:crystal_matrix_ingot')

  event.add('forge:storage_blocks', 'avaritia:crystal_matrix')
  event.add('forge:storage_blocks/crystal_matrix', 'avaritia:crystal_matrix')

  event.add('c:ingots', 'avaritia:infinity_ingot')
  event.add('balm:ingots', 'avaritia:infinity_ingot')
  event.add('forge:ingots', 'avaritia:infinity_ingot')
  event.add('forge:ingots/infinity', 'avaritia:infinity_ingot')

  event.add('balm:nuggets', 'avaritia:infinity_nugget')
  event.add('c:nuggets', 'avaritia:infinity_nugget')
  event.add('forge:nuggets', 'avaritia:infinity_nugget')
  event.add('forge:nuggets/infinity', 'avaritia:infinity_nugget')

  event.add('forge:storage_blocks', 'avaritia:infinity')
  event.add('forge:storage_blocks/infinity', 'avaritia:infinity')
  Ingredient.of('#forge:ingots/aluminum').itemIds.forEach(v => {
    event.add('forge:ingots/aluminium', v as any)
  })
  Ingredient.of('#forge:dusts/aluminum').itemIds.forEach(v => {
    event.add('forge:dusts/aluminium', v as any)
  })
  Ingredient.of('#forge:ingots/terra_steel').itemIds.forEach(v => {
    event.add('forge:ingots/terrasteel', v as any)
  })
  Ingredient.of('#forge:ingots/terrasteel').itemIds.forEach(v => {
    event.add('forge:ingots/terra_steel', v as any)
  })
  Ingredient.of('#forge:ingots/mana_steel').itemIds.forEach(v => {
    event.add('forge:ingots/manasteel', v as any)
  })


  event.add('gtceu:capacitors', 'createaddition:capacitor')
  event.add('gtceu:transistors', 'oc2r:transistor')
  event.add('gtceu:circuits/lv', 'immersiveengineering:component_electronic_adv', 'create_connected:control_chip', 'rainbowcompound:integrated_circuit')
  event.add('gtceu:circuits/ulv', 'immersiveengineering:electron_tube', 'create:electron_tube')
  event.add('gtceu:circuits/mv', 'immersiveengineering:logic_circuit', 'immersiveengineering:component_electronic');

  ['mekanism:basic_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit', 'mekanism_extras:supreme_control_circuit', 'mekanism_extras:cosmic_control_circuit', 'mekanism_extras:infinite_control_circuit'].forEach((v, i) => {
    const GTTiers = ['zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    event.add(`gtceu:circuits/${GTTiers[i]}` as any, 'createaddition:capacitor')
  })
  event.add('gtceu:circuits', 'immersiveengineering:logic_circuit', 'immersiveengineering:component_electronic', 'immersiveengineering:electron_tube', 'create:electron_tube', 'immersiveengineering:component_electronic_adv', 'create_connected:control_chip', 'rainbowcompound:integrated_circuit', 'mekanism:basic_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit', 'mekanism_extras:supreme_control_circuit', 'mekanism_extras:cosmic_control_circuit', 'mekanism_extras:infinite_control_circuit')

  
})