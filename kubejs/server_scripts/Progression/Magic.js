// priority: 1

ServerEvents.recipes(event => {
  const aether = () => {
    /**
     * @param {Internal.Ingredient} input
     * @param {Number} time (in seconds)
     */
    const repairing = (input, time) => {
      event.custom({
        type: 'aether:repairing',
        ingredient: input.toJson(),
        repairTime: time * 20,
      });
    };

    event.custom({
      type: 'eidolon:worktable',
      pattern: ['glg', 'lhl', 'glg'],
      reagents: 'gggg',
      key: {
        g: {item: 'minecraft:glowstone'},
        h: {tag: 'eidolon:patron_symbol'},
        l: {item: 'minecraft:ice'},
      },
      result: {item: 'aether:aether_portal_frame'},
    });

    event.remove('aether:nature_staff');
    event.shaped('aether:nature_staff', [' Z', 'S '], {Z: '#forge:gems/zanite', S: 'aether:skyroot_stick'}).id('aether:nature_staff');

    event.replaceOutput({id: 'aether_redux:blue_swet_jelly'}, 'aether_redux:golden_swet_jelly', 'aether_redux:blue_swet_jelly');

    [
      {item: Ingredient.of('aether_redux:infused_veridium_axe'), time: 70},
      {item: Ingredient.of('aether_redux:infused_veridium_hoe'), time: 70},
      {item: Ingredient.of('aether_redux:infused_veridium_pickaxe'), time: 70},
      {item: Ingredient.of('aether_redux:infused_veridium_shovel'), time: 70},
      {item: Ingredient.of('aether_redux:infused_veridium_sword'), time: 70},
      {item: Ingredient.of('aether_redux:spectral_dart_shooter'), time: 90},
      {item: Ingredient.of('aether_redux:subzero_crossbow'), time: 45},
      {item: Ingredient.of('aether_redux:veridium_axe'), time: 35},
      {item: Ingredient.of('aether_redux:veridium_hoe'), time: 35},
      {item: Ingredient.of('aether_redux:veridium_pickaxe'), time: 35},
      {item: Ingredient.of('aether_redux:veridium_shovel'), time: 35},
      {item: Ingredient.of('aether_redux:veridium_sword'), time: 35},
      {item: Ingredient.of('aether:candy_cane_sword'), time: 20},
      {item: Ingredient.of('aether:cloud_staff'), time: 90},
      {item: Ingredient.of('aether:flaming_sword'), time: 90},
      {item: Ingredient.of('aether:hammer_of_kingbdogz'), time: 90},
      {item: Ingredient.of('aether:holy_sword'), time: 45},
      {item: Ingredient.of('aether:ice_pendant'), time: 25},
      {item: Ingredient.of('aether:ice_ring'), time: 25},
      {item: Ingredient.of('aether:lightning_sword'), time: 90},
      {item: Ingredient.of('aether:nature_staff'), time: 90},
      {item: Ingredient.of('aether:neptune_boots'), time: 50},
      {item: Ingredient.of('aether:neptune_chestplate'), time: 50},
      {item: Ingredient.of('aether:neptune_gloves'), time: 50},
      {item: Ingredient.of('aether:neptune_helmet'), time: 50},
      {item: Ingredient.of('aether:neptune_leggings'), time: 50},
      {item: Ingredient.of('aether:phoenix_boots'), time: 80},
      {item: Ingredient.of('aether:phoenix_bow'), time: 80},
      {item: Ingredient.of('aether:phoenix_chestplate'), time: 80},
      {item: Ingredient.of('aether:phoenix_gloves'), time: 80},
      {item: Ingredient.of('aether:phoenix_helmet'), time: 80},
      {item: Ingredient.of('aether:phoenix_leggings'), time: 80},
      {item: Ingredient.of('aether:pig_slayer'), time: 90},
      {item: Ingredient.of('aether:poison_dart_shooter'), time: 90},
      {item: Ingredient.of('aether:sentry_boots'), time: 90},
      {item: Ingredient.of('aether:shield_of_repulsion'), time: 90},
      {item: Ingredient.of('aether:valkyrie_axe'), time: 120},
      {item: Ingredient.of('aether:valkyrie_boots'), time: 120},
      {item: Ingredient.of('aether:valkyrie_chestplate'), time: 120},
      {item: Ingredient.of('aether:valkyrie_gloves'), time: 120},
      {item: Ingredient.of('aether:valkyrie_helmet'), time: 120},
      {item: Ingredient.of('aether:valkyrie_hoe'), time: 120},
      {item: Ingredient.of('aether:valkyrie_lance'), time: 120},
      {item: Ingredient.of('aether:valkyrie_leggings'), time: 120},
      {item: Ingredient.of('aether:valkyrie_pickaxe'), time: 120},
      {item: Ingredient.of('aether:valkyrie_shovel'), time: 120},
      {item: Ingredient.of('aether:vampire_blade'), time: 90},
      {item: Ingredient.of('create:netherite_diving_boots'), time: 100},
      {item: Ingredient.of('create:netherite_diving_helmet'), time: 100},
      {item: Ingredient.of('deep_aether:gravitite_ring'), time: 75},
      {item: Ingredient.of('deep_aether:skyjade_ring'), time: 37},
      {item: Ingredient.of('deep_aether:stratus_ring'), time: 75},
      {item: Ingredient.of('farmersdelight:netherite_knife'), time: 100},
      {item: Ingredient.of('nethersdelight:netherite_machete'), time: 100},
    ].forEach(pair => repairing(pair.item, pair.time));

    [
      // Remove these -- they should all be declared in the anvil because they're vanilla-adjacent tools
      'aether:bow_repairing',
      'aether:chainmail_boots_repairing',
      'aether:chainmail_chestplate_repairing',
      'aether:chainmail_gloves_repairing',
      'aether:chainmail_helmet_repairing',
      'aether:chainmail_leggings_repairing',
      'aether:diamond_axe_repairing',
      'aether:diamond_boots_repairing',
      'aether:diamond_chestplate_repairing',
      'aether:diamond_gloves_repairing',
      'aether:diamond_helmet_repairing',
      'aether:diamond_hoe_repairing',
      'aether:diamond_leggings_repairing',
      'aether:diamond_pickaxe_repairing',
      'aether:diamond_shovel_repairing',
      'aether:diamond_sword_repairing',
      'aether:fishing_rod_repairing',
      'aether:golden_axe_repairing',
      'aether:golden_boots_repairing',
      'aether:golden_chestplate_repairing',
      'aether:golden_gloves_repairing',
      'aether:golden_helmet_repairing',
      'aether:golden_hoe_repairing',
      'aether:golden_leggings_repairing',
      'aether:golden_pickaxe_repairing',
      'aether:golden_shovel_repairing',
      'aether:golden_sword_repairing',
      'aether:iron_axe_repairing',
      'aether:iron_boots_repairing',
      'aether:iron_chestplate_repairing',
      'aether:iron_gloves_repairing',
      'aether:iron_helmet_repairing',
      'aether:iron_hoe_repairing',
      'aether:iron_leggings_repairing',
      'aether:iron_pickaxe_repairing',
      'aether:iron_shovel_repairing',
      'aether:iron_sword_repairing',
      'aether:leather_boots_repairing',
      'aether:leather_chestplate_repairing',
      'aether:leather_gloves_repairing',
      'aether:leather_helmet_repairing',
      'aether:leather_leggings_repairing',
      'aether:shield_repairing',
      'aether:stone_axe_repairing',
      'aether:stone_hoe_repairing',
      'aether:stone_pickaxe_repairing',
      'aether:stone_shovel_repairing',
      'aether:stone_sword_repairing',
      'aether:wooden_axe_repairing',
      'aether:wooden_hoe_repairing',
      'aether:wooden_pickaxe_repairing',
      'aether:wooden_shovel_repairing',
      'aether:wooden_sword_repairing',
    ].forEach(id => event.remove(id));
  };

  const bloodMagic = () => {
    /**
     * @param {Internal.ItemStackKJS} output
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} reagent
     * @param {boolean} bonus
     */
    const ARC = (output, input, reagent, bonus) => {
      const recipe = {
        type: 'bloodmagic:arc',
        consumeingredient: false,
        input: input.toJson(),
        inputsize: 1,
        mainoutputchance: 0.0,
        output: output.toJson(),
        tool: reagent.toJson(),
      };

      if (!!bonus) {
        recipe.addedoutput = [
          {
            type: output.withCount(1).toJson(),
            chance: 0.17,
            mainchance: 0.33,
          },
        ];
      }

      event.custom(recipe);
    };

    // Everything in BM should use Arcane Gold
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:nuggets/gold', '#forge:nuggets/arcane_gold');
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:ingots/gold', '#forge:ingots/arcane_gold');
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:storage_blocks/gold', '#forge:storage_blocks/arcane_gold');
    event.remove('bloodmagic:soulforge/pettytartaricgem');
    event.remove('bloodmagic:soulforge/lessertartaricgem');

    // More involved Petty Soul Gem recipe
    event.remove({output: 'bloodmagic:soulgempetty'});
    event.custom({
      type: 'bloodmagic:soulforge',
      drain: 1.0,
      input0: {item: 'eidolon:enchanted_ash'},
      input1: {item: 'eidolon:soul_shard'},
      input2: {tag: 'forge:ingots/arcane_gold'},
      input3: {item: 'eidolon:death_essence'},
      minimumDrain: 1.0,
      output: {item: 'bloodmagic:soulgempetty'},
    });

    // More involved Lesser Soul Gem recipe
    event.remove({output: 'bloodmagic:soulgemlesser'});
    event.custom({
      type: 'bloodmagic:soulforge',
      drain: 20.0,
      input0: {item: 'bloodmagic:soulgempetty'},
      input1: {item: 'eidolon:shadow_gem'},
      input2: {item: 'eidolon:death_essence'},
      input3: {item: 'eidolon:lesser_soul_gem'},
      minimumDrain: 60.0,
      output: {item: 'bloodmagic:soulgemlesser'},
    });

    // More involved Altar recipe
    event.remove({output: 'bloodmagic:altar'});
    event.shaped('bloodmagic:altar', ['S S', 'EGE', 'EAE'], {
      S: 'eidolon:arcane_seal',
      E: 'aether:carved_stone',
      A: 'aether:altar',
      G: 'eidolon:crimson_gem',
    });

    // Easier means to get Arcane Gold once you're in BM
    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 1000,
      consumptionRate: 5,
      drainRate: 5,
      input: {tag: 'forge:ingots/gold'},
      output: {item: 'eidolon:arcane_gold_ingot'},
      upgradeLevel: 1,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 111,
      consumptionRate: 5,
      drainRate: 5,
      input: {tag: 'forge:nuggets/gold'},
      output: {item: 'eidolon:arcane_gold_nugget'},
      upgradeLevel: 1,
    });

    // Alchemical Reaction Chamber recipes :)
    ['iron', 'gold', 'copper'].forEach(metal => {
      event.remove({type: 'bloodmagic:arc', input: `#forge:ingots/${metal}`});
      event.remove({type: 'bloodmagic:arc', input: `#forge:ores/${metal}`});
      event.remove({type: 'bloodmagic:arc', input: `#forge:raw_materials/${metal}`});

      /* I want actual *dust* to be only obtainable via IE or above */
      event.remove(`bloodmagic:arc/dustsfrom_gravel_${metal}`);
      event
        .custom({
          type: 'bloodmagic:arc',
          tool: {tag: 'bloodmagic:arc/cuttingfluid'},
          input: {tag: `bloodmagic:gravels/${metal}`},
          inputsize: 1,
          mainoutputchance: 0.0,
          consumeingredient: false,
          output: {item: global.Metals[metal].crushed},
        })
        .id(`bloodmagic:arc/dustsfrom_gravel_${metal}`);
    });

    event.remove('bloodmagic:alchemytable/sand_iron');
    event.remove('bloodmagic:alchemytable/sand_gold');

    const cuttingFluid = Ingredient.of('#bloodmagic:arc/cuttingfluid');
    Object.keys(global.Metals).forEach(material => {
      const entry = global.Metals[material];
      const crushed = Item.of(entry.crushed);
      ARC(crushed.withCount(2), Ingredient.of(`#forge:ores/${material}`), cuttingFluid, true);
      ARC(crushed, Ingredient.of(`#forge:raw_materials/${material}`), cuttingFluid, false);
    });

    // Some Bloodmagic Recipes use *dust*, but we want to gate dusts for IE or later
    //  Let's use BM gravels instead!
    event.remove('bloodmagic:alchemytable/strengthened_catalyst');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:simplecatalyst'},
          {tag: 'bloodmagic:gravels/copper'},
          {item: 'minecraft:glow_berries'},
          {item: 'minecraft:cobbled_deepslate'},
        ],
        output: {item: 'bloodmagic:strengthenedcatalyst'},
        syphon: 1000,
        ticks: 100,
        upgradeLevel: 4,
      })
      .id('bloodmagic:alchemytable/strengthened_catalyst');

    event.remove('bloodmagic:alchemytable/curios_upgrade');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [{item: 'minecraft:paper'}, {item: 'bloodmagic:soulsnare'}, {tag: 'bloodmagic:gravels/iron'}, {tag: 'forge:ingots/gold'}],
        output: {item: 'bloodmagic:upgradetome', nbt: '{livingStats: {maxPoints: 10, upgrades: [{exp: 1.0d, key: "bloodmagic:curios_socket"}]}}'},
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 3,
      })
      .id('bloodmagic:alchemytable/curios_upgrade');

    event.remove('bloodmagic:alchemytable/weapon_repair_anointment');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [{item: 'bloodmagic:slate_vial'}, {tag: 'forge:crops/nether_wart'}, {tag: 'forge:ingots/copper'}, {tag: 'bloodmagic:gravels/gold'}],
        output: {item: 'bloodmagic:weapon_repair_anointment'},
        syphon: 500,
        ticks: 100,
        upgradeLevel: 1,
      })
      .id('bloodmagic:alchemytable/weapon_repair_anointment');

    event.remove('bloodmagic:alchemytable/weapon_repair_anointment_2');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:weapon_repair_anointment'},
          {item: 'bloodmagic:strong_tau'},
          {tag: 'forge:ingots/copper'},
          {tag: 'bloodmagic:gravels/gold'},
        ],
        output: {item: 'bloodmagic:weapon_repair_anointment_2'},
        syphon: 1000,
        ticks: 100,
        upgradeLevel: 3,
      })
      .id('bloodmagic:alchemytable/weapon_repair_anointment_2');

    event.remove('bloodmagic:alchemytable/weapon_repair_anointment_l');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:weapon_repair_anointment'},
          {item: 'bloodmagic:tauoil'},
          {tag: 'forge:ingots/copper'},
          {tag: 'bloodmagic:gravels/gold'},
        ],
        output: {item: 'bloodmagic:weapon_repair_anointment_l'},
        syphon: 1000,
        ticks: 100,
        upgradeLevel: 3,
      })
      .id('bloodmagic:alchemytable/weapon_repair_anointment_l');

    // Arcane Ashes should require Enchanted Ash from Eidolon
    event.remove('bloodmagic:alchemytable/arcane_ash');
    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 1000,
        consumptionRate: 3,
        drainRate: 5,
        input: {item: 'eidolon:enchanted_ash'},
        output: {item: 'bloodmagic:arcaneashes'},
        upgradeLevel: 1,
      })
      .id('bloodmagic:alchemytable/arcane_ash');

    // Binding Reagent should be more involved
    event.remove('bloodmagic:alchemytable/reagent_binding');
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [{item: 'aether:regeneration_stone'}, {item: 'eidolon:enchanted_ash'}, {item: 'aether_redux:purified_luxbuds'}],
        output: {item: 'bloodmagic:reagentbinding', count: 2},
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 3,
      })
      .id('bloodmagic:alchemytable/reagent_binding');

    // Blank Slates should require Aether Things as well :)
    event.remove('bloodmagic:altar/slate');
    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 1000,
        consumptionRate: 5,
        drainRate: 5,
        input: {item: 'aether:carved_stone'},
        output: {item: 'bloodmagic:blankslate'},
        upgradeLevel: 0,
      })
      .id('bloodmagic:altar/slate');

    // Large Bloodstone Brick should use the Aether's Hellfire Stone (i.e. kill the level-3 boss in the Aether)
    event.remove('bloodmagic:largebloodstonebrick');
    event
      .shapeless(Item.of('bloodmagic:largebloodstonebrick', 8), [Item.of('aether:hellfire_stone'), Item.of('bloodmagic:weakbloodshard')])
      .id('bloodmagic:largebloodstonebrick');

    // Blank Rune blocks should require Aether Stones
    event.remove('bloodmagic:blood_rune_blank');
    event
      .shaped(Item.of('bloodmagic:blankrune', 2), ['DSD', 'DOD', 'DDD'], {
        D: {item: 'minecraft:deepslate'},
        O: {type: 'bloodmagic:bloodorb', orb_tier: 1},
        S: {item: 'bloodmagic:blankslate'},
      })
      .id('bloodmagic:blood_rune_blank');

    // Teleposition Focus requires specifically a _normal_ ender pearl
    event.remove('bloodmagic:altar/teleposer_focus');
    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 2000,
        consumptionRate: 5,
        drainRate: 1,
        input: {item: 'minecraft:ender_pearl'},
        output: {item: 'bloodmagic:teleposerfocus'},
        upgradeLevel: 3,
      })
      .id('bloodmagic:altar/teleposer_focus');

    // Re-do all of the Blood Orb recipes
    event.remove('bloodmagic:altar/weakbloodorb');
    event.remove('bloodmagic:altar/apprenticebloodorb');
    event.remove('bloodmagic:altar/magicianbloodorb');
    event.remove('bloodmagic:altar/masterbloodorb');
    event.remove('bloodmagic:altar/archmagebloodorb');

    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 2000,
        consumptionRate: 5,
        drainRate: 1,
        input: {item: 'eidolon:crimson_gem'},
        output: {item: 'bloodmagic:weakbloodorb'},
        upgradeLevel: 0,
      })
      .id('bloodmagic:altar/weakbloodorb');

    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 5000,
        consumptionRate: 5,
        drainRate: 5,
        input: {item: 'minecraft:ender_eye'},
        output: {item: 'bloodmagic:apprenticebloodorb'},
        upgradeLevel: 1,
      })
      .id('bloodmagic:altar/apprenticebloodorb');

    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 25000,
        consumptionRate: 20,
        drainRate: 20,
        input: {item: 'endermanoverhaul:soul_pearl'},
        output: {item: 'bloodmagic:magicianbloodorb'},
        upgradeLevel: 2,
      })
      .id('bloodmagic:altar/magicianbloodorb');

    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 40000,
        consumptionRate: 30,
        drainRate: 50,
        input: {item: 'eidolon:offering_incense'},
        output: {item: 'bloodmagic:masterbloodorb'},
        upgradeLevel: 3,
      })
      .id('bloodmagic:altar/masterbloodorb');

    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 80000,
        consumptionRate: 50,
        drainRate: 100,
        input: {item: 'minecraft:popped_chorus_fruit'},
        output: {item: 'bloodmagic:archmagebloodorb'},
        upgradeLevel: 4,
      })
      .id('bloodmagic:altar/archmagebloodorb');

    // Also applies to the reversion recipes :)
    event.remove('bloodmagic:arc/reversion/weak_blood_orb');
    event.remove('bloodmagic:arc/reversion/apprentice_blood_orb');
    event.remove('bloodmagic:arc/reversion/magician_blood_orb');
    event.remove('bloodmagic:arc/reversion/master_blood_orb');

    event
      .custom({
        type: 'bloodmagic:arc',
        consumeingredient: true,
        input: {item: 'bloodmagic:weakbloodorb'},
        inputsize: 1,
        mainoutputchance: 0.0,
        output: {item: 'eidolon:crimson_gem'},
        tool: {tag: 'bloodmagic:arc/reverter'},
      })
      .id('bloodmagic:arc/reversion/weak_blood_orb');

    event
      .custom({
        type: 'bloodmagic:arc',
        consumeingredient: true,
        input: {item: 'bloodmagic:apprenticebloodorb'},
        inputsize: 1,
        mainoutputchance: 0.0,
        output: {item: 'minecraft:ender_eye'},
        tool: {tag: 'bloodmagic:arc/reverter'},
      })
      .id('bloodmagic:arc/reversion/apprentice_blood_orb');

    event
      .custom({
        type: 'bloodmagic:arc',
        consumeingredient: true,
        input: {item: 'bloodmagic:magicianbloodorb'},
        inputsize: 1,
        mainoutputchance: 0.0,
        output: {item: 'endermanoverhaul:soul_pearl'},
        tool: {tag: 'bloodmagic:arc/reverter'},
      })
      .id('bloodmagic:arc/reversion/magician_blood_orb');

    event
      .custom({
        type: 'bloodmagic:arc',
        consumeingredient: true,
        input: {item: 'bloodmagic:masterbloodorb'},
        inputsize: 1,
        mainoutputchance: 0.0,
        output: {item: 'eidolon:offering_incense'},
        tool: {tag: 'bloodmagic:arc/reverter'},
      })
      .id('bloodmagic:arc/reversion/master_blood_orb');

    event.remove('bloodmagic:altar/daggerofsacrifice');
    event
      .custom({
        type: 'bloodmagic:altar',
        altarSyphon: 3000,
        consumptionRate: 5,
        drainRate: 5,
        input: {item: 'aether:vampire_blade'},
        output: {item: 'bloodmagic:daggerofsacrifice'},
        upgradeLevel: 1,
      })
      .id('bloodmagic:altar/daggerofsacrifice');

    // The Air Sigil is too cheap
    event.remove({id: 'bloodmagic:alchemytable/reagent_air'});
    event
      .custom({
        type: 'bloodmagic:alchemytable',
        input: [{item: 'minecraft:elytra'}, {item: 'minecraft:ghast_tear'}, {tag: 'forge:feathers'}],
        output: {item: 'bloodmagic:reagentair'},
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 4,
      })
      .id('bloodmagic:alchemytable/reagent_air');
  };

  const cagedMobs = () => {
    /**
     *
     * @param {String} entityType
     * @param {Array<String>} environments
     * @param {Number} time (in seconds)
     * @param {Array<OutputItem>} outputs
     * @param {Number} tier
     * @param {Boolean} water
     */
    const caging = (entityType, environments, time, outputs, tier, water) => {
      const results = outputs.map(output => {
        return {
          output: output.item.toJson(),
          minAmount: 1,
          maxAmount: output.getChance() > 1 ? parseInt(output.getChance()) : 1,
          chance: output.getChance() > 1 ? 1.0 : output.getChance(),
        };
      });

      event.custom({
        type: 'cagedmobs:entity_data',
        entity: entityType,
        samplerTier: tier || 1,
        environments: environments,
        growTicks: time * 20,
        results: results,
        requiresWater: !!water,
      });
    };

    event.remove({type: 'minecraft:crafting_shaped', mod: 'cagedmobs'});
    event.remove({type: 'minecraft:crafting_shapeless', mod: 'cagedmobs'});
    event.remove({type: 'cagedmobs:entity_data'});
    event.remove('cagedmobs:crafting/netherite_dna_sampler');

    // Iron DNA Sampler
    event.custom({
      type: 'bloodmagic:alchemytable',
      input: [{item: 'bloodmagic:throwing_dagger_syringe'}, {item: 'minecraft:iron_block'}, {item: 'aether:golden_dart'}],
      output: {item: 'cagedmobs:dna_sampler'},
      syphon: 10000,
      ticks: 500,
      upgradeLevel: 4,
    });

    // Diamond DNA Sampler
    event.custom({
      type: 'bloodmagic:alchemytable',
      input: [{item: 'bloodmagic:amethystthrowingdagger'}, {item: 'minecraft:diamond_block'}, {item: 'aether:enchanted_dart'}],
      output: {item: 'cagedmobs:diamond_dna_sampler'},
      syphon: 50000,
      ticks: 1000,
      upgradeLevel: 5,
    });

    // Mob Cage from high-tier BM :D
    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 50000,
      consumptionRate: 10,
      drainRate: 10,
      input: {item: 'supplementaries:cage'},
      output: {item: 'cagedmobs:mob_cage'},
      upgradeLevel: 4,
    });

    // Hopping Mob Cage
    event.shaped('cagedmobs:hopping_mob_cage', ['C', 'H'], {C: 'cagedmobs:mob_cage', H: 'minecraft:hopper'});

    // Environments (Pre-requisite)
    const environments = () => {
      event.remove('cagedmobs:environments/diamond_ore');
      event.remove('cagedmobs:environments/deepslate_diamond_ore');

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {tag: 'aether:aerclouds'},
        render: 'aether:cold_aercloud',
        growModifier: 1.0,
        categories: ['aether'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {tag: 'forge:actual_underground_stones'},
        render: 'minecraft:stone',
        growModifier: 1.0,
        categories: ['cave'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {item: 'minecraft:dripstone_block'},
        render: 'minecraft:stone',
        growModifier: 1.0,
        categories: ['dripstone'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {item: 'minecraft:moss_block'},
        render: 'minecraft:moss_block',
        growModifier: 1.0,
        categories: ['mossy'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {tag: 'forge:mud'},
        render: 'minecraft:mud',
        growModifier: 1.0,
        categories: ['swampy'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {tag: 'forge:ocean_blocks'},
        render: 'minecraft:gravel',
        growModifier: 1.0,
        categories: ['ocean'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {item: 'minecraft:sand'},
        render: 'minecraft:sand',
        growModifier: 1.0,
        categories: ['white_sand'],
      });

      event.custom({
        type: 'cagedmobs:environment_data',
        input: {tag: 'forge:podzol'},
        render: 'minecraft:podzol',
        growModifier: 1.0,
        categories: ['wooded'],
      });
    };

    // Individual Mob Recipes w/ Mod Compat & Rebalance! :D
    const aether = () => {
      caging('aether_redux:vanilla_swet', ['aether'], 60, [Item.of('aether_redux:vanilla_swet_ball').withChance(1)]);
      caging('aether:aechor_plant', ['aether'], 60, [Item.of('aether:aechor_petal').withChance(1)]);
      caging('aether:aerbunny', ['aether'], 60, [Item.of('minecraft:string').withChance(1)]);
      caging('aether:blue_swet', ['aether'], 60, [Item.of('aether:swet_ball').withChance(0.8), Item.of('aether:blue_aercloud').withChance(0.01)]);
      caging('aether:cockatrice', ['aether'], 60, [Item.of('minecraft:feather').withChance(1)], 2);
      caging('aether:flying_cow', ['aether'], 60, [Item.of('minecraft:leather').withChance(3.0), Item.of('minecraft:beef').withChance(2.0)]);
      caging('aether:golden_swet', ['aether'], 60, [Item.of('minecraft:glowstone').withChance(1)]);
      caging('aether:phyg', ['aether'], 60, [Item.of('minecraft:porkchop').withChance(2.0), Item.of('minecraft:feather').withChance(0.9)]);
      caging('aether:sentry', ['aether'], 60, [Item.of('aether:carved_stone').withChance(0.9), Item.of('aether:sentry_stone').withChance(0.01)], 2);
      caging('aether:sheepuff', ['aether'], 60, [Item.of('minecraft:mutton').withChance(1)]);
      caging('aether:zephyr', ['aether'], 60, [Item.of('aether:cold_aercloud').withChance(1)], 2);
      caging('deep_aether:quail', ['aether'], 60, [Item.of('minecraft:feather').withChance(2.0), Item.of('deep_aether:raw_quail').withChance(0.8)]);
      caging(
        'deep_aether:aerglow_fish',
        ['aether'],
        60,
        [Item.of('deep_aether:raw_aerglow_fish').withChance(0.9), Item.of('minecraft:bone_meal').withChance(0.1)],
        1,
        true
      );
    };

    const creeperOverhaul = () => {
      caging('creeperoverhaul:bamboo_creeper', ['wooded'], 60, [Item.of('minecraft:bamboo').withChance(1)], 2);
      caging(
        'creeperoverhaul:dark_oak_creeper',
        ['wooded'],
        60,
        [
          Item.of('minecraft:gunpowder').withChance(1),
          Item.of('minecraft:dark_oak_log').withChance(0.7),
          Item.of('minecraft:cobweb').withChance(0.03),
        ],
        2
      );
      caging('creeperoverhaul:jungle_creeper', ['wooded'], 60, [Item.of('minecraft:gunpowder').withChance(1)], 2);
      caging('creeperoverhaul:hills_creeper', ['wooded'], 60, [Item.of('minecraft:gunpowder').withChance(1)], 2);
      caging(
        'creeperoverhaul:spruce_creeper',
        ['snow', 'wooded'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:spruce_log').withChance(0.7)],
        2
      );
      caging('creeperoverhaul:snowy_creeper', ['snow'], 60, [Item.of('minecraft:white_wool').withChance(1)], 2);
      caging(
        'creeperoverhaul:badlands_creeper',
        ['sand'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:gold_nugget').withChance(0.7)],
        2
      );
      caging(
        'creeperoverhaul:beach_creeper',
        ['white_sand'],
        60,
        [
          Item.of('minecraft:gunpowder').withChance(1),
          Item.of('minecraft:sand').withChance(0.7),
          Item.of('minecraft:seagrass').withChance(0.7),
          Item.of('minecraft:nautilus_shell').withChance(0.7),
        ],
        2
      );
      caging(
        'creeperoverhaul:desert_creeper',
        ['sand'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:cactus').withChance(0.7)],
        2
      );
      caging('creeperoverhaul:savannah_creeper', ['sand'], 60, [Item.of('minecraft:acacia_log').withChance(1)], 2);
      caging('creeperoverhaul:mushroom_creeper', ['mycelium'], 60, [Item.of('minecraft:gunpowder').withChance(1)], 2);
      caging(
        'creeperoverhaul:cave_creeper',
        ['cave'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:stone').withChance(0.7), Item.of('minecraft:deepslate').withChance(0.7)],
        2
      );
      caging(
        'creeperoverhaul:dripstone_creeper',
        ['dripstone'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:pointed_dripstone').withChance(0.7)],
        2
      );
      caging(
        'creeperoverhaul:swamp_creeper',
        ['swampy'],
        60,
        [Item.of('minecraft:gunpowder').withChance(1), Item.of('minecraft:bone').withChance(0.7)],
        2
      );
      caging(
        'creeperoverhaul:ocean_creeper',
        ['ocean'],
        60,
        [Item.of('minecraft:cod').withChance(0.5), Item.of('minecraft:salmon').withChance(0.5)],
        2,
        true
      );
    };

    const ecologics = () => {
      caging('ecologics:coconut_crab', ['white_sand'], 60, [Item.of('ecologics:crab_claw').withChance(0.5)]);
    };

    const eidolon = () => {
      caging('eidolon:giant_skeleton', ['cave'], 60, [Item.of('minecraft:bone').withChance(4.0)]);
      caging('eidolon:raven', ['wooded'], 60, [Item.of('eidolon:raven_feather').withChance(0.01)]);
      caging('eidolon:slimy_slug', ['swampy'], 60, [Item.of('minecraft:slime_ball').withChance(0.85)]);
      caging('eidolon:wraith', ['cave'], 60, [Item.of('eidolon:tattered_cloth').withChance(2), Item.of('eidolon:wraith_heart').withChance(0.01)]);
      caging('eidolon:zombie_brute', ['cave'], 60, [
        Item.of('minecraft:rotten_flesh').withChance(4.0),
        Item.of('minecraft:bone').withChance(2.0),
        Item.of('eidolon:zombie_heart').withChance(0.01),
      ]);
    };

    const endermanOverhaul = () => {
      caging(
        'endermanoverhaul:badlands_enderman',
        ['sand'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('endermanoverhaul:tiny_skull').withChance(0.01)],
        2
      );
      caging(
        'endermanoverhaul:cave_enderman',
        ['cave'],
        120,
        [
          Item.of('minecraft:ender_pearl').withChance(0.9),
          Item.of('minecraft:stone').withChance(0.33),
          Item.of('minecraft:deepslate').withChance(0.33),
        ],
        2
      );
      caging('endermanoverhaul:coral_enderman', ['ocean'], 120, [Item.of('endermanoverhaul:bubble_pearl').withChance(0.65)], 2, true);
      caging(
        'endermanoverhaul:crimson_forest_enderman',
        ['nether'],
        120,
        [Item.of('endermanoverhaul:crimson_pearl').withChance(0.65), Item.of('minecraft:crimson_fungus').withChance(0.35)],
        2
      );
      caging('endermanoverhaul:dark_oak_enderman', ['wooded'], 120, [Item.of('minecraft:ender_pearl').withChance(0.9)], 2);
      caging('endermanoverhaul:desert_enderman', ['sand'], 120, [Item.of('minecraft:ender_pearl').withChance(0.9)], 2);
      caging(
        'endermanoverhaul:end_enderman',
        ['end'],
        120,
        [
          Item.of('endermanoverhaul:corrupted_pearl').withChance(0.55),
          Item.of('minecraft:chorus_fruit').withChance(0.15),
          Item.of('endermanoverhaul:enderman_tooth').withChance(0.02),
        ],
        2
      );
      caging(
        'endermanoverhaul:end_islands_enderman',
        ['end'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('endermanoverhaul:ancient_pearl').withChance(0.05)],
        2
      );
      caging('endermanoverhaul:flower_fields_enderman', ['farm'], 120, [Item.of('minecraft:ender_pearl').withChance(0.9)], 2);
      caging(
        'endermanoverhaul:ice_spikes_enderman',
        ['snow'],
        120,
        [
          Item.of('minecraft:ender_pearl').withChance(0.9),
          Item.of('endermanoverhaul:icy_pearl').withChance(0.05),
          Item.of('minecraft:packed_ice').withChance(0.3),
        ],
        2
      );
      caging(
        'endermanoverhaul:mushroom_fields_enderman',
        ['mycelium'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('minecraft:red_mushroom').withChance(0.15)],
        2
      );
      caging(
        'endermanoverhaul:nether_wastes_enderman',
        ['nether'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('minecraft:bone').withChance(0.35)],
        2
      );
      caging(
        'endermanoverhaul:savanna_enderman',
        ['sand'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('minecraft:acacia_log').withChance(0.15)],
        2
      );
      caging(
        'endermanoverhaul:snowy_enderman',
        ['snow'],
        120,
        [
          Item.of('minecraft:ender_pearl').withChance(0.9),
          Item.of('endermanoverhaul:icy_pearl').withChance(0.15),
          Item.of('minecraft:snowball').withChance(0.35),
        ],
        2
      );
      caging(
        'endermanoverhaul:soulsand_valley_enderman',
        ['nether'],
        120,
        [Item.of('endermanoverhaul:soul_pearl').withChance(0.65), Item.of('minecraft:bone').withChance(0.35)],
        2
      );
      caging(
        'endermanoverhaul:swamp_enderman',
        ['swampy'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('endermanoverhaul:summoner_pearl').withChance(0.25)],
        2
      );
      caging(
        'endermanoverhaul:warped_forest_enderman',
        ['nether'],
        120,
        [Item.of('endermanoverhaul:warped_pearl').withChance(0.65), Item.of('minecraft:warped_fungus').withChance(0.35)],
        2
      );
      caging(
        'endermanoverhaul:windswept_hills_enderman',
        ['snow', 'cave'],
        120,
        [Item.of('minecraft:ender_pearl').withChance(0.9), Item.of('endermanoverhaul:summoner_pearl').withChance(0.15)],
        2
      );
    };

    const minecraft = () => {
      // Zombie Variants
      caging('minecraft:drowned', ['ocean'], 75, [Item.of('rotten_flesh').withChance(2.0)], 2, true);
      caging('minecraft:husk', ['sand'], 90, [Item.of('rotten_flesh').withChance(0.9)], 2);
      caging('minecraft:zoglin', ['farm'], 100, [Item.of('rotten_flesh').withChance(4.0)], 2);
      caging('minecraft:zombie_horse', ['farm'], 90, [Item.of('rotten_flesh').withChance(3.0)], 2);
      caging('minecraft:zombie', ['cave'], 60, [Item.of('rotten_flesh').withChance(0.9)], 2);
      caging('minecraft:zombified_piglin', ['nether'], 90, [Item.of('rotten_flesh').withChance(3.0)], 2);

      // Generic cave mobs
      caging(
        'minecraft:cave_spider',
        ['cave'],
        60,
        [Item.of('minecraft:string').withChance(0.9), Item.of('minecraft:spider_eye').withChance(0.1)],
        2
      );
      caging('minecraft:creeper', ['cave'], 60, [Item.of('minecraft:gunpowder').withChance(0.9)], 2);
      caging('minecraft:enderman', ['cave'], 120, [Item.of('minecraft:ender_pearl').withChance(0.9)], 2);
      caging('minecraft:skeleton', ['cave'], 60, [Item.of('minecraft:arrow').withChance(0.9), Item.of('minecraft:bone').withChance(0.9)], 2);
      caging('minecraft:spider', ['cave'], 60, [Item.of('minecraft:string').withChance(0.9), Item.of('minecraft:spider_eye').withChance(0.1)], 2);

      // Water Mobs
      caging('minecraft:cod', ['ocean'], 60, [Item.of('minecraft:cod').withChance(0.9), Item.of('minecraft:bone_meal').withChance(0.05)], 1, true);
      caging('minecraft:dolphin', ['ocean'], 60, [Item.of('minecraft:cod').withChance(0.9)], 1, true);
      caging('minecraft:glow_squid', ['ocean'], 60, [Item.of('minecraft:glow_ink_sac').withChance(0.9)], 1, true);
      caging(
        'minecraft:guardian',
        ['ocean'],
        60,
        [Item.of('minecraft:cod').withChance(2.0), Item.of('minecraft:wet_sponge').withChance(0.015)],
        2,
        true
      );
      caging(
        'minecraft:pufferfish',
        ['ocean'],
        60,
        [Item.of('minecraft:pufferfish').withChance(0.9), Item.of('minecraft:bone_meal').withChance(0.05)],
        1,
        true
      );
      caging(
        'minecraft:salmon',
        ['ocean'],
        60,
        [Item.of('minecraft:salmon').withChance(0.9), Item.of('minecraft:bone_meal').withChance(0.05)],
        1,
        true
      );
      caging('minecraft:squid', ['ocean'], 60, [Item.of('minecraft:ink_sac').withChance(0.9)], 1, true);
      caging(
        'minecraft:tropical_fish',
        ['ocean'],
        60,
        [Item.of('minecraft:tropical_fish').withChance(0.9), Item.of('minecraft:bone_meal').withChance(0.05)],
        1,
        true
      );
      caging('minecraft:turtle', ['ocean'], 60, [Item.of('minecraft:seagrass').withChance(0.9)], 1, true);

      // Farm Animals
      caging('minecraft:chicken', ['farm'], 60, [Item.of('minecraft:feather').withChance(2.0), Item.of('minecraft:chicken').withChance(0.9)]);
      caging('minecraft:cow', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0), Item.of('minecraft:beef').withChance(0.9)]);
      caging('minecraft:donkey', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0)]);
      caging('minecraft:horse', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0)]);
      caging('minecraft:llama', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0)]);
      caging('minecraft:mooshroom', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0), Item.of('minecraft:beef').withChance(0.9)]);
      caging('minecraft:mule', ['farm'], 60, [Item.of('minecraft:leather').withChance(2.0)]);
      caging('minecraft:pig', ['farm'], 60, [Item.of('minecraft:porkchop').withChance(0.9)]);
      caging('minecraft:rabbit', ['farm'], 60, [
        Item.of('minecraft:rabbit_hide').withChance(0.5),
        Item.of('minecraft:rabbit').withChance(0.9),
        Item.of('minecraft:rabbit_foot').withChance(0.001),
      ]);
      caging('minecraft:sheep', ['farm'], 60, [Item.of('minecraft:mutton').withChance(0.9)]);
      caging('minecraft:skeleton_horse', ['farm'], 60, [Item.of('minecraft:bone').withChance(0.9)]);

      // Snow Mobs
      caging('minecraft:polar_bear', ['snow'], 100, [Item.of('minecraft:cod').withChance(0.6), Item.of('minecraft:salmon').withChance(0.6)]);
      caging('minecraft:snow_golem', ['snow'], 40, [Item.of('minecraft:snowball').withChance(0.25)]);
      caging('minecraft:stray', ['snow'], 60, [Item.of('minecraft:arrow').withChance(0.9), Item.of('minecraft:bone').withChance(0.9)], 2);

      // Nether Mobs

      caging('minecraft:blaze', ['nether'], 60, [Item.of('minecraft:blaze_rod').withChance(0.66)], 2);
      caging('minecraft:ghast', ['nether'], 60, [Item.of('minecraft:gunpowder').withChance(0.9), Item.of('minecraft:ghast_tear').withChance(0.1)], 2);
      caging('minecraft:hoglin', ['nether'], 60, [
        Item.of('nethersdelight:hoglin_loin').withChance(0.4),
        Item.of('minecraft:leather').withChance(2.0),
      ]);
      caging('minecraft:magma_cube', ['nether'], 60, [Item.of('minecraft:magma_cream').withChance(0.3)]);
      caging('minecraft:piglin', ['nether'], 60, [Item.of('minecraft:arrow').withChance(0.9)], 2);
      caging('minecraft:strider', ['nether'], 60, [Item.of('nethersdelight:strider_slice').withChance(0.4)]);
      caging(
        'minecraft:wither_skeleton',
        ['nether'],
        60,
        [Item.of('minecraft:bone').withChance(2.0), Item.of('minecraft:wither_skeleton_skull').withChance(0.001)],
        2
      );

      // Misc
      caging('minecraft:panda', ['wooded'], 90, [Item.of('minecraft:bamboo').withChance(0.9)]);
      caging('minecraft:parrot', ['wooded'], 30, [Item.of('minecraft:feather').withChance(0.9)]);

      caging('minecraft:slime', ['swampy'], 60, [Item.of('minecraft:slime_ball').withChance(0.9)]);
      caging('minecraft:witch', ['swampy'], 60, [Item.of('minecraft:stick').withChance(0.9)], 2);

      caging('minecraft:iron_golem', ['farm'], 300, [Item.of('minecraft:poppy').withChance(5.0)]);

      caging('minecraft:phantom', ['end'], 60, [Item.of('minecraft:phantom_membrane').withChance(0.45)], 2);
      caging('minecraft:shulker', ['end'], 60, [Item.of('minecraft:shulker_shell').withChance(0.45)], 2);
    };

    const naturalist = () => {
      caging('naturalist:duck', ['white_sand'], 60, [Item.of('minecraft:feather').withChance(0.45), Item.of('naturalist:duck').withChance(0.45)]);
      caging('naturalist:bass', ['white_sand'], 60, [Item.of('naturalist:bass').withChance(0.9)], 1, true);
      caging('naturalist:catfish', ['swampy'], 60, [Item.of('naturalist:catfish').withChance(0.9)], 1, true);

      caging('naturalist:bluejay', ['farm'], 60, [Item.of('minecraft:feather').withChance(0.9)]);
      caging('naturalist:canary', ['farm'], 60, [Item.of('minecraft:feather').withChance(0.9)]);
      caging('naturalist:cardinal', ['farm'], 60, [Item.of('minecraft:feather').withChance(0.9)]);
      caging('naturalist:robin', ['farm'], 60, [Item.of('minecraft:feather').withChance(0.9)]);

      caging('naturalist:boar', ['wooded'], 60, [Item.of('minecraft:leather').withChance(0.22), Item.of('minecraft:porkchop').withChance(0.22)]);
      caging('naturalist:deer', ['wooded'], 60, [Item.of('naturalist:venison').withChance(0.9), Item.of('naturalist:antler').withChance(0.01)]);

      caging('naturalist:dragonfly', ['swampy'], 60, [
        Item.of('naturalist:azure_froglass').withChance(0.25),
        Item.of('naturalist:verdant_froglass').withChance(0.25),
        Item.of('naturalist:crimson_froglass').withChance(0.25),
      ]);

      caging('naturalist:firefly', ['wooded', 'swampy'], 60, [Item.of('naturalist:glow_goop').withChance(0.45)]);
      caging('naturalist:snail', ['wooded', 'swampy'], 60, [
        Item.of('minecraft:slime_ball').withChance(0.15),
        Item.of('naturalist:snail_shell').withChance(0.015),
      ]);
    };

    const spawn = () => {
      caging('spawn:angler_fish', ['ocean'], 60, [Item.of('spawn:angler_fish').withChance(0.9)], 1, true);
      caging('spawn:tuna', ['ocean'], 60, [Item.of('spawn:tuna_chunk').withChance(0.9)], 1, true);
    };

    environments();
    [aether, creeperOverhaul, ecologics, eidolon, endermanOverhaul, minecraft, naturalist, spawn].forEach(module => module());
  };

  const eidolon = () => {
    // Polished Planks via Create Sanding.
    event.recipes.create.sandpaper_polishing('eidolon:polished_planks', ['#custom:polishable_planks']);
    // Pewter Blend should actually be a blend, not just two ingots slapped together willy nilly
    event.remove('eidolon:pewter_blend');
    event.shapeless(Item.of('eidolon:pewter_blend', 2), ['#forge:ingots/tin', 'minecraft:clay_ball', 'minecraft:clay_ball', '#forge:nuggets/lead']);
    // The new pewter blend texture looks like it would need to be *blasted* -- remove smelting recipe
    event.remove('eidolon:smelt_pewter_blend');

    // Easier recipes for later on
    /* Embers Melting */
    event.custom({
      type: 'embers:stamping',
      input: {tag: 'forge:nuggets/lead'},
      stamp: {item: 'embers:ingot_stamp'},
      fluid: {amount: 90, tag: 'forge:molten_tin'},
      output: {item: 'eidolon:pewter_ingot'},
    });

    /* Create Mixing */
    event.recipes.create.mixing('eidolon:pewter_ingot', ['#forge:ingots/tin', '#forge:nuggets/lead']).heated();

    /* Kiln */
    event.custom({
      type: 'immersiveengineering:alloy',
      input0: {tag: 'forge:ingots/tin'},
      input1: {tag: 'forge:nuggets/lead'},
      result: {base_ingredient: {tag: 'forge:ingots/pewter'}},
      time: 200,
    });

    /* Arc Furnace */
    event.custom({
      type: 'immersiveengineering:arc_furnace',
      energy: 6400,
      time: 200,
      input: {tag: 'forge:ingots/tin'},
      additives: [{tag: 'forge:nuggets/lead'}],
      results: [{base_ingredient: {tag: 'forge:ingots/pewter'}}],
    });
  };

  const embers = () => {
    // Gate the Tinker Hammer behind Hellforged Ingots from BloodMagic
    event.remove({output: 'embers:tinker_hammer'});
    event.shaped('embers:tinker_hammer', ['LDL', 'LSL', ' S '], {
      L: '#forge:ingots/pewter',
      D: '#forge:ingots/hellforged',
      S: '#forge:rods/wooden',
    });

    // More pewter recipes are done via custom:recipes/stamping/pewter_from_molten_*.json

    // Make Caminite Brick consume Angelic Stone
    event.remove('embers:caminite_bricks');
    event.shaped(Item.of('embers:caminite_bricks', 2), [' C ', 'CAC', ' C '], {
      C: 'embers:caminite_brick',
      A: 'aether:angelic_stone',
    });

    // I swear to god the alchemy mechanic in Embers is straight crap...
    event.findRecipes({type: 'embers:alchemy'}).forEach(recipe => {
      // parse from GSON json to JS object
      let j = JSON.parse(recipe.json.toString());

      recipe.remove();
      event
        .custom({
          type: 'eidolon:ritual_brazier_crafting',
          focusItems: Ingredient.of(j.aspects).toJson(),
          pedestalItems: Ingredient.of(j.inputs).toJson(),
          reagent: [j.tablet],
          output: Item.of(j.output).toJson(),
        })
        .id(recipe.getId());
    });
  };

  const waystones = () => {
    event.remove({mod: 'waystones'});

    event.shaped('waystones:warp_stone', ['SZS', 'ZTZ', 'SZS'], {
      Z: 'aether:zanite_gemstone',
      T: 'bloodmagic:teleposerfocus',
      S: 'eidolon:soul_shard',
    });

    event.custom({
      type: 'bloodmagic:alchemytable',
      input: [
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'endermanoverhaul:soul_pearl'},
      ],
      output: {item: 'waystones:bound_scroll', count: 5},
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 3,
    });

    event.custom({
      type: 'bloodmagic:alchemytable',
      input: [
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'eidolon:parchment'},
        {item: 'minecraft:emerald'},
        {item: 'waystones:warp_stone'},
      ],
      output: {item: 'waystones:warp_scroll', count: 3},
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 2,
    });

    event.shaped('waystones:waystone', [' S ', 'SBS', 'STS'], {
      T: 'waystones:warp_stone',
      B: 'bloodmagic:blankslate',
      S: 'minecraft:stone',
    });

    event.shaped('waystones:mossy_waystone', [' S ', 'SBS', 'STS'], {
      T: 'waystones:warp_stone',
      B: 'bloodmagic:blankslate',
      S: 'regions_unexplored:mossy_stone',
    });

    event.shaped('waystones:sandy_waystone', [' S ', 'SBS', 'STS'], {
      T: 'waystones:warp_stone',
      B: 'bloodmagic:blankslate',
      S: '#forge:sandstone/colorless',
    });

    event.shaped('waystones:sharestone', ['SLS', 'FWF', 'SLS'], {
      S: 'minecraft:stone',
      L: 'minecraft:stone_slab',
      W: 'waystones:warp_stone',
      F: 'minecraft:stone_brick_wall',
    });

    event.shaped('waystones:portstone', ['W', 'S'], {W: 'waystones:warp_stone', S: 'minecraft:stone_brick_stairs'});

    [
      'black',
      'blue',
      'brown',
      'cyan',
      'gray',
      'green',
      'light_blue',
      'light_gray',
      'lime',
      'magenta',
      'orange',
      'pink',
      'purple',
      'red',
      'white',
      'yellow',
    ].forEach(color => {
      event.shapeless(`waystones:${color}_sharestone`, [`#forge:dyes/${color}`, '#waystones:sharestones']);
    });
  };

  [aether, bloodMagic, cagedMobs, eidolon, embers, waystones].forEach(module => module());
});

LootJS.modifiers(event => {
  // Remove anything with Mending on it from *all* loot tables
  event.addLootTableModifier(/.*/).removeLoot(ItemFilter.hasEnchantment('minecraft:mending'));
  // Also remove vanilla Enchanting Table drops.
  event.addLootTableModifier(/.*/).removeLoot('minecraft:enchanting_table');
});

BlockEvents.rightClicked('minecraft:enchanting_table', event => {
  event.getPlayer().displayClientMessage(Text.gold(Text.translate('tooltip.kubejs.enchanting_disabled')), false);
  event.getLevel().destroyBlock(event.getBlock().getPos(), false, event.getPlayer(), 3);
  event.cancel();
});
