/**
 * @param {Internal.ItemStack} stack
 */

const ArmorItemCls = Java.loadClass('net.minecraft.world.item.ArmorItem');
const TieredItemCls = Java.loadClass('net.minecraft.world.item.TieredItem');


const wipeEnchantsIfMendingPresent = stack => {
  if (!stack.isEnchanted()) return;

  stack.getAllEnchantments().forEach(ench => {
    if (ench.getDescriptionId() === 'enchantment.minecraft.mending') {
      stack.enchantmentTags.clear();
      return;
    }
  });
};

PlayerEvents.inventoryChanged(event => {
  if (event.getPlayer() === null) return;
  if (event.getPlayer().getInventory() === null) return;

  const stack = event.getPlayer().getInventory().getStackInSlot(event.getSlot());
  wipeEnchantsIfMendingPresent(stack);
});

ItemEvents.firstLeftClicked(event => {
  const stack = event.getItem();
  wipeEnchantsIfMendingPresent(stack);
});

ServerEvents.recipes(event => {

  const explosiveScrapping = () => {
    const __scrap = (output, input) => {
      const tmp = AlmostUnified.getReplacementForItem(output);
      const stack = tmp.isEmpty() ? output : tmp;

      event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": input.toJson(),
        "loss_rate": 50,
        "results": [stack.toJson()]
      });
    };

    const __validate = repairItems => {
      if (repairItems.isEmpty()) return false;
      if (repairItems.getItemIds().length === 0) return false;
      if (repairItems.getItemIds().contains('minecraft:barrier')) return false;

      return true;
    };

    Ingredient.all.getStacks().forEach(stack => {
      if (global.ToolScrapBlacklist.includes(stack.id)) return;

      let repairItems = null;
      if (stack.getItem() instanceof TieredItemCls) {
        repairItems = Ingredient.of(stack.getItem().getTier().getRepairIngredient());
      } else if (/*stack.getItem() instanceof ArmorItemCls || */stack.getItem().getMaterial !== undefined) {
        repairItems = Ingredient.of(stack.getItem().getMaterial().getRepairIngredient());
      }

      if (repairItems === null) return;
      if (!__validate(repairItems)) return;
      __scrap(repairItems.getFirst(), stack);
    });
  };

  const smithingUpgrading = () => {
    const __processSet = set => {
      const findNextSet = type => {
        const results = set.filter(x => x.type === type);
        return results.length ? results[0] : null;
      };

      set.forEach(curr => {
        curr.next.forEach(id => {
          const next = findNextSet(id);
          if (!next) return;

          if (curr.items.length != next.items.length) {
            console.log(`${curr.type} and ${next.type} don't have the same count of items!!`);
            return;
          }

          for (let i = 0; i < curr.items.length; i++) {
            // If there isn't an equivalent item for this type (i.e. Embers doesn't add Lead Armor), skip it.
            if (!curr.items[i] || !next.items[i]) return;
            event.smithing(next.items[i].item, next.items[i].material, curr.items[i].item, next.items[i].material);
          }
        });
      });
    };

    Object.values(global.Tools).forEach(__processSet);
  };

  [explosiveScrapping, smithingUpgrading].forEach(module => module());
});
