execute as @a[tag=!Curios] run function custom:player/curios

execute as @a[nbt={Inventory:[{id: 'cold_sweat:soulspring_lamp'}]}] run tag @s add HasSoulspring
execute as @a[tag=!HasSoulspring, nbt={Dimension:"minecraft:the_nether"}] run function custom:player/nether

# Gamestages
## Aether
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:unholy_symbol'}]}] run function custom:player/stages/aether
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:holy_symbol'}]}] run function custom:player/stages/aether
## Bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:bronze_dungeon_key'}]}] run function custom:player/stages/bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:silver_dungeon_key'}]}] run function custom:player/stages/bloodmagic
execute as @a[tag=!bloodmagic, nbt={Inventory:[{id: 'aether:gold_dungeon_key'}]}] run function custom:player/stages/bloodmagic

schedule function custom:clocks/main 1t replace