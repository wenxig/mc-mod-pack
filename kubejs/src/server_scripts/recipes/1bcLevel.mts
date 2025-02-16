ServerEvents.recipes(event => {
  const { recipes } = event
  event.remove({ id: 'create_new_age:shaped/netherite_magnet' })
  recipes.minecraft.crafting_shaped("create_new_age:netherite_magnet", [
    "ABA",
    "BCB",
    "ABA"
  ], {
    "A": {
      "item": "gtceu:magnetic_samarium_plate"
    },
    "B": {
      "item": "vintageimprovements:nethersteel_sheet"
    },
    "C": {
      "item": "create_new_age:fluxuated_magnetite"
    }
  })
  event.remove({ id: 'create_new_age:shaped/fluxuated_magnetite' })
  recipes.minecraft.crafting_shaped('create_new_age:fluxuated_magnetite', [
    "ABA",
    "ACA",
    "CAC"
  ], {
    "A": {
      "item": "gtceu:magnetic_neodymium_plate"
    },
    "B": {
      "item": "create_new_age:layered_magnet"
    },
    "C": {
      "item": "gtceu:diamond_plate"
    }
  })

  event.remove({ id: 'create_new_age:shaped/layered_magnet' })
  recipes.minecraft.crafting_shaped("create_new_age:layered_magnet", [
    "ABA",
    "CAC",
    "CCC"
  ], {
    "A": '#forge:plates/gold',
    "B": {
      "item": "create_new_age:redstone_magnet"
    },
    "C": {
      "item": "gtceu:magnetic_steel_plate"
    }
  })
  event.remove({ output: ['create:empty_blaze_burner'] })
  recipes.minecraft.crafting_shaped('create:empty_blaze_burner', [
    "AAA",
    "ABA",
    "CCC"
  ], {
    "A": '#forge:rods/lead',
    "B": "minecraft:netherrack",
    "C": '#forge:plates/lead'
  })

  event.remove({ output: ['gtceu:primitive_blast_furnace'] })
  recipes.minecraft.crafting_shaped('gtceu:primitive_blast_furnace', [
    "ABA",
    "CDB",
    "EFG"
  ], {
    "A": '#forge:screws/iron',
    "B": {
      "item": "createaddition:iron_rod"
    },
    "C": '#forge:rods/iron',
    "D": {
      "item": "gtceu:firebricks"
    },
    "E": '#forge:tools/screwdrivers',
    "F": {
      "item": "tfc:blast_furnace"
    },
    "G": '#forge:tools/hammers'
  })
  event.remove({ id: 'create_new_age:shaped/redstone_magnet' })
  recipes.minecraft.crafting_shaped('create_new_age:redstone_magnet', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    "A": {
      "item": "gtceu:magnetic_iron_plate"
    },
    "B": {
      "item": "minecraft:redstone_block"
    }
  })
    ; (['create_new_age:reactor_casing', 'create_new_age:reactor_rod', 'create_new_age:nuclear_fuel', 'create_new_age:reactor_heat_vent', 'create_new_age:reactor_fuel_acceptor', 'create_new_age:reactor_glass', 'create_new_age:corium', 'create_new_age:solid_corium', 'create_new_age:thorium', 'create_new_age:radioactive_thorium'] as const)
      .forEach(v => {
        event.remove({ output: [v] })
      })

  recipes.minecraft.crafting_shaped('oc2r:circuit_board', [
    "   ",
    "ABA",
    "   "
  ], {
    "A": {
      "item": "gtceu:silver_single_wire"
    },
    "B": {
      "item": "immersiveengineering:circuit_board"
    }
  })
  //@ts-ignore
  recipes.minecraft.crafting_shaped('oc2r:circuit_board', [
    "ABA",
    "CDC",
    "BCB"
  ], {
    "A": {
      "item": "gtceu:diode"
    },
    "B": '#gtceu:resistors',
    "C": '#gtceu:circuits/lv',
    "D": {
      "item": "oc2r:circuit_board"
    }
  })

    ;([
      ['create_new_age:redstone_magnet', 'gtceu:magnetic_iron_rod'],
      ['create_new_age:layered_magnet', 'gtceu:magnetic_steel_rod'],
      ['create_new_age:fluxuated_magnetite', 'gtceu:magnetic_neodymium_rod'],
      ['create_new_age:netherite_magnet', 'gtceu:long_magnetic_samarium_rod']
    ] as const)
      .forEach(v => {
        event.replaceInput({ input: [v[1]], mod: 'gtceu' }, v[1], v[0])
    })

  recipes.gtceu.circuit_assembler('oc2r_cpu_tire_1')
  .EUt
})
const AmmoOf = (name: string, count?: number) => Item.of('tacz:ammo', count ?? 0, { AmmoId: name })
ServerEvents.recipes(event => {
  const incompleteAmmoItem = Item.of('kubejs:incomplete_ammo')
  // tacz 弹药
  const rp = event.recipes
  rp.create.sequenced_assembly([AmmoOf('hamster:medium_ammo', 10)], '#forge:plates/copper', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('hamster:medium_ammo', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('hamster:long_ammo', 10)], '#forge:plates/copper', [
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 4),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.vintageimprovements.vibrating([incompleteAmmoItem], [incompleteAmmoItem]),
    rp.vintageimprovements.curving([incompleteAmmoItem], [incompleteAmmoItem], 2),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('hamster:long_ammo', 10)]).loops(1)

  rp.create.sequenced_assembly([AmmoOf('suffuse:boomstickshot', 5)], 'tfc:unrefined_paper', [
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, 'minecraft:gunpowder']),
    rp.create.deploying([incompleteAmmoItem], [incompleteAmmoItem, '#c:string']),
  ]).transitionalItem(incompleteAmmoItem).results([AmmoOf('suffuse:boomstickshot', 5)]).loops(1)
  rp.minecraft.crafting_shapeless(AmmoOf('suffuse:boomstickshot', 5), ['tfc:unrefined_paper', 'minecraft:gunpowder', '#c:string'])
})