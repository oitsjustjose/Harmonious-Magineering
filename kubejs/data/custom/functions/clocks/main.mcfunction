execute as @a[tag=!Curios] run function custom:player/curios

execute as @a[nbt={Inventory:[{id: 'cold_sweat:soulspring_lamp'}]}] run tag @s add HasSoulspring
execute as @a[tag=!HasSoulspring, nbt={Dimension:"minecraft:the_nether"}] run function custom:player/nether

# Gamestages
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:unholy_symbol'}]}] run function custom:player/stages/aether
execute as @a[tag=!aether, nbt={Inventory:[{id: 'eidolon:holy_symbol'}]}] run function custom:player/stages/aether

schedule function custom:clocks/main 1t replace