try {
  (JEIEvents as any).hideItems(event => {
    event.hide([
      "ae2:facade",
      'mekanism:creative_fluid_tank',
      'mekanism:creative_chemical_tank'
    ] as InputItem_[])
  })
} catch (e) {

}