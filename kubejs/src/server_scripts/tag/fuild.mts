const yuanyou = ['createdieselgenerators:crude_oil', 'artisanal:petroleum', 'gtceu:oil_medium'] as const
ServerEvents.tags('fluid', event => {
  yuanyou.forEach(v => {
    event.add('c:oil', v)
    event.add('forge:oil', v)
    event.add('forge:oil_medium', v)
    event.add('forge:crude_oil', v)
  })

    ; (['c:water', 'minecraft:water', 'forge:water'] as Special.FluidTag[]).forEach(v => {
      event.removeAll(v)
      event.add(v, 'minecraft:water', 'minecraft:flowing_water')
    })

    ; (['tfc:salt_water', 'tfc:river_water', 'tfc:spring_water', 'tfc:flowing_salt_water', 'tfc:flowing_river_water', 'tfc:flowing_spring_water','adpother:polluted_water_still'] as Special.Fluid[]).forEach(v => {
      event.add('forge:need_process_water', v)
    })
})