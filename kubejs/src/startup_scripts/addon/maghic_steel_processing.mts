GTCEuStartupEvents.registry('gtceu:material', e => {
  const add = (id: string) => e.create(id) as any
  // 硫化铪
  add('sulfuretted_hafnium')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Sulfur.getName()}`, `1x ${GTMaterials.Hafnium.getName()}`)
  // 硫化铟
  add('sulfuretted_indium')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`3x ${GTMaterials.Sulfur.getName()}`, `2x ${GTMaterials.Indium.getName()}`)
  // 亚氟化铪
  add('fluoride_hafnium')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`2x ${GTMaterials.Fluorine.getName()}`, `1x ${GTMaterials.Hafnium.getName()}`)
  // 硫酸铟
  add('indium_sulfate')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`2x ${GTMaterials.Indium.getName()}`, `3x ${GTMaterials.Sulfur.getName()}`, `12x ${GTMaterials.Oxygen.getName()}`)
  // 氢氧化铑
  add('rhodium_hydroxide')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Rhodium.getName()}`, `3x ${GTMaterials.Oxygen.getName()}`, `3x ${GTMaterials.Hydrogen.getName()}`)
  // 氢氧化铟
  add('indium_hydroxide')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Indium.getName()}`, `3x ${GTMaterials.Oxygen.getName()}`, `3x ${GTMaterials.Hydrogen.getName()}`)
  // 氧化铟
  add('indium_oxidation')
    .color(0x7744aa)
    .secondaryColor(0x663399)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`2x ${GTMaterials.Indium.getName()}`, `3x ${GTMaterials.Oxygen.getName()}`)
  // commend:双合金
  add('kjs_bisalloy_400')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`3x ${GTMaterials.Carbon.getName()}`, `4x ${GTMaterials.Manganese.getName()}`, `2x ${GTMaterials.Silicon.getName()}`, `3x ${GTMaterials.Chromium.getName()}`, `1x ${GTMaterials.Molybdenum.getName()}`, `11x ${GTMaterials.Iron.getName()}`)
  // 低聚合超能硅岩铟铕双合金
  add('low_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 惰化贫瘠超能硅岩铟铕双合金
  add('inerting_barren_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 等离子态贫瘠超能硅岩铟铕双合金
  add('plasma_barren_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 等离子态半聚合超能硅岩铟铕双合金
  add('plasma_harf_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 半聚合超能硅岩铟铕双合金
  add('harf_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // commend:𫟼基钯
  add('darmstadtium_based_palladium')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Darmstadtium.getName()}`, `1x ${GTMaterials.Palladium.getName()}`)
  // 氢结合𫟼基钯
  add('darmstadtium_based_palladium_with_hydrogen')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Darmstadtium.getName()}`, `1x ${GTMaterials.Palladium.getName()}`)
  // 𫟼基钯结合半聚合超能硅岩铟铕双合金
  add('darmstadtium_based_palladium_with_harf_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x darmstadtium_based_palladium`, `1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 高聚合超能硅岩铟铕双合金
  add('high_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 氢化𫟼
  add('hydriding_darmstadtium')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`2x ${GTMaterials.Hydrogen.getName()}`, `1x ${GTMaterials.Darmstadtium.getName()}`)
  // 氢氧化硅岩
  add('naquadria_hydroxide')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadah.getName()}`, `1x ${GTMaterials.Oxygen.getName()}`, `1x ${GTMaterials.Hydrogen.getName()}`)
  // 草酸
  add('oxalic_acid')
    .color(0xaaee33)
    .secondaryColor(0xaaeecc)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`2x ${GTMaterials.Carbon.getName()}`, `2x ${GTMaterials.Hydrogen.getName()}`, `4x ${GTMaterials.Oxygen.getName()}`)
  // 甲醚
  add('methyl_ether')
    .color(0xefef00)
    .secondaryColor(0xcfcf00)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`2x ${GTMaterials.Carbon.getName()}`, `6x ${GTMaterials.Hydrogen.getName()}`, `1x ${GTMaterials.Oxygen.getName()}`)



  // commend:N,N-二甲基甲酰胺
  add('kjs_dimethylformamide')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`3x ${GTMaterials.Carbon.getName()}`, `1x ${GTMaterials.Nitrogen.getName()}`, `7x ${GTMaterials.Hydrogen.getName()}`, `1x ${GTMaterials.Oxygen.getName()}`)
  // p基
  add('p_base')
    .color(0x9f5f23)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x oxalic_acid`, `1x methyl_ether`, `1x kjs_dimethylformamide`)
  // p-114
  add('p_114')
    .color(0x9f5f23)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x p_base`, `1x fluoride_hafnium`)
  // 质子基
  add('proton_base')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x dodecylbenzene`, `1x ${GTMaterials.Hydrogen.getName()}`)
  // 半价态酸
  add('harf_valence_acid')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x proton_base`, `1x ${GTMaterials.Neutronium.getName()}`, `1x ${GTMaterials.Fluorine.getName()}`)



  // 铕𫟼半价态酸
  add('europium_darmstadtium_harf_valence_acid')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Europium.getName()}`, `1x ${GTMaterials.Darmstadtium.getName()}`, `1x harf_valence_acid`)
  // 多成分有机促合剂
  add('multicomponent_organic_promote_dissolution_reagent')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Ethanol.getName()}`, `1x ${GTMaterials.RocketFuel.getName()}`)
  // p-514
  add('p_514')
    .color(0x5e6e12)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x europium_darmstadtium_harf_valence_acid`, `1x multicomponent_organic_promote_dissolution_reagent`, `1x p_114`)
  // 铟𫟼半价态酸
  add('indium_darmstadtium_harf_valence_acid')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Darmstadtium.getName()}`, `1x harf_valence_acid`)


  // p-1919
  add('p_1919')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x indium_darmstadtium_harf_valence_acid`, `1x p_514`)
  // 聚乙烯醇
  add('polyvinyl_alcohol')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`2x ${GTMaterials.Carbon.getName()}`, `4x ${GTMaterials.Hydrogen.getName()}`, `1x ${GTMaterials.Oxygen.getName()}`)



  // 钾凝胶
  add('potassium_gel')
    .color(0xdddddd)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Potassium.getName()}`, `1x polyvinyl_alcohol`)
  // p-810
  add('p_810')
    .color(0x7a8f9d)
    .secondaryColor(0x7a8f9d)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x p_1919`, `1x potassium_gel`)
  // 普适形稳定剂
  add('general_stabilization_dose')
    .color(0xf1aae9)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Neon.getName()}`, `1x ${GTMaterials.Darmstadtium.getName()}`, `1x ${GTMaterials.Ethanol.getName()}`)
  // 质子特化稳定剂
  add('proton_specialization_stabilization_dose')
    .color(0xf1aae9)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x general_stabilization_dose`, `1x proton_base`)
  // 离子化质子特化稳定剂
  add('ionize_proton_specialization_stabilization_dose')
    .color(0xf1aae9)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x general_stabilization_dose`, `1x proton_base`)
  // 量子特化稳定剂
  add('quantum_specialization_stabilization_dose')
    .color(0xf1aae9)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x general_stabilization_dose`)
  // 离子化量子特化稳定剂
  add('ionize_quantum_specialization_stabilization_dose')
    .color(0xf1aae9)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x general_stabilization_dose`)
  // 裂解低聚合贫瘠超能硅岩铟铕双合金
  add('splitting_decomposition_low_oligomerization_poor_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)



  // 含杂高聚合贫瘠超能硅岩铟铕双合金
  add('impure_high_oligomerization_poor_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 铟酸
  add('indionic_acid')
    .color(0xff1fdf)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Hydrogen.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `2x ${GTMaterials.Oxygen.getName()}`)
  // 铟铕半价态酸
  add('indium_europium_harf_valence_acid')
    .color(0xff1fdf)
    .secondaryColor(0xeeeeee)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x harf_valence_acid`)
  // 含杂氧化高聚合超能硅岩铟铕双合金
  add('impure_oxidation_high_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Oxygen.getName()}`, `1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 含硅岩废液
  add('waste_liquid_containing_naquadah')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadah.getName()}`)
  // 𫟼-硅岩酸
  add('darmstadtium_naquadah_acid')
    .color(0x717a7a)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Darmstadtium.getName()}`, `1x ${GTMaterials.Naquadah.getName()}`, `4x ${GTMaterials.Oxygen.getName()}`)
  // 𫟼-硅岩质子酸
  add('darmstadtium_naquadah_proton_acid')
    .color(0x717a7a)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Darmstadtium.getName()}`, `1x ${GTMaterials.Naquadah.getName()}`, `2x ionize_proton_specialization_stabilization_dose`)
  // 自旋电子
  add('spinning_electron')
    .color(0x717a7a)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .element(GTElements.get('spinning_electron'))
  // 等离子态激发超能硅岩铟铕双合金
  add('plasma_excited_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 激发态超能硅岩铟铕双合金
  add('excited_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)



  // 衰变超能硅岩铟铕双合金
  add('decayed_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 枯竭超能硅岩铟铕双合金
  add('exhausted_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 高聚合铟铕双合金
  add('high_oligomerization_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 𫟼质子酸
  add('darmstadtium_proton_acid')
    .color(0x717a7a)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Darmstadtium.getName()}`, `2x ionize_proton_specialization_stabilization_dose`)
  // 硅岩铟铕双合金
  add('naquadah_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadah.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)



  // 高饱和硅岩铟铕双合金
  add('high_saturation_naquadah_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Naquadah.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 低杂氧化高聚合超能硅岩铟铕双合金
  add('low_impure_oxidation_high_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Oxygen.getName()}`, `1x ${GTMaterials.Naquadah.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 氧化高聚合超能硅岩铟铕双合金
  add('oxidation_high_oligomerization_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Oxygen.getName()}`, `1x ${GTMaterials.Naquadah.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 理想量子激化催化剂
  add('ideal_quantum_activation_catalyst')
    .color(0xf1cce9)
    .secondaryColor(0xf1cce9)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .dust()
    .components(`1x ionize_quantum_specialization_stabilization_dose`, `1x darmstadtium_proton_acid`, `1x spinning_electron`)
  // 超能硅岩铟铕双合金
  add('naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x444444)
    .secondaryColor(0x454545)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .liquid()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 低含量魔力化超能硅岩铟铕双合金
  add('low_magic_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 低含量魔力化裂解超能硅岩铟铕双合金
  add('low_magic_splitting_decomposition_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)



  // 低含量魔力化裂解活化超能硅岩铟铕双合金
  add('low_magic_splitting_decomposition_excitation_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 高含量魔力化裂解活化超能硅岩铟铕双合金
  add('high_magic_splitting_decomposition_excitation_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 高含量魔力化活化超能硅岩铟铕双合金
  add('high_magic_excitation_naquadria_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Naquadria.getName()}`, `1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 贫化魔力钢
  add('dilution_magic_steel')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Iron.getName()}`)
  // 低聚合铟铕双合金
  add('low_oligomerization_indium_europium_bisalloy_400_alloy')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .dust()
    .components(`1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
  // 磁化富集硅岩
  add('magnetic_naquadah_alloy')
    .ingot()
    .color(0x323232).secondaryColor(0x301131)
    .iconSet(GTMaterialIconSet.MAGNETIC)
    .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)
    .components(`1x ${GTMaterials.NaquadahAlloy.getName()}`)
    .ingotSmeltInto(GTMaterials.NaquadahAlloy.getName())
    .arcSmeltInto(GTMaterials.NaquadahAlloy.getName())
    .macerateInto(GTMaterials.NaquadahAlloy.getName())
  // 单极磁性促合剂
  add('one_pole_dissolution_reagent')
    .color(0x094263)
    .secondaryColor(0x094263)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid()
    .components(`1x ${GTMaterials.Indium.getName()}`, `1x ${GTMaterials.Europium.getName()}`, `1x kjs_bisalloy_400`)
})
GTCEuStartupEvents.registry('gtceu:element', e => {
  // 参数1：名称 - string
  // 参数2：质子数量 - number
  // 参数3：中子数量 - number
  // 参数4：半衰期（秒）- number - 设为 -1 时没有半衰期
  // 参数5：衰变后的元素 - string | null
  // 参数6：符号 - string
  // 参数7：是否为同位素 - boolean
  e.create('spinning_electron', 0, 0, -1, null, 'Spe', false)
})