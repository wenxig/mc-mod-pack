EntityEvents.drops(event => {
  event.drops.splice(0, event.drops.length)
  Ingredient.all.itemIds.forEach(v => {
    const item = Item.of(v as any)
    const mods = ['ars_technica', 'ars_artillery', 'ars_creo', 'ars_elemental', 'ars_instrumentum', 'ars_nouveau', 'ars_ocultas', 'ars_technica', 'occultism', 'bloodmagic', 'botania', 'botanicpledge', 'apotheotic_additions', 'apotheoticcreation', 'apotheosis_modern_ragnarok', 'celestial_artifacts', 'celestial_core', 'irons_spellbooks', 'fantasy_ending', 'enigmaticlegacy', 'enigmaticaddons'] as Special.Mod[]
    if (mods.indexOf(item.mod as any) != -1) event.drops.filter(item => item.item.id != v).forEach(v => {
      event.drops.push(v)
    })
  })
})
ServerEvents.chestLootTables(e=>{
  e.removeAll()
})
