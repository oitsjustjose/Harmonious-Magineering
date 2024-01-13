# Gamestages
## Aether
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:unholy_symbol'}]}] run function custom:player/stages/aether
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:holy_symbol'}]}] run function custom:player/stages/aether
## Bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:bronze_dungeon_key'}]}] run function custom:player/stages/bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:silver_dungeon_key'}]}] run function custom:player/stages/bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:gold_dungeon_key'}]}] run function custom:player/stages/bloodmagic
## Embers
execute as @a[tag=!embers, nbt={Inventory:[{id: 'embers:tinker_hammer'}]}] run function custom:player/stages/embers
## Create
execute as @a[tag=!andesitealloy, nbt={Inventory:[{id: 'embers:dawnstone_ingot'}]}] run function custom:player/stages/andesitealloy
execute as @a[tag=!create, nbt={Inventory:[{id: 'create:andesite_alloy'}]}] run function custom:player/stages/create

schedule function custom:clocks/main 20t replace